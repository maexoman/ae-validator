/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description Defines all Annotations used to configure Array-Properties.
 * Implements only the most basic json-schema array configurations.
 * @see https://json-schema.org/understanding-json-schema/reference/array.html
 * @version 1.0.0
 */

import TypeDefinition from '../definitions/TypeDefinition';
import ArrayTypeSanatizer from '../sanatizer/ArrayTypeSanatizer';
import {SetValidator, SetOption} from './GenericTypeAnnotations';

/**
 * Sets the Validator for the annotated property.
 * @description TypeScript Property-Decorator
 */
export const ArrayType = SetValidator (ArrayTypeSanatizer);

/**
 * Configures the minimum of items in the array required to pass validation.
 * @param minItems minimum number of items in the array.
 * @description Factory for a TypeScript Property-Decorator.
 * @returns TypeScript Property-Decorator
 */
export function MinItems (minItems: number): PropertyDecorator {
	return SetOption ('minItems', minItems);
}

/**
 * Configures the maximum number of items in the array allowed to pass validation.
 * @param maxItems maximum number of items in the array.
 * @description Factory for a TypeScript Property-Decorator.
 * @returns TypeScript Property-Decorator
 */
export function MaxItems (maxItems: number): PropertyDecorator {
	return SetOption ('maxItems', maxItems);
}

/**
 * Configures the Validator for the items in the array.
 * This is used to check and sanatize every item.
 * @param value Property-Definition to check against.
 * @description Factory for a TypeScript Property-Decorator.
 * @returns TypeScript Property-Decorator
 */
export function Items (value: TypeDefinition): PropertyDecorator {
	return SetOption ('items', value);
}