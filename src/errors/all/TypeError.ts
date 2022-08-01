import SanatizationError from '../SanatizationError';

/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description Error indicating invalid type.
 * @version 1.0.0
 */
export default class TypeError extends SanatizationError {
	// the expected type
	private readonly expected: any;

	/**
	 * Creates a new type error. All type erros end on 'type'
	 * @param path path to the property that failed validation.
	 */
	public constructor (path: PropertyKey[], expected: any = undefined) {
		super (path.concat ('type'));
		this.expected = expected;
	}
}