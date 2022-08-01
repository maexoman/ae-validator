import SanatizationError from '../SanatizationError';

/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description Error indicating invalid exclusive maximum.
 * @version 1.0.0
 */
export default class ExclusiveMaximumError extends SanatizationError {
	// the expected type
	private readonly expected: number;

	/**
	 * Creates a new exclusive maximum error.
	 * All exclusive maximum erros end on 'exclusiveMaximum'
	 * @param path path to the property that failed validation.
	 * @param expected expected exclusive maximum.
	 */
	 public constructor (path: PropertyKey[], expected: number) {
		super (path.concat ('exclusiveMaximum'));
		this.expected = expected;
	}

	public override toJSON (): object {
		return {...super.toJSON (), ...{expected: this.expected}};
	}
}