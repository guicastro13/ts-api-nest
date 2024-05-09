import { randomUUID } from "crypto";

export class BaseEntity {
    id: string;
    createdAt: Date;

    constructor() {
        this.id = randomUUID();
        this.createdAt = new Date();
    }
}