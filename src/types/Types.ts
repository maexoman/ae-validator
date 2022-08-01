import Optional from '../Optional';
import TypeDefinition from '../definitions/TypeDefinition';

export type IndexableObject = { [key: PropertyKey]: any };
export type OptionalObject = undefined | null | IndexableObject;
export type Target = IndexableObject;
export type PropertyDecorator = (target: IndexableObject, propertyKey: PropertyKey) => void;
export type TypeOptions = Map<string, any>;
export type PropertyDefinitions = Map<PropertyKey, TypeDefinition>;
export type OptionEntry = [key: string, value: any];
export type ITypeValidator = {
	sanatize (options: TypeOptions, value: unknown, path: PropertyKey[]): any | Optional<any>;
}