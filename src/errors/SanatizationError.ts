/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description SanatizationError
 * @version 1.0.0
 */
export default class SanatizationError extends Error {
	// path to the property that failed validation.
	private readonly path: PropertyKey[];

	/**
	 * Creates a new error.
	 * @param path path to the property that failed validation.
	 */
	public constructor (path:  PropertyKey[]) {
		super ();
		this.path = path;
	}
}