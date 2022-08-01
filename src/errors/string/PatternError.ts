import SanatizationError from '../SanatizationError';

/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description Error indicating invalid string pattern.
 * @version 1.0.0
 */
export default class PatternError extends SanatizationError {
	/**
	 * Creates a new string pattern error. All pattern erros end on 'pattern'
	 * @param path path to the property that failed validation.
	 */
	public constructor (path: PropertyKey[]) {
		super (path.concat ('pattern'));
	}
}