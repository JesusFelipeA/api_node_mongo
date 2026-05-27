/*class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static createUser(name) {
        return{
            id: Date.now(),
            name: name
        };
    }
}
export default User;
*/
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const User = mongoose.model("usuarios", userSchema);

export default User;