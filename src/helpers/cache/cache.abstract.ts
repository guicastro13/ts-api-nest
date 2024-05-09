export abstract class CacheMemoryAbstract {
    abstract set(key: string, value: any): void;
    abstract get(key: string): unknown
    abstract has(key: string): boolean
    abstract delete(key: string): boolean
    abstract clear(): void
}