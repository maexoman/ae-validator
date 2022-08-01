type Nullish = undefined | null;
export default class Optional<T> {

	private static readonly emptyOptional = new Optional<unknown> (null);

	private readonly value: Nullish | T;
	private readonly empty: boolean;

	public constructor (value: Nullish | T) {
		this.value = value;
		this.empty = value === undefined || value === null;
	}

	public isEmpty (): boolean {
		return this.empty;
	}

	public isPresent (): boolean {
		return this.isEmpty () === false;
	}

	public get (): T {
		if (this.isEmpty ()) {
			throw new Error ('Nothing here');
		}
		return this.value as T;
	}

	public map<U> (transformer: (value: T) => U): Optional<U> {
		if (this.isEmpty ()) {
			return Optional.empty ();
		}
		return Optional.of (transformer (this.get ()))
	}

	public filter (predicate: (value: T) => boolean): Optional<T> {
		if (this.isEmpty ()) {
			return Optional.empty ();
		}
		if (predicate (this.get ()) === false) {
			return Optional.empty ();
		}
		return this;
	}

	public ifPresent (transformer: (value: T) => void): void {
		if (this.isEmpty ()) {
			return;
		}
		transformer (this.get ());
	}


	public static ofNullable<U> (value: Nullish | U): Optional<U> {
		return new Optional<U> (value);
	}

	public static of<U> (value: U): Optional<U> {
		return Optional.ofNullable (value);
	}

	public static empty<U> (): Optional<U> {
		return this.emptyOptional as Optional<U>;
	}

}