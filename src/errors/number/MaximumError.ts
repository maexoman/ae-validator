import SanatizationError from '../SanatizationError';

/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description Error indicating invalid maximum.
 * @version 1.0.0
 */
export default class MaximumError extends SanatizationError {
	// the expected type
	private readonly expected: number;

	/**
	 * Creates a new maximum error. All maximum erros end on 'maximum'
	 * @param path path to the property that failed validation.
	 * @param expected expected maximum.
	 */
	 public constructor (path: PropertyKey[], expected: number) {
		super (path.concat ('maximum'));
		this.expected = expected;
	}

	public override toJSON (): object {
		return {...super.toJSON (), ...{expected: this.expected}};
	}
}