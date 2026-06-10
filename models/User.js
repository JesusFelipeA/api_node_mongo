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

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        age: {
            type: Number,
            min: 18,
            max: 99
        },
        IsActive: {
            type: Boolean,
            default: true
        },
        roles: [{
            type: String,
        }],
        address: {
            street: String,
            city: String,
            zipCode: String
        },
        birthDate: Date,
        salary: mongoose.Schema.Types.Decimal128,
        status: {
            type: String,
            enum: ['active', 'inactive', 'blocked'],
            default: 'active'
        }
    },
    { timestamps: true }
);

const User = mongoose.model("usuarios", userSchema);

export default User;