/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description Defines Annotations for all types.
 * @version 1.0.0
 */
/**
 * Configures the property to be required (meaning: not undefined)
 * @description TypeScript Property-Decorator.
 */
export declare const Required: PropertyDecorator;
/**
 * Configures the property to be optional (meaning: maybe undefined)
 * @description TypeScript Property-Decorator.
 */
export declare const NotRequired: PropertyDecorator;
/**
 * Configures the property to be nullable (meaning: maybe null)
 * @description TypeScript Property-Decorator.
 */
export declare const Nullable: PropertyDecorator;
/**
 * Configures the property to be not nullable (meaning: not null)
 * @description TypeScript Property-Decorator.
 */
export declare const NotNullable: PropertyDecorator;
/**
 * Configures the exact value the property needs to equal to pass validation.
 * @param constant required value.
 * @description Factory for a TypeScript Property-Decorator.
 * @returns TypeScript Property-Decorator
 */
export declare function Const(constant: number): PropertyDecorator;
export declare function Const(constant: string): PropertyDecorator;
/**
 * Configures all possible values the property can contain to pass validation.
 * @param enumeration all allowed values.
 * @description Factory for a TypeScript Property-Decorator.
 * @returns TypeScript Property-Decorator
 */
export declare function Enum(enumeration: number[]): PropertyDecorator;
export declare function Enum(enumeration: Set<number>): PropertyDecorator;
export declare function Enum(enumeration: string[]): PropertyDecorator;
export declare function Enum(enumeration: Set<string>): PropertyDecorator;
