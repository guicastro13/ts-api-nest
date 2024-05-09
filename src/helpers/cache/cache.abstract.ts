export abstract class CacheMemoryAbstract {
    abstract set(key: string, value: unknown): void;
    abstract get(key: string): unknown
    abstract has(key: string): boolean
    abstract getAll(): unknown
    abstract delete(key: string): boolean
    abstract clear(): void
}