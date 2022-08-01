/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description Most basic type sanatizer. Cannot be used directly.
 * @version 1.0.0
 */
import Optional from '../Optional';
import { TypeOptions } from '../types/Types';
/**
 * The Sanatizer. Cannot be used directly.
 */
export default class TypeSanatizer {
    /**
     * Checks if the option is present in the options map.
     * @param options all sanatiziation options.
     * @param key wanted option.
     * @returns true if the map contains the option.
     */
    protected static hasOption(options: TypeOptions, key: string): boolean;
    /**
     * Gets the option from the options map.
     * @param options all sanatiziation options.
     * @param key wanted option.
     * @returns option.
     */
    protected static getOption<T>(options: TypeOptions, key: string): T;
    /**
     * Gets the option or the provided fallback from the options map.
     * @param options all sanatiziation options.
     * @param key wanted option.
     * @param fallback value to get if option is not present.
     * @returns value of the option or the fallback if option is not present.
     */
    protected static getOptionOrDefault<T>(options: TypeOptions, key: string, fallback: T): T;
    /**
     * Initializes the sanatization.
     * Does basic require and nullable checks and hands of to the actual
     * type sanatizers.
     * @param options all sanatization options.
     * @param value value to sanatize.
     * @param path path used to show where the error occured.
     * @returns sanatized value.
     */
    static sanatize(options: TypeOptions, value: unknown, path: string[]): any;
    /**
     * Sanatization funciton to be implemented by the type sanatizers.
     * @param _options all sanatization options.
     * @param _value value to sanatize.
     * @param _path path to the property that failed validation.
     * @returns sanatized value.
     */
    protected static sanatizeOrFail(_options: TypeOptions, _value: unknown, _path: PropertyKey[]): any | Optional<any>;
}
