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
	public required (): this {
		this.setOption ('required', true);
		return this;
	}

	/**
	 * Configures the type definition to be optional (meaning: maybe undefined)
	 * @returns this for method chaining.
	 */
	public optional (): this {
		this.setOption ('required', false);
		return this;
	}

	/**
	 * Configures the type definition to be nullable (meaning: maybe null)
	 * @returns this for method chaining.
	 */
	public nullable (): this {
		this.setOption ('nullable', true);
		return this;
	}

	/**
	 * Configures the type definition to be not nullable (meaning: not null)
	 * @returns this for method chaining.
	 */
	public notNullable (): this {
		this.setOption ('nullable', false);
		return this;
	}

	/**
	 * Configures the type definition to only accpet the
	 * exact value to pass validation.
	 * @param constant required value.
	 * @returns this for method chaining.
	 */

	// number variant
	public const (constant: number): this

	// string variant
	public const (constant: string): this;

	public const (constant: any): this {
		this.setOption ('const', constant);
		return this;
	}

	/**
	 * Configures the type definition to only accpet the one of the provided
	 * values to pass validation.
 	 * @param enumeration all allowed values.
	 * @returns this for method chaining.
	 */

	// number variant
	public enum (enumeration: number[]): this;
	public enum (enumeration: Set<number>): this;

	// string variant
	public enum (enumeration: string[]): this;
	public enum (enumeration: Set<string>): this;

	public enum (enumeration: any[] | Set<any>): this {
		if (Array.isArray (enumeration)) {
			this.setOption ('enum', new Set<any> (enumeration));
			return this;
		}
		this.setOption ('enum', enumeration);
		return this;
	}

}