import SanatizationError from '../SanatizationError';
/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description Error indicating invalid exclusive minimum.
 * @version 1.0.0
 */
export default class ExclusiveMinimumError extends SanatizationError {
    private readonly expected;
    /**
     * Creates a new exclusive minimum error.
     * All exclusive minimum erros end on 'exclusiveMinimum'
     * @param path path to the property that failed validation.
     * @param expected expected exclusive minimum.
     */
    constructor(path: PropertyKey[], expected: number);
    toJSON(): object;
}
