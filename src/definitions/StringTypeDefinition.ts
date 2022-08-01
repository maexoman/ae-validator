/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description Defines configuration methods for string-types.
 * Implements only the most basic json-schema string configurations.
 * @see https://json-schema.org/understanding-json-schema/reference/string.html
 * @version 1.0.0
 */

import StringTypeSanatizer from '../sanatizer/StringTypeSanatizer';
import AbstractTypeDefinition from './AbstractTypeDefinition';

/**
 * Class to define number-types using methods.
 */
export default class StringPropertyDefinition extends AbstractTypeDefinition {
	/**
	 * Sets the sanatizer of the type definition.
	 */
	public constructor () { super (StringTypeSanatizer); }

	/**
	 * Configures exact length require to pass validation
	 * @param length required length.
	 * @returns this for method chaining.
	 */
	public length (length: number): this {
		this.setOption ('length', length);
		return this;
	}

	/**
	 * Configures the minimum length required to pass validation.
	 * @param minLength minimum required length (inclusive).
	 * @returns this for method chaining.
	 */
	public minLength (minLength: number): this {
		this.setOption ('minLength', minLength);
		return this;
	}

	/**
	 * Configures the maximum length allowed to pass validation.
	 * @param maxLength maximum allowed length (inclusive).
	 * @returns this for method chaining.
	 */
	 public maxLength (maxLength: number): this {
		this.setOption ('maxLength', maxLength);
		return this;
	}

	/**
	 * Configures pattern to be matched against to pass validation.
	 * @param pattern pattern to match against.
	 * @returns this for method chaining.
	 */
	public pattern (pattern: RegExp): this {
		this.setOption ('pattern', pattern);
		return this;
	}
}