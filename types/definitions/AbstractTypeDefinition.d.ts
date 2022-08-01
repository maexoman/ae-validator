/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description Defines configuration methods for all types.
 * @version 1.0.0
 */
import TypeDefinition from './TypeDefinition';
/**
 * Class to define types using methods.
 */
export default abstract class AbstractTypeDefinition extends TypeDefinition {
    /**
     * Configures the type definition to be required (meaning: not undefined)
     * @returns this for method chaining.
     */
    required(): this;
    /**
     * Configures the type definition to be optional (meaning: maybe undefined)
     * @returns this for method chaining.
     */
    optional(): this;
    /**
     * Configures the type definition to be nullable (meaning: maybe null)
     * @returns this for method chaining.
     */
    nullable(): this;
    /**
     * Configures the type definition to be not nullable (meaning: not null)
     * @returns this for method chaining.
     */
    notNullable(): this;
    /**
     * Configures the type definition to only accpet the
     * exact value to pass validation.
     * @param constant required value.
     * @returns this for method chaining.
     */
    const(constant: number): this;
    const(constant: string): this;
    /**
     * Configures the type definition to only accpet the one of the provided
     * values to pass validation.
     * @param enumeration all allowed values.
     * @returns this for method chaining.
     */
    enum(enumeration: number[]): this;
    enum(enumeration: Set<number>): this;
    enum(enumeration: string[]): this;
    enum(enumeration: Set<string>): this;
}
