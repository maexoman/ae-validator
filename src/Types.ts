import DataObject from './DataObject';
import ArrayTypeDefinition from './definitions/ArrayTypeDefinition';
import NumberTypeDefinition from './definitions/NumberTypeDefinition';
import ObjectTypeDefinition from './definitions/ObjectTypeDefinition';
import StringTypeDefinition from './definitions/StringTypeDefinition';

export default class Types {
	public static String (): StringTypeDefinition {
		return new StringTypeDefinition ()
	}

	public static Integer (): NumberTypeDefinition {
		return new NumberTypeDefinition (true);
	}

	public static Number (): NumberTypeDefinition {
		return new NumberTypeDefinition (false);
	}

	public static Array (): ArrayTypeDefinition {
		return new ArrayTypeDefinition ();
	}

	public static Object (dataObject: typeof DataObject): ObjectTypeDefinition {
		return new ObjectTypeDefinition (dataObject);
	}
}