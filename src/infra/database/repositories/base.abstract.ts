export abstract class BaseAbstractRepo<T, B> implements BaseAbstractRepo<T, B> {
    abstract create(data: T): Promise<B>;
    abstract update(data: T): Promise<B>;
    abstract findById(id: string): Promise<B>;
    abstract findAll(): Promise<Array<B>>;
    abstract delete(id: string): Promise<void>;
}