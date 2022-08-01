/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description Defines all Annotations used to configure Number-Properties.
 * Implements only the most basic json-schema number configurations.
 * @see https://json-schema.org/understanding-json-schema/reference/numeric.html
 * @version 1.0.0
 */
/**
 * Sets the Validator for the annotated property.
 * @description TypeScript Property-Decorator
 */
export declare const NumberType: PropertyDecorator;
export declare const IntegerType: PropertyDecorator;
/**
 * Configures the minimum allowed value to pass validation.
 * @param minimum minimum allowed value.
 * @param exclusive indicator if the value is exclusive.
 * @description Factory for a TypeScript Property-Decorator.
 * @returns TypeScript Property-Decorator
 */
export declare function Minimum(minimum: number, exclusive?: boolean): PropertyDecorator;
/**
 * Configures the minimum allowed value to pass validation (minimum inclusive).
 * @param minimum minimum (inclusive) allowed value.
 * @description Factory for a TypeScript Property-Decorator.
 * @returns TypeScript Property-Decorator
 */
export declare function InclusiveMinimum(value: number): PropertyDecorator;
/**
 * Configures the minimum allowed value to pass validation (minimum exclusive).
 * @param minimum minimum (exclusive) allowed value.
 * @description Factory for a TypeScript Property-Decorator.
 * @returns TypeScript Property-Decorator
 */
export declare function ExclusiveMinimum(value: number): PropertyDecorator;
/**
 * Configures the maximum allowed value to pass validation.
 * @param maximum maximum allowed value.
 * @param exclusive indicator if the value is exclusive.
 * @description Factory for a TypeScript Property-Decorator.
 * @returns TypeScript Property-Decorator
 */
export declare function Maximum(maximum: number, exclusive?: boolean): PropertyDecorator;
/**
 * Configures the maximum allowed value to pass validation (maximum inclusive).
 * @param minimum maximum (inclusive) allowed value.
 * @description Factory for a TypeScript Property-Decorator.
 * @returns TypeScript Property-Decorator
 */
export declare function InclusiveMaximum(maximum: number): PropertyDecorator;
/**
 * Configures the maximum allowed value to pass validation (maximum exclusive).
 * @param maximum maximum (exclusive) allowed value.
 * @description Factory for a TypeScript Property-Decorator.
 * @returns TypeScript Property-Decorator
 */
export declare function ExclusiveMaximum(maximum: number): PropertyDecorator;
/**
 * Configures the property to be required to
 * contain a multiple of the provided value to pass validation.
 * @param multipleOf value of which the property must be a multiple of.
 * @description Factory for a TypeScript Property-Decorator.
 * @returns TypeScript Property-Decorator
 */
export declare function MultipleOf(multipleOf: number): PropertyDecorator;
