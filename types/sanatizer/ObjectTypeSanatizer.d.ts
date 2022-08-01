/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description sanatizer for object properties.
 * @version 1.0.0
 */
import DataObject from '../DataObject';
import { TypeOptions } from '../types/Types';
import TypeSanatizer from './TypeSanatizer';
/**
 * Sanatizer used to sanatize object properties.
 */
export default class ObjectTypeSanatizer extends TypeSanatizer {
    /**
     * Checks if the value isn't an object.
     * @param value value to check.
     * @returns true if value isn't an object.
     */
    private static failsTypeCheck;
    /**
     * Only executes if properties is provided in the sanatization options.
     * Sanatizes the object itself. This is kind of recursive.
     * @param options all sanatization options.
     * @param value value to check.
     * @param path path to the property that failed validation.
     * @returns sanatized object.
     */
    private static sanatizeOrFailProperties;
    /**
     * Performs the actual type sanatization.
     * @param options all sanatization options.
     * @param value value to sanatize.
     * @param path path to the property that failed validation.
     * @returns sanatized value.
     */
    static sanatizeOrFail(options: TypeOptions, value: unknown, path: PropertyKey[]): object | DataObject;
}
