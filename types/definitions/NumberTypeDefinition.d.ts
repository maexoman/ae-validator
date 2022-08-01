/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description Defines configuration methods for number-types.
 * Implements only the most basic json-schema number configurations.
 * @see https://json-schema.org/understanding-json-schema/reference/numeric.html
 * @version 1.0.0
 */
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
    constructor(integer?: boolean);
    /**
     * Configures the minimum allowed to pass validation.
     * @param minimum minimum allowed value.
     * @param exclusive indicator if the value is exclusive.
     * @returns this for method chaining.
     */
    minimum(minimum: number, exclusive?: boolean): this;
    /**
     * Configures the minimum allowed value to pass validation
     * (minimum inclusive).
     * @param minimum minimum (inclusive) allowed value.
     * @returns this for method chaining.
     */
    inclusiveMinimum(minimum: number): this;
    /**
     * Configures the minimum allowed value to pass validation
     * (minimum exclusive).
     * @param minimum minimum (exclusive) allowed value.
     * @returns this for method chaining.
     */
    exclusiveMinimum(minimum: number): this;
    /**
     * Configures the maximum allowed to pass validation.
     * @param maximum maximum allowed value.
     * @param exclusive indicator if the value is exclusive.
     * @returns this for method chaining.
     */
    maximum(maximum: number, exclusive?: boolean): this;
    /**
     * Configures the maximum allowed value to pass validation
     * (maximum inclusive).
     * @param maximum maximum (inclusive) allowed value.
     * @returns this for method chaining.
     */
    inclusiveMaximum(maximum: number): this;
    /**
     * Configures the maximum allowed value to pass validation
     * (maximum exclusive).
     * @param maximum maximum (exclusive) allowed value.
     * @returns this for method chaining.
     */
    exclusiveMaximum(maximum: number): this;
    /**
     * Configures the value to be a multiple of the provided value.
     * @param multipleOf value must be a multiple of this number.
     * @returns this for method chaining.
     */
    multipleOf(multipleOf: number): this;
}
