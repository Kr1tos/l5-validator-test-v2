import ArraySchema from "./ArraySchema.js"
import stringSchema from "./StringSchema.js"
import ObjectSchema from "./ObjectSchema.js";

class Validator {
    string() {
        return new stringSchema()
    }
    array() {
        return new ArraySchema([(value) => Array.isArray(value)]);
    }
    object() {
        return new ObjectSchema();
      }
}
export default Validator