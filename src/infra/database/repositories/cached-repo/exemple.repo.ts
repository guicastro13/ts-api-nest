import { ExempleEntity, ExempleEntityAttributes } from "../../../../entity/exemple";
import { ExempleAbstractRepo } from "../exemple.abstract";
import { MapMemory } from  "../../../../helpers/cache/map/map";

export class ExempleRepository implements ExempleAbstractRepo {
    private cache: MapMemory;
    constructor() {
        this.cache = new MapMemory();
    }
    
    async create(data: ExempleEntityAttributes): Promise<ExempleEntity> {
        const exemple = new ExempleEntity(data);
        this.cache.set(exemple.id, exemple);
        return exemple;
    }

    async update(data: ExempleEntityAttributes): Promise<ExempleEntity> {
        const exemple = new ExempleEntity(data);
        this.cache.set(exemple.id, exemple);
        return exemple;
    }

    async findById(id: string): Promise<ExempleEntity> {
        const exemple =  this.cache.get(id) as ExempleEntity;
        if (!exemple) {
            throw new Error("Exemple not found");
        }
        return new ExempleEntity(exemple);
    }

    async findAll(): Promise<Array<ExempleEntity>> {
        const exemples = this.cache.getAll() as Array<ExempleEntity>;
        return exemples.map(exemple => new ExempleEntity(exemple));
    }

    async delete(id: string): Promise<void> {
        this.cache.delete(id);
    }
}