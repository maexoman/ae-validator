import SanatizationError from '../SanatizationError';
/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description Error indicating value not contained in enum.
 * @version 1.0.0
 */
export default class EnumError extends SanatizationError {
    private readonly expected;
    /**
     * Creates a new enum error. All enum errors end on 'enum'
     * @param path path to the property that failed validation.
     * @param expected all allowed values.
     */
    constructor(path: PropertyKey[], expected: Set<string> | Set<number>);
    toJSON(): object;
}
