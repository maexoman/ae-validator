import SanatizationError from '../SanatizationError';
/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description Error indicating invalid maximum.
 * @version 1.0.0
 */
export default class MaximumError extends SanatizationError {
    private readonly expected;
    /**
     * Creates a new maximum error. All maximum erros end on 'maximum'
     * @param path path to the property that failed validation.
     * @param expected expected maximum.
     */
    constructor(path: PropertyKey[], expected: number);
    toJSON(): object;
}
