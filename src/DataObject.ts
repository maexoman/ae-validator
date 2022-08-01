/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description
 * @version 1.0.0
 */

import { IndexableObject, OptionalObject, PropertyDefinitions } from './types/Types';
import TypeDefinition from './definitions/TypeDefinition';
import TypeError from './errors/all/TypeError';

/**
 * Class to extend for automatic validation.
 */
export default class DataObject {

	// used as a singleton for no properties.
	private static NO_PROPERTIES = new Map<PropertyKey, TypeDefinition> ();

	/**
	 * Gets the PropertyDefinitions to a class.
	 * @returns Map with all Properties and their type definitions.
	 */
	 private getPropertyDefinitions (): PropertyDefinitions {
		const prototype = Object.getPrototypeOf (this);
		if (prototype.hasOwnProperty ('__properties') === true) {
			return prototype ['__properties'];
		}
		return DataObject.NO_PROPERTIES;
	}

	/**
	 * Sanatizes an Object using annotated type definitions.
	 * @param object object to sanatize
	 * @param path path to the property that failed validation.
	 */
	public constructor (
		object: OptionalObject,
		path: PropertyKey[] = ['@body:/']
	) {
		if (object === undefined || object === null) {
			throw new TypeError (path.concat ('type'));
		}

		// goes through all type definitions and
		// sanatizes the corresponding property.
		this.getPropertyDefinitions ().forEach ((typeDefinition, key) => {
			(this as IndexableObject) [key] = typeDefinition.sanatize (
				object [key],
				path.concat ('properties', key)
			);
		});
	}
}