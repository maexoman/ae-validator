/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description sanatizer for string properties.
 * @version 1.0.0
 */

import ConstError from '../errors/all/ConstError';
import EnumError from '../errors/all/EnumError';
import TypeError from '../errors/all/TypeError';
import LengthError from '../errors/string/LengthError';
import MaxLengthError from '../errors/string/MaxLengthError';
import MinLengthError from '../errors/string/MinLengthError';
import PatternError from '../errors/string/PatternError';
import { TypeOptions } from '../types/Types';
import TypeSanatizer from './TypeSanatizer';

/**
 * Sanatizer used to sanatize string properties.
 */
export default class StringTypeSanatizer extends TypeSanatizer {
	/**
	 * Checks if the value isn't a string.
	 * @param value value to check.
	 * @returns true if value isn't a string.
	 */
	private static failsTypeCheck (value: unknown): boolean {
		return typeof value !== 'string';
	}

	/**
	 * Only executes if const is provided in the sanatization options.
	 * Checks if the value doesn't match the const option.
	 * @param options all sanatization options.
	 * @param value value to check.
	 * @returns true if the value doesn't match the const option.
	 */
	private static failsConstCheck (options: TypeOptions, value: string): boolean {
		return (
			this.hasOption (options, 'const') &&
			value !== this.getOption<string> (options, 'const')
		);
	}

	/**
	 * Only executes if enum is provided in the sanatization options.
	 * Checks if the value is contained in the enum option.
	 * @param options all sanatization options.
	 * @param value value to check.
	 * @returns true if value isn't contained in the enum option.
	 */
	private static failsEnumCheck (options: TypeOptions, value: string): boolean {
		return (
			this.hasOption (options, 'enum') &&
			this.getOption<Set<string>> (options, 'enum').has (value) === false
		)
	}

	/**
	 * Only executes if length is provided in the sanatization options.
	 * Checks if the values length matches the length option.
	 * @param options all sanatization options.
	 * @param value value to check.
	 * @returns true if the values length doesn't matche the length option.
	 */
	private static failsLengthCheck (options: TypeOptions, value: string): boolean {
		return (
			this.hasOption (options, 'length') &&
			value.length !== this.getOption<number> (options, 'length')
		);
	}

	/**
	 * Only executes if minLength is provided in the sanatization options.
	 * Checks if the values length is smaller than the minLength option.
	 * @param options all sanatization options.
	 * @param value value to check.
	 * @returns true if the values length is smaller than the minLength option.
	 */
	private static failsMinLengthCheck (options: TypeOptions, value: string): boolean {
		return (
			this.hasOption (options, 'minLength') &&
			value.length < this.getOption<number> (options, 'minLength')
		);
	}

	/**
	 * Only executes if maxLength is provided in the sanatization options.
	 * Checks if the values length is greater than the maxLength option.
	 * @param options all sanatization options.
	 * @param value value to check.
	 * @returns true if the values length is greater than the maxLength option.
	 */
	private static failsMaxLengthCheck (options: TypeOptions, value: string): boolean {
		return (
			this.hasOption (options, 'maxLength') &&
			value.length > this.getOption<number> (options, 'maxLength')
		);
	}

	/**
	 * Only executes if pattern is provided in the sanatization options.
	 * Checks if the value satisfies the regex in the pattern option.
	 * @param options all sanatization options.
	 * @param value value to check.
	 * @returns true if value doesn't satisfy the regex in the pattern option.
	 */
	private static failsPatternCheck (options: TypeOptions, value: string): boolean {
		return (
			this.hasOption (options, 'pattern') &&
			this.getOption<RegExp> (options, 'pattern').test (value) === false
		);
	}

	/**
	 * Performs the actual type sanatization.
	 * @param options all sanatization options.
	 * @param value value to sanatize.
	 * @param path path to the property that failed validation.
	 * @returns sanatized value.
	 */
	public static override sanatizeOrFail (
		options: TypeOptions,
		value: unknown,
		path: PropertyKey[]
	): string {

		if (this.failsTypeCheck (value)) {
			throw new TypeError (path, 'string');
		}

		// For Strings only trimmed values make sense.
		const trimmed = (value as string).trim ();

		if (this.failsConstCheck (options, trimmed)) {
			throw new ConstError (
				path,
				this.getOption<string> (options, 'const')
			);
		}

		if (this.failsEnumCheck (options, trimmed)) {
			throw new EnumError (
				path,
				this.getOption<Set<string>> (options, 'enum')
			);
		}

		if (this.failsLengthCheck (options, trimmed)) {
			throw new LengthError (
				path,
				this.getOption<number> (options, 'length')
			);
		}

		if (this.failsMinLengthCheck (options, trimmed)) {
			throw new MinLengthError (
				path,
				this.getOption<number> (options, 'minLength')
			);
		}

		if (this.failsMaxLengthCheck (options, trimmed)) {
			throw new MaxLengthError (
				path,
				this.getOption<number> (options, 'maxLength')
			);
		}

		if (this.failsPatternCheck (options, trimmed)) {
			throw new PatternError (path);
		}

		return trimmed;

	}

}