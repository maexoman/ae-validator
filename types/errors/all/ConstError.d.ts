import SanatizationError from '../SanatizationError';
/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description Error indicating value not matching constant.
 * @version 1.0.0
 */
export default class ConstError extends SanatizationError {
    private readonly expected;
    /**
     * Creates a new const error. All const errors end on 'const'
     * @param path path to the property that failed validation.
     * @param expected allowed value.
     */
    constructor(path: PropertyKey[], expected: string | number);
    toJSON(): object;
}
