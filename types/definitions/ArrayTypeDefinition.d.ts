/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description Defines configuration methods for array-types.
 * Implements only the most basic json-schema array configurations.
 * @see https://json-schema.org/understanding-json-schema/reference/array.html
 * @version 1.0.0
 */
import AbstractTypeDefinition from './AbstractTypeDefinition';
import TypeDefinition from './TypeDefinition';
/**
 * Class to define array-types using methods.
 */
export default class ArrayTypeDefinition extends AbstractTypeDefinition {
    /**
     * Sets the sanatizer of the type definition.
     */
    constructor();
    /**
     * Configures the minimum required items in the type definition.
     * @param minItems minimum required items.
     * @returns this for method chaining.
     */
    minItems(minItems: number): this;
    /**
     * Configures the maximum allowed items in the type definition.
     * @param maxItems maximum allowed items.
     * @returns this for method chaining.
     */
    maxItems(maxItems: number): this;
    /**
     * Configures structure of the items in the type definition.
     * @param definition type definition of the items.
     * @returns this for method chaining.
     */
    items(definition: TypeDefinition): this;
}
