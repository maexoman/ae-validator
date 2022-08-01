import Optional from '../Optional';
import TypeDefinition from '../definitions/TypeDefinition';
export declare type IndexableObject = {
    [key: PropertyKey]: any;
};
export declare type OptionalObject = undefined | null | IndexableObject;
export declare type Target = IndexableObject;
export declare type PropertyDecorator = (target: IndexableObject, propertyKey: PropertyKey) => void;
export declare type TypeOptions = Map<string, any>;
export declare type PropertyDefinitions = Map<PropertyKey, TypeDefinition>;
export declare type OptionEntry = [key: string, value: any];
export declare type ITypeValidator = {
    sanatize(options: TypeOptions, value: unknown, path: PropertyKey[]): any | Optional<any>;
};
