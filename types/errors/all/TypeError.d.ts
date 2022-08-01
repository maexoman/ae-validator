import SanatizationError from '../SanatizationError';
/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description Error indicating invalid type.
 * @version 1.0.0
 */
export default class TypeError extends SanatizationError {
    private readonly expected;
    /**
     * Creates a new type error. All type erros end on 'type'
     * @param path path to the property that failed validation.
     */
    constructor(path: PropertyKey[], expected?: any);
    toJSON(): object;
}
