/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description sanatizer for string properties.
 * @version 1.0.0
 */
import { TypeOptions } from '../types/Types';
import TypeSanatizer from './TypeSanatizer';
/**
 * Sanatizer used to sanatize string properties.
 */
export default class StringTypeSanatizer extends TypeSanatizer {
    /**
     * Checks if the value isn't a string.
     * @param value value to check.
     * @returns true if value isn't a string.
     */
    private static failsTypeCheck;
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
     * Only executes if length is provided in the sanatization options.
     * Checks if the values length matches the length option.
     * @param options all sanatization options.
     * @param value value to check.
     * @returns true if the values length doesn't matche the length option.
     */
    private static failsLengthCheck;
    /**
     * Only executes if minLength is provided in the sanatization options.
     * Checks if the values length is smaller than the minLength option.
     * @param options all sanatization options.
     * @param value value to check.
     * @returns true if the values length is smaller than the minLength option.
     */
    private static failsMinLengthCheck;
    /**
     * Only executes if maxLength is provided in the sanatization options.
     * Checks if the values length is greater than the maxLength option.
     * @param options all sanatization options.
     * @param value value to check.
     * @returns true if the values length is greater than the maxLength option.
     */
    private static failsMaxLengthCheck;
    /**
     * Only executes if pattern is provided in the sanatization options.
     * Checks if the value satisfies the regex in the pattern option.
     * @param options all sanatization options.
     * @param value value to check.
     * @returns true if value doesn't satisfy the regex in the pattern option.
     */
    private static failsPatternCheck;
    /**
     * Performs the actual type sanatization.
     * @param options all sanatization options.
     * @param value value to sanatize.
     * @param path path to the property that failed validation.
     * @returns sanatized value.
     */
    static sanatizeOrFail(options: TypeOptions, value: unknown, path: PropertyKey[]): string;
}
