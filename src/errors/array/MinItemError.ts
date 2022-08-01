import SanatizationError from './SanatizationError';

/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description Error indicating invalid item count.
 * @version 1.0.0
 */
export default class MinItemError extends SanatizationError {
	// the expected type
	private readonly expected: number;

	/**
	 * Creates a new item count error. All minItem erros end on 'minItems'
	 * @param path path to the property that failed validation.
	 * @param expected expected minimum.
	 */
	public constructor (path: PropertyKey[], expected: number) {
		super (path.concat ('minItems'));
		this.expected = expected;
	}
}