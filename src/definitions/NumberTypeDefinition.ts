/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description Defines configuration methods for number-types.
 * Implements only the most basic json-schema number configurations.
 * @see https://json-schema.org/understanding-json-schema/reference/numeric.html
 * @version 1.0.0
 */

import NumberTypeSanatizer from '../sanatizer/NumberTypeSanatizer';
import AbstractTypeDefinition from './AbstractTypeDefinition';

/**
 * Class to define number-types using methods.
 */
export default class NumberTypeDefinition extends AbstractTypeDefinition {
	/**
	 * Sets the sanatizer of the type definition.
	 * Configures the type definition to be an integer if integer flag set.
	 * @param integer flag if the number should be an integer.
	 */
	public constructor (integer: boolean = false) {
		super (NumberTypeSanatizer);
		this.setOption ('integer', integer);
	}

	/**
	 * Configures the minimum allowed to pass validation.
	 * @param minimum minimum allowed value.
	 * @param exclusive indicator if the value is exclusive.
	 * @returns this for method chaining.
	 */
	public minimum (minimum: number, exclusive: boolean = false): this {
		this.setOption ('exclusiveMinimum', exclusive);
		this.setOption ('minimum', minimum);
		return this;
	}

	/**
	 * Configures the minimum allowed value to pass validation
	 * (minimum inclusive).
	 * @param minimum minimum (inclusive) allowed value.
	 * @returns this for method chaining.
	 */
	 public inclusiveMinimum (minimum: number): this {
		return this.minimum (minimum, false);
	}

	/**
	 * Configures the minimum allowed value to pass validation
	 * (minimum exclusive).
	 * @param minimum minimum (exclusive) allowed value.
	 * @returns this for method chaining.
	 */
	public exclusiveMinimum (minimum: number): this {
		return this.minimum (minimum, true);
	}

	/**
	 * Configures the maximum allowed to pass validation.
	 * @param maximum maximum allowed value.
	 * @param exclusive indicator if the value is exclusive.
	 * @returns this for method chaining.
	 */
	public maximum (maximum: number, exclusive: boolean = false): this {
		this.setOption ('exclusiveMaximum', exclusive);
		this.setOption ('maximum', maximum);
		return this;
	}

	/**
	 * Configures the maximum allowed value to pass validation
	 * (maximum inclusive).
	 * @param maximum maximum (inclusive) allowed value.
	 * @returns this for method chaining.
	 */
	 public inclusiveMaximum (maximum: number): this {
		return this.maximum (maximum, false);
	}

	/**
	 * Configures the maximum allowed value to pass validation
	 * (maximum exclusive).
	 * @param maximum maximum (exclusive) allowed value.
	 * @returns this for method chaining.
	 */
	public exclusiveMaximum (maximum: number): this {
		return this.maximum (maximum, true);
	}

	/**
	 * Configures the value to be a multiple of the provided value.
	 * @param multipleOf value must be a multiple of this number.
	 * @returns this for method chaining.
	 */
	public multipleOf (multipleOf: number): this {
		this.setOption ('multipleOf', multipleOf);
		return this;
	}
}