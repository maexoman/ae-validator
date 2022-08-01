import SanatizationError from '../SanatizationError';

/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description Error indicating invalid string length.
 * @version 1.0.0
 */
export default class MinLengthError extends SanatizationError {
	// the expected type
	private readonly expected: number;

	/**
	 * Creates a new string length error. All minLength erros end on 'minLength'
	 * @param path path to the property that failed validation.
	 * @param expected expected minimum length.
	 */
	 public constructor (path: PropertyKey[], expected: number) {
		super (path.concat ('minLength'));
		this.expected = expected;
	}
}