/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description Defines all Annotations used to configure String-Properties.
 * Implements only the most basic json-schema string configurations.
 * @see https://json-schema.org/understanding-json-schema/reference/string.html
 * @version 1.0.0
 */

import StringTypeSanatizer from '../sanatizer/StringTypeSanatizer';
import {SetValidator, SetOption} from './GenericTypeAnnotations';

/**
 * Sets the Validator for the annotated property.
 * @description TypeScript Property-Decorator
 */
export const StringType = SetValidator (StringTypeSanatizer);

/**
 * Configures the exact length the properties value needs to pass valdiation.
 * @param length allowed length.
 * @description Factory for a TypeScript Property-Decorator.
 * @returns TypeScript Property-Decorator
 */
export function Length (length: number): PropertyDecorator {
	return SetOption ('length', length);
}

/**
 * Configures the minimum length the properties value needs to pass valdiation.
 * @param minLength minimum length required (inclusive).
 * @description Factory for a TypeScript Property-Decorator.
 * @returns TypeScript Property-Decorator
 */
export function MinLength (minLength: number): PropertyDecorator {
	return SetOption ('minLength', minLength);
}

/**
 * Configures the maximum length the properties value needs to pass valdiation.
 * @param maximum maximum length required (inclusive).
 * @description Factory for a TypeScript Property-Decorator.
 * @returns TypeScript Property-Decorator
 */
export function MaxLength (maximum: number): PropertyDecorator {
	return SetOption ('maxLength', maximum);
}

/**
 * Configures pattern the properties value needs to match
 * against to pass valdiation.
 * @param pattern pattern to check against.
 * @description Factory for a TypeScript Property-Decorator.
 * @returns TypeScript Property-Decorator
 */
export function Pattern (pattern: RegExp): PropertyDecorator {
	return SetOption ('pattern', pattern);
}