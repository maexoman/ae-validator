import SanatizationError from '../SanatizationError';
/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description Error indicating invalid exclusive maximum.
 * @version 1.0.0
 */
export default class ExclusiveMaximumError extends SanatizationError {
    private readonly expected;
    /**
     * Creates a new exclusive maximum error.
     * All exclusive maximum erros end on 'exclusiveMaximum'
     * @param path path to the property that failed validation.
     * @param expected expected exclusive maximum.
     */
    constructor(path: PropertyKey[], expected: number);
    toJSON(): object;
}
