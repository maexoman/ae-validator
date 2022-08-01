/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description Defines Annotation to check and sanatize internal objects.
 * @version 1.0.0
 */
import DataObject from '../DataObject';
/**
 * Configures Structure to check and sanatize an object.
 * @param dataObject object definition.
 * @description Factory for a TypeScript Property-Decorator.
 * @returns TypeScript Property-Decorator
 */
export declare function ObjectType(dataObject: typeof DataObject): PropertyDecorator;
