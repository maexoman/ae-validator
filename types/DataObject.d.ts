/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description
 * @version 1.0.0
 */
import { OptionalObject } from './types/Types';
/**
 * Class to extend for automatic validation.
 */
export default class DataObject {
    private static NO_PROPERTIES;
    /**
     * Gets the PropertyDefinitions to a class.
     * @returns Map with all Properties and their type definitions.
     */
    private getPropertyDefinitions;
    /**
     * Sanatizes an Object using annotated type definitions.
     * @param object object to sanatize
     * @param path path to the property that failed validation.
     */
    constructor(object: OptionalObject, path?: PropertyKey[]);
}
