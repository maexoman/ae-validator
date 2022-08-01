import SanatizationError from '../SanatizationError';
/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description Error indicating invalid string length.
 * @version 1.0.0
 */
export default class LengthError extends SanatizationError {
    private readonly expected;
    /**
     * Creates a new string length error. All length erros end on 'length'
     * @param path path to the property that failed validation.
     * @param expected expected length.
     */
    constructor(path: PropertyKey[], expected: number);
    toJSON(): object;
}
