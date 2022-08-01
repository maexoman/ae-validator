import DataObject from '../src/DataObject';
import {
	NotNullable,
	Required,
	StringType,
	MaxLength,
	MinLength,
	Pattern,
	EMail,
	NotRequired,
	Nullable,
	NumberType,
	Minimum,
	Maximum,
	ArrayType,
	MaxItems,
	Items
} from '../src/index';
import Optional from '../src/Optional';
import { MinItems } from '../src/annotations/ArrayTypeAnnotations';
import Types from '../src/Types';

class User extends DataObject {

	@Required
	@NotNullable
	@StringType
	@MinLength (2)
	@MaxLength (100)
	@Pattern (/^[0-9a-zA-Z ]+$/)
	public readonly name!: string;

	@Required
	@NotNullable
	@EMail
	public readonly email!: string;

	@NotRequired
	@Nullable
	@NumberType
	@Minimum (18)
	@Maximum (150)
	public readonly age!: Optional<number>

	@Required
	@NotNullable
	@ArrayType
	@MinItems (1)
	@MaxItems (3)
	@Items (
		Types
			.String()
			.required()
			.notNullable()
			.enum(['A', 'B', 'C'])
	)
	public readonly tags!: string[]

}


test ('invalid user name length', () => {
	const parseUser = () => new User ({
		name: 'M',
		email: 'example@example.com',
		tags: ['A']
	});
	expect (parseUser).toThrow ('@body://properties/name/minLength')
});

test ('invalid user name length (maximum exceeded)', () => {
	const parseUser = () => new User ({
		name: 'BnNUyJEBKXOsZQGRtluM6Rjw5DQRL7Mqg9CIL7mlTgu7AGZG8Rlo4DgeEQDzjI1EQlc6iLeGoGWvyCJUXb5bnNaABRY4jj9f8Uok7o7foCqbHqmT3lHJI0fWHKyLCBTB4WCTRFkphw7CzpE4YQv47wg',
		email: 'example@example.com',
		tags: ['A']
	});
	expect (parseUser).toThrow ('@body://properties/name/maxLength')
});

test ('invalid user name pattern', () => {
	const parseUser = () => new User ({
		name: 'M!',
		email: 'example@example.com',
		tags: ['A']
	});
	expect (parseUser).toThrow ('@body://properties/name/pattern')
});

test ('valid user name length', () => {
	const parsedUser = new User ({
		name: 'Max',
		email: 'example@example.com',
		tags: ['A']
	});
	expect (parsedUser).toHaveProperty('name', 'Max')
});

test ('valid user emaiil', () => {
	const parsedUser = new User ({
		name: 'Max',
		email: 'example@example.com',
		tags: ['A']
	});
	expect (parsedUser).toHaveProperty('email', 'example@example.com')
});

test ('invalid age (to low)', () => {
	const parseUser = () => new User ({
		name: 'Max',
		email: 'example@example.com',
		age: 1,
		tags: ['A']
	});
	expect (parseUser).toThrow('@body://properties/age/minimum')
});

test ('invalid age (to high)', () => {
	const parseUser = () => new User ({
		name: 'Max',
		email: 'example@example.com',
		age: 151,
		tags: ['A']
	});
	expect (parseUser).toThrow('@body://properties/age/maximum')
});

test ('valid unset age', () => {
	const parsedUser = new User ({
		name: 'Max',
		email: 'example@example.com',
		tags: ['A']
	});
	expect (parsedUser).toHaveProperty('age', Optional.empty())
});

test ('valid age', () => {
	const parsedUser = new User ({
		name: 'Max',
		email: 'example@example.com',
		age: 18,
		tags: ['A']
	});
	expect (parsedUser).toHaveProperty('age', Optional.of (18))
});

test ('invalid tag', () => {
	const parseUser = () => new User ({
		name: 'Max',
		email: 'example@example.com',
		tags: ['Z']
	});
	expect (parseUser).toThrow('@body://properties/tags/items/0/enum')
});

test ('invalid empty tags-array', () => {
	const parseUser = () => new User ({
		name: 'Max',
		email: 'example@example.com',
		tags: []
	});
	expect (parseUser).toThrow('@body://properties/tags/minItems')
});

test ('invalid tags-array item length', () => {
	const parseUser = () => new User ({
		name: 'Max',
		email: 'example@example.com',
		tags: ['A', 'B', 'C', 'A']
	});
	expect (parseUser).toThrow('@body://properties/tags/maxItems')
});

test ('invalid tags-array undefined item', () => {
	const parseUser = () => new User ({
		name: 'Max',
		email: 'example@example.com',
		tags: [undefined]
	});
	expect (parseUser).toThrow('@body://properties/tags/items/0/type')
});