import SanatizationError from '../SanatizationError';
/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description Error indicating invalid item count.
 * @version 1.0.0
 */
export default class MinItemError extends SanatizationError {
    private readonly expected;
    /**
     * Creates a new item count error. All minItem erros end on 'minItems'
     * @param path path to the property that failed validation.
     * @param expected expected minimum.
     */
    constructor(path: PropertyKey[], expected: number);
    toJSON(): object;
}
