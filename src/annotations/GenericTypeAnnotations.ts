/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description acts as the basic annotation engine.
 * @version 1.0.0
 */

import { ITypeValidator, OptionEntry, PropertyDefinitions, Target } from '../types/Types';
import TypeDefinition from '../definitions/TypeDefinition';

/**
 * This functions ensures that the annotation target contains a field
 * calles '__properties'. This field contains all Type-Definitions used
 * for validation.
 * @param target Annotation Target. (Should be the prototype).
 * @returns All property definitions.
 * @private
 */
function ensurePropertyDefinitions (target: Target): PropertyDefinitions {
	if (target.hasOwnProperty ('__properties') === false) {
		const properties = new Map<PropertyKey, TypeDefinition> ();
		target ['__properties'] = properties;
		return properties;
	}
	return target ['__properties'] as PropertyDefinitions;
}

/**
 * This function ensures that the '__properties' map stored by the
 * annotation target contains a type definition object.
 * @param target Annotation Target. (Should be the prototype).
 * @param propertyKey The actual property name.
 * @returns All current type definitions.
 * @private
 */
function ensureTypeDefinition (target: Target, propertyKey: PropertyKey): TypeDefinition {
	const metadata = ensurePropertyDefinitions (target);
	if (metadata.has (propertyKey) === false) {
		const definition = new TypeDefinition ();
		metadata.set (propertyKey, definition);
		return definition;
	}
	return metadata.get (propertyKey) as TypeDefinition;
}

/**
 * Sets the validator of the type definition.
 * @param sanatizer validator used to check and sanatize.
 * @description Factory for a TypeScript Property-Decorator.
 * @returns TypeScript Property-Decorator
 */
export function SetValidator (sanatizer: ITypeValidator): PropertyDecorator {
	return function (target: Target, propertyKey: PropertyKey): void {
		ensureTypeDefinition (target, propertyKey).setSanatizer (sanatizer);
	}
}

/**
 * Sets an option value of the type definition.
 * @param key option name.
 * @param value option value.
 * @description Factory for a TypeScript Property-Decorator.
 * @returns TypeScript Property-Decorator
 */
export function SetOption (key: string, value: any): PropertyDecorator {
	return function (target: Target, propertyKey: PropertyKey): void {
		ensureTypeDefinition (target, propertyKey).setOption (key, value);
	}
}

/**
 * Sets multiple option values of the type definition.
 * @param options option name - option value pairs.
 * @description Factory for a TypeScript Property-Decorator.
 * @returns TypeScript Property-Decorator
 */
export function SetOptions (options: OptionEntry[]): PropertyDecorator {
	return function (target: Target, propertyKey: PropertyKey): void {
		const definition = ensureTypeDefinition (target, propertyKey);
		options.forEach (([key, value]) => definition.setOption (key, value));
	}
}

/**
 * Sets the validator and multiple option values of the type definition.
 * @param sanatizer validator used to check and sanatize.
 * @param options option name - option value pairs.
 * @description Factory for a TypeScript Property-Decorator.
 * @returns TypeScript Property-Decorator
 */
export function SetTypeAndOptions (sanatizer: ITypeValidator, options: OptionEntry[]): PropertyDecorator {
	return function (target: Target, propertyKey: PropertyKey): void {
		const definition = ensureTypeDefinition (target, propertyKey);
		definition.setSanatizer (sanatizer);
		options.forEach (([key, value]) => definition.setOption (key, value));
	}
}