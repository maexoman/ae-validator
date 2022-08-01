import DataObject from './DataObject';
import ArrayTypeDefinition from './definitions/ArrayTypeDefinition';
import NumberTypeDefinition from './definitions/NumberTypeDefinition';
import ObjectTypeDefinition from './definitions/ObjectTypeDefinition';
import StringTypeDefinition from './definitions/StringTypeDefinition';
export default class Types {
    static String(): StringTypeDefinition;
    static Integer(): NumberTypeDefinition;
    static Number(): NumberTypeDefinition;
    static Array(): ArrayTypeDefinition;
    static Object(dataObject: typeof DataObject): ObjectTypeDefinition;
}
