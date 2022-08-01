import SanatizationError from '../SanatizationError';
/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description Error indicating invalid string length.
 * @version 1.0.0
 */
export default class MaxLengthError extends SanatizationError {
    private readonly expected;
    /**
     * Creates a new string length error. All maxLength erros end on 'maxLength'
     * @param path path to the property that failed validation.
     * @param expected expected maximum length.
     */
    constructor(path: PropertyKey[], expected: number);
    toJSON(): object;
}
