/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description Defines the type definition itself.
 * @version 1.0.0
 */

import Optional from '../Optional';
import { ITypeValidator } from '../types/Types';
import TypeSanatizer from '../sanatizer/TypeSanatizer';

/**
 * The TypeDefinition itself.
 * It encapsulates the used sanatizer and holds all sanatization options.
 * These options will be provided to the sanatizer.
 *
 * This class is used, because for annotaions, the type may not be known
 * beforehand, because the annotaions can be arranges by the user.
 *
 * This means we have to provide an abstract definition holding all options.
 * The type will be detemined at runtime.
 */
export default class TypeDefinition {

	// stores all options for the sanatizer:
	private sanatizationOptions: Map<string, any> = new Map<string, any> ();

	// the sanatizer used:
	private sanatizer: ITypeValidator = TypeSanatizer as ITypeValidator;

	/**
	 * Initializes a type definition.
	 * @param sanatizer sanatizeer to use if known on construction.
	 */
	public constructor (sanatizer: undefined | TypeSanatizer = undefined) {
		if (sanatizer === undefined) {
			return;
		}
		this.sanatizer = sanatizer as ITypeValidator;
	}

	/**
	 * Sets the sanatizer used.
	 * @param sanatizer sanatizer to use.
	 */
	public setSanatizer (sanatizer: ITypeValidator): void {
		this.sanatizer = sanatizer as ITypeValidator;
	}

	/**
	 * Sets an option for the sanatizer.
	 * @param key option name.
	 * @param value option value.
	 */
	public setOption (key: string, value: any): void {
		this.sanatizationOptions.set (key, value);
	}

	/**
	 * Deletes an option for the sanatizer.
	 * @param key option name.
	 */
	public deleteOption (key: string): void {
		this.sanatizationOptions.delete (key);
	}

	/**
	 * Method used at runtime to sanatize the provided value.
	 * @param value value to sanatize.
	 * @param path path to the property that failed validation.
	 * @returns sanatized value.
	 */
	public sanatize (value: unknown, path: PropertyKey[] = []): any | Optional<any> {
		return this.sanatizer.sanatize (this.sanatizationOptions, value, path);
	}
}