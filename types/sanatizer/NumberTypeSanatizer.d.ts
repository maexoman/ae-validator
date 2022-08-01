/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description sanatizer for number properties.
 * @version 1.0.0
 */
import { TypeOptions } from '../types/Types';
import TypeSanatizer from './TypeSanatizer';
/**
 * Sanatizer used to sanatize number properties.
 */
export default class NumberTypeSanatizer extends TypeSanatizer {
    /**
     * Checks if the value isn't a number.
     * @param value value to check.
     * @returns true if value isn't a number.
     */
    private static failsTypeCheck;
    /**
     * Only executes if integer is provided in the sanatization options.
     * Checks if the value is an integer.
     * @param options all sanatization options.
     * @param value value to check.
     * @returns true if value isn't an integer
     */
    private static failsIntegerCheck;
    /**
     * Only executes if const is provided in the sanatization options.
     * Checks if the value doesn't match the const option.
     * @param options all sanatization options.
     * @param value value to check.
     * @returns true if the value doesn't match the const option.
     */
    private static failsConstCheck;
    /**
     * Only executes if enum is provided in the sanatization options.
     * Checks if the value is contained in the enum option.
     * @param options all sanatization options.
     * @param value value to check.
     * @returns true if value isn't contained in the enum option.
     */
    private static failsEnumCheck;
    /**
     * Only executes if minimum is provided in the sanatization options.
     * Checks if the value is smaller than the minimum option.
     * @param options all sanatization options.
     * @param value value to check.
     * @returns true if value is smaller than the minimum option.
     */
    private static failsMinimumCheck;
    /**
     * Only executes if minimum and exclusiveMinimum
     * are provided in the sanatization options.
     * Checks if the value is smaller than or equal to the minimum option.
     * @param options all sanatization options.
     * @param value value to check.
     * @returns true if value is smaller than or equal to the minimum option.
     */
    private static failsExclusiveMinimumCheck;
    /**
     * Only executes if maximum is provided in the sanatization options.
     * Checks if the value is greater than the maximum option.
     * @param options all sanatization options.
     * @param value value to check.
     * @returns true if value is greater than the maximum option.
     */
    private static failsMaximumCheck;
    /**
     * Only executes if maximum and exclusiveMaximum
     * are provided in the sanatization options.
     * Checks if the value is greater than or equal to the maximum option.
     * @param options all sanatization options.
     * @param value value to check.
     * @returns true if value is greater than or equal to the maximum option.
     */
    private static failsExclusiveMaximumCheck;
    /**
     * Only executes if multipleOf is provided in the sanatization options.
     * Checks if the value is a multiple of the multipleOf option.
     * @param options all sanatization options.
     * @param value value to check.
     * @returns true if value isn't a multiple of the multipleOf option.
     */
    private static failsMultipleOfCheck;
    /**
     * Performs the actual type sanatization.
     * @param options all sanatization options.
     * @param value value to sanatize.
     * @param path path to the property that failed validation.
     * @returns sanatized value.
     */
    static sanatizeOrFail(options: TypeOptions, value: unknown, path: PropertyKey[]): number;
}
