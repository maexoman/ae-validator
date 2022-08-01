import SanatizationError from '../SanatizationError';
/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description Error indicating invalid minimum.
 * @version 1.0.0
 */
export default class MinimumError extends SanatizationError {
    private readonly expected;
    /**
     * Creates a new minimum error. All minimum erros end on 'minimum'
     * @param path path to the property that failed validation.
     * @param expected expected minimum.
     */
    constructor(path: PropertyKey[], expected: number);
    toJSON(): object;
}
