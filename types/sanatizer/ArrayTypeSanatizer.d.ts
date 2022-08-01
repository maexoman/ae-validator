/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description sanatizer for array properties.
 * @version 1.0.0
 */
import { TypeOptions } from '../types/Types';
import TypeSanatizer from './TypeSanatizer';
/**
 * Sanatizer used to sanatize array properties.
 */
export default class ArrayTypeSanatizer extends TypeSanatizer {
    /**
     * Checks if the value isn't an array.
     * @param value value to check.
     * @returns true if value isn't an array.
     */
    private static failsTypeCheck;
    /**
     * Only executes if minItems is provided in the sanatization options.
     * Checks if the array contains at least the minimum number of items.
     * @param options all sanatization options.
     * @param value value to check.
     * @returns true if value doesn't contain enough items.
     */
    private static failsMinItemsCheck;
    /**
     * Only executes if maxItems is provided in the sanatization options.
     * Checks if the array contains at most the maximum number of items.
     * @param options all sanatization options.
     * @param value value to check.
     * @returns true if value contains more items than allowed.
     */
    private static failsMaxItemsCheck;
    /**
     * Only executes if items is provided in the sanatization options.
     * Sanatizes the items inside the array according to the items option.
     * @param options all sanatization options.
     * @param value value to check.
     * @param path path to the property that failed validation.
     * @returns sanatized array.
     */
    private static sanatizeOrFailItems;
    /**
     * Performs the actual type sanatization.
     * @param options all sanatization options.
     * @param value value to sanatize.
     * @param path path to the property that failed validation.
     * @returns sanatized value.
     */
    static sanatizeOrFail(options: TypeOptions, value: unknown, path: PropertyKey[]): Array<any>;
}
