/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description Most basic type sanatizer. Cannot be used directly.
 * @version 1.0.0
 */

import Optional from '../Optional';
import TypeError from '../errors/all/TypeError';
import { TypeOptions } from '../types/Types';

/**
 * The Sanatizer. Cannot be used directly.
 */
export default class TypeSanatizer {
	/**
	 * Checks if the option is present in the options map.
	 * @param options all sanatiziation options.
	 * @param key wanted option.
	 * @returns true if the map contains the option.
	 */
	protected static hasOption (options: TypeOptions, key: string): boolean {
		return options.has (key);
	}

	/**
	 * Gets the option from the options map.
	 * @param options all sanatiziation options.
	 * @param key wanted option.
	 * @returns option.
	 */
	protected static getOption<T> (options: TypeOptions, key: string): T {
		return options.get (key) as T;
	}

	/**
	 * Gets the option or the provided fallback from the options map.
	 * @param options all sanatiziation options.
	 * @param key wanted option.
	 * @param fallback value to get if option is not present.
	 * @returns value of the option or the fallback if option is not present.
	 */
	protected static getOptionOrDefault<T> (options: TypeOptions, key: string, fallback: T): T {
		if (this.hasOption (options, key) === false) {
			return fallback;
		}
		return this.getOption<T> (options, key);
	}

	/**
	 * Initializes the sanatization.
	 * Does basic require and nullable checks and hands of to the actual
	 * type sanatizers.
	 * @param options all sanatization options.
	 * @param value value to sanatize.
	 * @param path path used to show where the error occured.
	 * @returns sanatized value.
	 */
	public static sanatize (options: TypeOptions, value: unknown, path: string[]): any {

		const required = this.getOptionOrDefault<boolean> (options, 'required', false);
		const nullable = this.getOptionOrDefault<boolean> (options, 'nullable',  true);

		if (required === true && value === undefined) {
			throw new TypeError (path, 'not undefined');
		}

		if (nullable === false && value === null) {
			throw new TypeError (path, 'not null');
		}

		// if undefined or null where forbidden it would have thrown above.
		// if value is still undefined or null its an optional one.
		// return an empty option.
		if (value === undefined || value === null) {
			return Optional.empty ();
		}

		const result = this.sanatizeOrFail (options, value, path);

		// If the property is set to be optional in any way,
		// the sanatized value has to be wrapped in an optional.
		if (required === false || nullable === true) {
			return Optional.ofNullable (result);
		}

		return result;

	}

	/**
	 * Sanatization funciton to be implemented by the type sanatizers.
	 * @param _options all sanatization options.
	 * @param _value value to sanatize.
	 * @param _path path to the property that failed validation.
	 * @returns sanatized value.
	 */
	protected static sanatizeOrFail (_options: TypeOptions, _value: unknown, _path: PropertyKey[]): any | Optional<any> {
		throw new Error ('Make sure to provide a proper type');
	}
}