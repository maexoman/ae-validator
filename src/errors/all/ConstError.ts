import SanatizationError from '../SanatizationError';

/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description Error indicating value not matching constant.
 * @version 1.0.0
 */
export default class ConstError extends SanatizationError {
	// the expected type
	private readonly expected: string | number;

	/**
	 * Creates a new const error. All const errors end on 'const'
	 * @param path path to the property that failed validation.
	 * @param expected allowed value.
	 */
	public constructor (
		path: PropertyKey[],
		expected: string | number
	) {
		super (path.concat ('const'));
		this.expected = expected;
	}

	public override toJSON (): object {
		return {...super.toJSON (), ...{expected: this.expected}};
	}
}