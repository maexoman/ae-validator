import SanatizationError from '../SanatizationError';

/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description Error indicating invalid exclusive minimum.
 * @version 1.0.0
 */
export default class ExclusiveMinimumError extends SanatizationError {
	// the expected type
	private readonly expected: number;

	/**
	 * Creates a new exclusive minimum error.
	 * All exclusive minimum erros end on 'exclusiveMinimum'
	 * @param path path to the property that failed validation.
	 * @param expected expected exclusive minimum.
	 */
	 public constructor (path: PropertyKey[], expected: number) {
		super (path.concat ('exclusiveMinimum'));
		this.expected = expected;
	}

	public override toJSON (): object {
		return {...super.toJSON (), ...{expected: this.expected}};
	}
}