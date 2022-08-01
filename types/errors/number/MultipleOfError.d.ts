import SanatizationError from '../SanatizationError';
/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description Error indicating invalid multiple of.
 * @version 1.0.0
 */
export default class MultipleOfError extends SanatizationError {
    private readonly expected;
    /**
     * Creates a new multiple of error.
     * All multiple of erros end on 'multipleOf'
     * @param path path to the property that failed validation.
     * @param expected expected multiple of.
     */
    constructor(path: PropertyKey[], expected: number);
    toJSON(): object;
}
