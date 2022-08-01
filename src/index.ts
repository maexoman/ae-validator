
import DataObject from './DataObject';
import Optional from './Optional';
import Types from './Types';

import * as AnyAnnotations from './annotations/AnyTypeAnnotations';
import * as ArrayAnnotaions from './annotations/ArrayTypeAnnotations';
import * as NumberAnnotations from './annotations/NumberTypeAnnotations';
import * as ObjectAnnotations from './annotations/ObjectTypeAnnotations';
import * as SpecificTypeAnnotations from './annotations/SpecificTypeAnnotations';
import * as StringAnnotations from './annotations/StringTypeAnnotations';

export const Required = AnyAnnotations.Required;
export const Nullable = AnyAnnotations.Nullable;
export const NotRequired = AnyAnnotations.NotRequired;
export const NotNullable = AnyAnnotations.NotNullable;
export const Const = AnyAnnotations.Const;
export const Enum = AnyAnnotations.Enum;


export const StringType = StringAnnotations.StringType;
export const MinLength = StringAnnotations.MinLength;
export const MaxLength = StringAnnotations.MaxLength;
export const Pattern = StringAnnotations.Pattern;

export const NumberType = NumberAnnotations.NumberType;
export const Minimum = NumberAnnotations.Minimum;
export const InclusiveMinimum = NumberAnnotations.InclusiveMinimum;
export const ExclusiveMinimum = NumberAnnotations.ExclusiveMinimum;
export const Maximum = NumberAnnotations.Maximum;
export const InclusiveMaximum = NumberAnnotations.InclusiveMaximum;
export const ExclusiveMaximum = NumberAnnotations.ExclusiveMaximum;
export const MultipleOf = NumberAnnotations.MultipleOf;

export const ObjectType = ObjectAnnotations.ObjectType;

export const ArrayType = ArrayAnnotaions.ArrayType;
export const MinItems = ArrayAnnotaions.MinItems;
export const MaxItems = ArrayAnnotaions.MaxItems;
export const Items = ArrayAnnotaions.Items;

export const EMail = SpecificTypeAnnotations.EMail;

export default Types;
export { DataObject, Optional };