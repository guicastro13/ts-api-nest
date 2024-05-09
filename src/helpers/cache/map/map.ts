import { CacheMemoryAbstract } from "../cache.abstract";

export class MapMemory extends CacheMemoryAbstract {
    private memory: Map<string, any>;
    constructor() {
        super();
        this.memory = new Map();
    }
    public set(key: string, value: any) {
        this.memory.set(key, value);
    }

    public get(key: string): any {
        return this.memory.get(key);
    }

    public has(key: string): boolean {
        return this.memory.has(key);
    }

    public delete(key: string): boolean {
        return this.memory.delete(key);
    }

    public clear(): void {
        this.memory.clear();
    }
}