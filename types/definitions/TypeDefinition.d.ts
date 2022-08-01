/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description Defines the type definition itself.
 * @version 1.0.0
 */
import Optional from '../Optional';
import { ITypeValidator } from '../types/Types';
import TypeSanatizer from '../sanatizer/TypeSanatizer';
/**
 * The TypeDefinition itself.
 * It encapsulates the used sanatizer and holds all sanatization options.
 * These options will be provided to the sanatizer.
 *
 * This class is used, because for annotaions, the type may not be known
 * beforehand, because the annotaions can be arranges by the user.
 *
 * This means we have to provide an abstract definition holding all options.
 * The type will be detemined at runtime.
 */
export default class TypeDefinition {
    private sanatizationOptions;
    private sanatizer;
    /**
     * Initializes a type definition.
     * @param sanatizer sanatizeer to use if known on construction.
     */
    constructor(sanatizer?: undefined | TypeSanatizer);
    /**
     * Sets the sanatizer used.
     * @param sanatizer sanatizer to use.
     */
    setSanatizer(sanatizer: ITypeValidator): void;
    /**
     * Sets an option for the sanatizer.
     * @param key option name.
     * @param value option value.
     */
    setOption(key: string, value: any): void;
    /**
     * Deletes an option for the sanatizer.
     * @param key option name.
     */
    deleteOption(key: string): void;
    /**
     * Method used at runtime to sanatize the provided value.
     * @param value value to sanatize.
     * @param path path to the property that failed validation.
     * @returns sanatized value.
     */
    sanatize(value: unknown, path?: PropertyKey[]): any | Optional<any>;
}
