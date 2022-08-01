/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description sanatizer for number properties.
 * @version 1.0.0
 */

import ConstError from '../errors/all/ConstError';
import EnumError from '../errors/all/EnumError';
import TypeError from '../errors/all/TypeError';
import { TypeOptions } from '../types/Types';
import TypeSanatizer from './TypeSanatizer';

/**
 * Sanatizer used to sanatize number properties.
 */
export default class NumberTypeSanatizer extends TypeSanatizer {
	/**
	 * Checks if the value isn't a number.
	 * @param value value to check.
	 * @returns true if value isn't a number.
	 */
	private static failsTypeCheck (value: unknown): boolean {
		return (
			typeof value !== 'number' ||
			Number.isNaN (value) ||
			Number.isFinite (value) === false
		);
	}

	/**
	 * Only executes if integer is provided in the sanatization options.
	 * Checks if the value is an integer.
	 * @param options all sanatization options.
	 * @param value value to check.
	 * @returns true if value isn't an integer
	 */
	private static failsIntegerCheck (options: TypeOptions, value: number): boolean {
		return (
			this.getOptionOrDefault<boolean> (options, 'integer', false) &&
			Number.isInteger (value) === false
		);
	}

	/**
	 * Only executes if const is provided in the sanatization options.
	 * Checks if the value doesn't match the const option.
	 * @param options all sanatization options.
	 * @param value value to check.
	 * @returns true if the value doesn't match the const option.
	 */
	private static failsConstCheck (options: TypeOptions, value: number): boolean {
		return (
			this.hasOption (options, 'const') &&
			value !== this.getOption<number> (options, 'const')
		);
	}

	/**
	 * Only executes if enum is provided in the sanatization options.
	 * Checks if the value is contained in the enum option.
	 * @param options all sanatization options.
	 * @param value value to check.
	 * @returns true if value isn't contained in the enum option.
	 */
	private static failsEnumCheck (options: TypeOptions, value: number): boolean {
		return (
			this.hasOption (options, 'enum') &&
			this.getOption<Set<number>> (options, 'enum').has (value) === false
		)
	}

	/**
	 * Only executes if minimum is provided in the sanatization options.
	 * Checks if the value is smaller than the minimum option.
	 * @param options all sanatization options.
	 * @param value value to check.
	 * @returns true if value is smaller than the minimum option.
	 */
	private static failsMinimumCheck (options: TypeOptions, value: number): boolean {
		return (
			this.hasOption (options, 'minimum') &&
			value < this.getOption<number> (options, 'minimum')
		);
	}

	/**
	 * Only executes if minimum and exclusiveMinimum
	 * are provided in the sanatization options.
	 * Checks if the value is smaller than or equal to the minimum option.
	 * @param options all sanatization options.
	 * @param value value to check.
	 * @returns true if value is smaller than or equal to the minimum option.
	 */
	private static failsExclusiveMinimumCheck (options: TypeOptions, value: number): boolean {
		return (
			this.getOptionOrDefault<boolean> (options, 'exclusiveMinimum', false) &&
			this.hasOption (options, 'minimum') &&
			value <= this.getOption<number> (options, 'minimum')
		);
	}

	/**
	 * Only executes if maximum is provided in the sanatization options.
	 * Checks if the value is greater than the maximum option.
	 * @param options all sanatization options.
	 * @param value value to check.
	 * @returns true if value is greater than the maximum option.
	 */
	private static failsMaximumCheck (options: TypeOptions, value: number): boolean {
		return (
			this.hasOption (options, 'maximum') &&
			value > this.getOption<number> (options, 'maximum')
		);
	}

	/**
	 * Only executes if maximum and exclusiveMaximum
	 * are provided in the sanatization options.
	 * Checks if the value is greater than or equal to the maximum option.
	 * @param options all sanatization options.
	 * @param value value to check.
	 * @returns true if value is greater than or equal to the maximum option.
	 */
	private static failsExclusiveMaximumCheck (options: TypeOptions, value: number): boolean {
		return (
			this.getOptionOrDefault<boolean> (options, 'exclusiveMaximum', false) &&
			this.hasOption (options, 'maximum') &&
			value >= this.getOption<number> (options, 'maximum')
		);
	}

	/**
	 * Only executes if multipleOf is provided in the sanatization options.
	 * Checks if the value is a multiple of the multipleOf option.
	 * @param options all sanatization options.
	 * @param value value to check.
	 * @returns true if value isn't a multiple of the multipleOf option.
	 */
	private static failsMultipleOfCheck (options: TypeOptions, value: number): boolean {
		return (
			this.hasOption (options, 'multipleOf') &&
			value % this.getOption<number> (options, 'multipleOf') !== 0
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
	): number {

		if (this.failsTypeCheck (value)) {
			throw new TypeError (path, 'number');
		}

		if (this.failsIntegerCheck (options, value as number)) {
			throw new TypeError (path, 'integer');
		}

		if (this.failsConstCheck (options, value as number)) {
			throw new ConstError (
				path,
				this.getOption<number> (options, 'const')
			);
		}

		if (this.failsEnumCheck (options, value as number)) {
			throw new EnumError (
				path,
				this.getOption<Set<number>> (options, 'enum')
			);
		}

		if (this.failsMinimumCheck (options, value as number)) {
			throw new Error (path.concat ('minimum').join ('/'));
		}

		if (this.failsExclusiveMinimumCheck (options, value as number)) {
			throw new Error (path.concat ('exclusiveMinimum').join ('/'));
		}

		if (this.failsMaximumCheck (options, value as number)) {
			throw new Error (path.concat ('maximum').join ('/'));
		}

		if (this.failsExclusiveMaximumCheck (options, value as number)) {
			throw new Error (path.concat ('exclusiveMaximum').join ('/'));
		}

		if (this.failsMultipleOfCheck (options, value as number)) {
			throw new Error (path.concat ('multipleOf').join ('/'));
		}

		return value as number;
	}
}