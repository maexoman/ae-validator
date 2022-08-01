declare type Nullish = undefined | null;
export default class Optional<T> {
    private static readonly emptyOptional;
    private readonly value;
    private readonly empty;
    constructor(value: Nullish | T);
    isEmpty(): boolean;
    isPresent(): boolean;
    get(): T;
    map<U>(transformer: (value: T) => U): Optional<U>;
    filter(predicate: (value: T) => boolean): Optional<T>;
    ifPresent(transformer: (value: T) => void): void;
    static ofNullable<U>(value: Nullish | U): Optional<U>;
    static of<U>(value: U): Optional<U>;
    static empty<U>(): Optional<U>;
}
export {};
