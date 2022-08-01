/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description Defines all Annotations used to configure Array-Properties.
 * Implements only the most basic json-schema array configurations.
 * @see https://json-schema.org/understanding-json-schema/reference/array.html
 * @version 1.0.0
 */
import TypeDefinition from '../definitions/TypeDefinition';
/**
 * Sets the Validator for the annotated property.
 * @description TypeScript Property-Decorator
 */
export declare const ArrayType: PropertyDecorator;
/**
 * Configures the minimum of items in the array required to pass validation.
 * @param minItems minimum number of items in the array.
 * @description Factory for a TypeScript Property-Decorator.
 * @returns TypeScript Property-Decorator
 */
export declare function MinItems(minItems: number): PropertyDecorator;
/**
 * Configures the maximum number of items in the array allowed to pass validation.
 * @param maxItems maximum number of items in the array.
 * @description Factory for a TypeScript Property-Decorator.
 * @returns TypeScript Property-Decorator
 */
export declare function MaxItems(maxItems: number): PropertyDecorator;
/**
 * Configures the Validator for the items in the array.
 * This is used to check and sanatize every item.
 * @param value Property-Definition to check against.
 * @description Factory for a TypeScript Property-Decorator.
 * @returns TypeScript Property-Decorator
 */
export declare function Items(value: TypeDefinition): PropertyDecorator;
