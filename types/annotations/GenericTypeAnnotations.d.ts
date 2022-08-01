/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description acts as the basic annotation engine.
 * @version 1.0.0
 */
import { ITypeValidator, OptionEntry } from '../types/Types';
/**
 * Sets the validator of the type definition.
 * @param sanatizer validator used to check and sanatize.
 * @description Factory for a TypeScript Property-Decorator.
 * @returns TypeScript Property-Decorator
 */
export declare function SetValidator(sanatizer: ITypeValidator): PropertyDecorator;
/**
 * Sets an option value of the type definition.
 * @param key option name.
 * @param value option value.
 * @description Factory for a TypeScript Property-Decorator.
 * @returns TypeScript Property-Decorator
 */
export declare function SetOption(key: string, value: any): PropertyDecorator;
/**
 * Sets multiple option values of the type definition.
 * @param options option name - option value pairs.
 * @description Factory for a TypeScript Property-Decorator.
 * @returns TypeScript Property-Decorator
 */
export declare function SetOptions(options: OptionEntry[]): PropertyDecorator;
/**
 * Sets the validator and multiple option values of the type definition.
 * @param sanatizer validator used to check and sanatize.
 * @param options option name - option value pairs.
 * @description Factory for a TypeScript Property-Decorator.
 * @returns TypeScript Property-Decorator
 */
export declare function SetTypeAndOptions(sanatizer: ITypeValidator, options: OptionEntry[]): PropertyDecorator;
