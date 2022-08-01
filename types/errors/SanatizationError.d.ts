/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description SanatizationError
 * @version 1.0.0
 */
export default class SanatizationError extends Error {
    private readonly path;
    /**
     * Creates a new error.
     * @param path path to the property that failed validation.
     */
    constructor(path: PropertyKey[]);
    toJSON(): object;
}
