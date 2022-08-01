/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description Defines Annotation to check and sanatize internal objects.
 * @version 1.0.0
 */

import DataObject from '../DataObject';
import ObjectTypeSanatizer from '../sanatizer/ObjectTypeSanatizer';
import { SetTypeAndOptions } from './GenericTypeAnnotations';

/**
 * Configures Structure to check and sanatize an object.
 * @param dataObject object definition.
 * @description Factory for a TypeScript Property-Decorator.
 * @returns TypeScript Property-Decorator
 */
export function ObjectType (dataObject: typeof DataObject): PropertyDecorator {
	return SetTypeAndOptions (ObjectTypeSanatizer, [
		['properties', dataObject]
	]);
}