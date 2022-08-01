/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description Defines Annotations for all types.
 * @version 1.0.0
 */

import { SetOption } from './GenericTypeAnnotations';

/**
 * Configures the property to be required (meaning: not undefined)
 * @description TypeScript Property-Decorator.
 */
export const Required = SetOption ('required', true);

/**
 * Configures the property to be optional (meaning: maybe undefined)
 * @description TypeScript Property-Decorator.
 */
export const NotRequired = SetOption ('required', false);

/**
 * Configures the property to be nullable (meaning: maybe null)
 * @description TypeScript Property-Decorator.
 */
export const Nullable = SetOption ('nullable', true);

/**
 * Configures the property to be not nullable (meaning: not null)
 * @description TypeScript Property-Decorator.
 */
 export const NotNullable = SetOption ('nullable', false);

/**
 * Configures the exact value the property needs to equal to pass validation.
 * @param constant required value.
 * @description Factory for a TypeScript Property-Decorator.
 * @returns TypeScript Property-Decorator
 */

// number variant
export function Const (constant: number): PropertyDecorator;

// string variant
export function Const (constant: string): PropertyDecorator;

export function Const (constant: any): PropertyDecorator {
	return SetOption ('const', constant);
}

/**
 * Configures all possible values the property can contain to pass validation.
 * @param enumeration all allowed values.
 * @description Factory for a TypeScript Property-Decorator.
 * @returns TypeScript Property-Decorator
 */

// number variant
export function Enum (enumeration: number[]): PropertyDecorator;
export function Enum (enumeration: Set<number>): PropertyDecorator;

// string variant
export function Enum (enumeration: string[]): PropertyDecorator;
export function Enum (enumeration: Set<string>): PropertyDecorator;

export function Enum (enumeration: any[] | Set<any>): PropertyDecorator {
	if (Array.isArray (enumeration)) {
		return SetOption ('enum', new Set<string> (enumeration));
	}
	return SetOption ('enum', enumeration);
}