/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description Defines all Annotations used to configure Number-Properties.
 * Implements only the most basic json-schema number configurations.
 * @see https://json-schema.org/understanding-json-schema/reference/numeric.html
 * @version 1.0.0
 */

import NumberTypeSanatizer from '../sanatizer/NumberTypeSanatizer';
import {SetValidator, SetOption, SetTypeAndOptions, SetOptions} from './GenericTypeAnnotations';

/**
 * Sets the Validator for the annotated property.
 * @description TypeScript Property-Decorator
 */
export const NumberType = SetValidator (NumberTypeSanatizer);
export const IntegerType = SetTypeAndOptions (NumberTypeSanatizer, [
	['integer', true]
]);

/**
 * Configures the minimum allowed value to pass validation.
 * @param minimum minimum allowed value.
 * @param exclusive indicator if the value is exclusive.
 * @description Factory for a TypeScript Property-Decorator.
 * @returns TypeScript Property-Decorator
 */
export function Minimum (
	minimum: number,
	exclusive: boolean = false
): PropertyDecorator {
	return SetOptions ([
		['minimum', minimum],
		['exclusiveMinimum', exclusive]
	]);
}

/**
 * Configures the minimum allowed value to pass validation (minimum inclusive).
 * @param minimum minimum (inclusive) allowed value.
 * @description Factory for a TypeScript Property-Decorator.
 * @returns TypeScript Property-Decorator
 */
export function InclusiveMinimum (value: number): PropertyDecorator {
	return Minimum (value, false);
}

/**
 * Configures the minimum allowed value to pass validation (minimum exclusive).
 * @param minimum minimum (exclusive) allowed value.
 * @description Factory for a TypeScript Property-Decorator.
 * @returns TypeScript Property-Decorator
 */
export function ExclusiveMinimum (value: number): PropertyDecorator {
	return Minimum (value, true);
}

/**
 * Configures the maximum allowed value to pass validation.
 * @param maximum maximum allowed value.
 * @param exclusive indicator if the value is exclusive.
 * @description Factory for a TypeScript Property-Decorator.
 * @returns TypeScript Property-Decorator
 */
export function Maximum (maximum: number, exclusive: boolean = false): PropertyDecorator {
	return SetOptions ([
		['maximum', maximum],
		['exclusiveMaximum', exclusive]
	]);
}

/**
 * Configures the maximum allowed value to pass validation (maximum inclusive).
 * @param minimum maximum (inclusive) allowed value.
 * @description Factory for a TypeScript Property-Decorator.
 * @returns TypeScript Property-Decorator
 */
export function InclusiveMaximum (maximum: number): PropertyDecorator {
	return Maximum (maximum, false);
}

/**
 * Configures the maximum allowed value to pass validation (maximum exclusive).
 * @param maximum maximum (exclusive) allowed value.
 * @description Factory for a TypeScript Property-Decorator.
 * @returns TypeScript Property-Decorator
 */
export function ExclusiveMaximum (maximum: number): PropertyDecorator {
	return Maximum (maximum, true);
}

/**
 * Configures the property to be required to
 * contain a multiple of the provided value to pass validation.
 * @param multipleOf value of which the property must be a multiple of.
 * @description Factory for a TypeScript Property-Decorator.
 * @returns TypeScript Property-Decorator
 */
export function MultipleOf (multipleOf: number): PropertyDecorator {
	return SetOption ('multipleOf', multipleOf);
}