/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description Defines configuration methods for array-types.
 * Implements only the most basic json-schema array configurations.
 * @see https://json-schema.org/understanding-json-schema/reference/array.html
 * @version 1.0.0
 */

import ArrayTypeSanatizer from '../sanatizer/ArrayTypeSanatizer';
import AbstractTypeDefinition from './AbstractTypeDefinition';
import TypeDefinition from './TypeDefinition';

/**
 * Class to define array-types using methods.
 */
export default class ArrayTypeDefinition extends AbstractTypeDefinition {
	/**
	 * Sets the sanatizer of the type definition.
	 */
	public constructor () { super (ArrayTypeSanatizer); }

	/**
	 * Configures the minimum required items in the type definition.
	 * @param minItems minimum required items.
	 * @returns this for method chaining.
	 */
	public minItems (minItems: number): this {
		this.setOption ('minItems', minItems);
		return this;
	}

	/**
	 * Configures the maximum allowed items in the type definition.
	 * @param maxItems maximum allowed items.
	 * @returns this for method chaining.
	 */
	public maxItems (maxItems: number): this {
		this.setOption ('maxItems', maxItems);
		return this;
	}

	/**
	 * Configures structure of the items in the type definition.
	 * @param definition type definition of the items.
	 * @returns this for method chaining.
	 */
	public items (definition: TypeDefinition): this {
		this.setOption ('items', definition);
		return this;
	}
}