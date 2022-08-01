import SanatizationError from '../SanatizationError';

/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description Error indicating invalid multiple of.
 * @version 1.0.0
 */
export default class MultipleOfError extends SanatizationError {
	// the expected multiple
	private readonly expected: number;

	/**
	 * Creates a new multiple of error.
	 * All multiple of erros end on 'multipleOf'
	 * @param path path to the property that failed validation.
	 * @param expected expected multiple of.
	 */
	 public constructor (path: PropertyKey[], expected: number) {
		super (path.concat ('multipleOf'));
		this.expected = expected;
	}

	public override toJSON (): object {
		return {...super.toJSON (), ...{expected: this.expected}};
	}
}