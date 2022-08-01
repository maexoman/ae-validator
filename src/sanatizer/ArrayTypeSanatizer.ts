/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description sanatizer for array properties.
 * @version 1.0.0
 */

import { TypeOptions } from '../types/Types';
import TypeDefinition from '../definitions/TypeDefinition';
import TypeError from '../errors/all/TypeError';
import TypeSanatizer from './TypeSanatizer';
import MinItemError from '../errors/array/MinItemError';
import MaxItemError from '../errors/array/MaxItemError';

/**
 * Sanatizer used to sanatize array properties.
 */
export default class ArrayTypeSanatizer extends TypeSanatizer {

	/**
	 * Checks if the value isn't an array.
	 * @param value value to check.
	 * @returns true if value isn't an array.
	 */
	private static failsTypeCheck (value: unknown): boolean {
		return Array.isArray (value) === false;
	}

	/**
	 * Only executes if minItems is provided in the sanatization options.
	 * Checks if the array contains at least the minimum number of items.
	 * @param options all sanatization options.
	 * @param value value to check.
	 * @returns true if value doesn't contain enough items.
	 */
	private static failsMinItemsCheck (
		options: TypeOptions,
		value: Array<any>
	): boolean {
		return (
			this.hasOption (options, 'minItems') &&
			value.length < this.getOption<number> (options, 'minItems')
		);
	}

	/**
	 * Only executes if maxItems is provided in the sanatization options.
	 * Checks if the array contains at most the maximum number of items.
	 * @param options all sanatization options.
	 * @param value value to check.
	 * @returns true if value contains more items than allowed.
	 */
	private static failsMaxItemsCheck (
		options: TypeOptions,
		value: Array<any>
	): boolean {
		return (
			this.hasOption (options, 'maxItems') &&
			value.length > this.getOption<number> (options, 'maxItems')
		);
	}

	/**
	 * Only executes if items is provided in the sanatization options.
	 * Sanatizes the items inside the array according to the items option.
	 * @param options all sanatization options.
	 * @param value value to check.
	 * @param path path to the property that failed validation.
	 * @returns sanatized array.
	 */
	private static sanatizeOrFailItems (
		options: TypeOptions,
		value: Array<any>,
		path: PropertyKey[]
	): Array<any> {

		if (this.hasOption (options, 'items') === false) {
			return value;
		}

		const itemDefinition = this.getOption<TypeDefinition> (options, 'items');
		return value.map ((item: unknown, index: number) => {
			return itemDefinition.sanatize (item, path.concat (index));
		});
	}

	/**
	 * Performs the actual type sanatization.
	 * @param options all sanatization options.
	 * @param value value to sanatize.
	 * @param path path to the property that failed validation.
	 * @returns sanatized value.
	 */
	public static override sanatizeOrFail (
		options: TypeOptions,
		value: unknown,
		path: PropertyKey[]
	): Array<any> {

		if (this.failsTypeCheck (value)) {
			throw new TypeError (path, 'array');
		}

		if (this.failsMinItemsCheck (options, value as Array<any>)) {
			throw new MinItemError (
				path,
				this.getOption<number> (options, 'minItems')
			);
		}

		if (this.failsMaxItemsCheck (options, value as Array<any>)) {
			throw new MaxItemError (
				path,
				this.getOption<number> (options, 'maxItems')
			);
		}

		return this.sanatizeOrFailItems (
			options,
			value as Array<any>,
			path.concat ('items')
		);
	}
}