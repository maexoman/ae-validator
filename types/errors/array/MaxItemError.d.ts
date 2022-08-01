import SanatizationError from '../SanatizationError';
/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description Error indicating invalid item count.
 * @version 1.0.0
 */
export default class MaxItemError extends SanatizationError {
    private readonly expected;
    /**
     * Creates a new item count error. All maxItem erros end on 'maxItem'
     * @param path path to the property that failed validation.
     * @param expected expected maximum.
     */
    constructor(path: PropertyKey[], expected: number);
    toJSON(): object;
}
