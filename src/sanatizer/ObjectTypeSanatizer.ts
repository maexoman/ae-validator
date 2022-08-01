/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description sanatizer for object properties.
 * @version 1.0.0
 */

import DataObject from '../DataObject';
import TypeError from '../errors/all/TypeError';
import { TypeOptions } from '../types/Types';
import TypeSanatizer from './TypeSanatizer';

/**
 * Sanatizer used to sanatize object properties.
 */
export default class ObjectTypeSanatizer extends TypeSanatizer {
	/**
	 * Checks if the value isn't an object.
	 * @param value value to check.
	 * @returns true if value isn't an object.
	 */
	private static failsTypeCheck (value: unknown): boolean {
		return typeof value !== 'object' && Array.isArray (value);
	}

	/**
	 * Only executes if properties is provided in the sanatization options.
	 * Sanatizes the object itself. This is kind of recursive.
	 * @param options all sanatization options.
	 * @param value value to check.
	 * @param path path to the property that failed validation.
	 * @returns sanatized object.
	 */
	private static sanatizeOrFailProperties (
		options: TypeOptions,
		value: object,
		path: PropertyKey[]
	): object | DataObject {

		if (this.hasOption (options, 'properties') === false) {
			return value;
		}

		// The properties option contains the constructor
		// of the internal DataObject
		const objectConstructor = this.getOption<typeof DataObject> (
			options,
			'properties'
		);
		return new objectConstructor (value, path);
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
	): object | DataObject {
		if (this.failsTypeCheck (value)) {
			throw new TypeError (path, 'object');
		}

		return this.sanatizeOrFailProperties (options, value as object, path);
	}
}