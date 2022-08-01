import SanatizationError from '../SanatizationError';

/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description Error indicating invalid minimum.
 * @version 1.0.0
 */
export default class MinimumError extends SanatizationError {
	// the expected type
	private readonly expected: number;

	/**
	 * Creates a new minimum error. All minimum erros end on 'minimum'
	 * @param path path to the property that failed validation.
	 * @param expected expected minimum.
	 */
	 public constructor (path: PropertyKey[], expected: number) {
		super (path.concat ('minimum'));
		this.expected = expected;
	}

	public override toJSON (): object {
		return {...super.toJSON (), ...{expected: this.expected}};
	}
}