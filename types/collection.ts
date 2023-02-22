type Collection<T> = {
    data: Array<T>;
};

type Attributes<T> = {
    attributes: T;
}

type AttributeCollection<T> = Collection<Attributes<T>>;


export type {Collection, AttributeCollection, Attributes};