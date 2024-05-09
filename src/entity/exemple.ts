import { BaseEntity } from "../entity/base-entity";

export interface ExempleEntityAttributes {
    name: string;
    description: string;
    updatedAt?: Date;
}
export class ExempleEntity extends BaseEntity {
    name: string;
    description: string;
    updatedAt: Date | null;

    constructor(attributes: ExempleEntityAttributes) {
        super();
        this.name = attributes.name || "";
        this.description = attributes.description || "";
        this.updatedAt = attributes.updatedAt || null;
        this.validate();
    }

    validate() {
        if (!this.name || !this.description) {
            throw new Error("Name and description are required");
        }
    }
}