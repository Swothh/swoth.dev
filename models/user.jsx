import Mongoose from 'mongoose';
Mongoose.Promise = global.Promise;

export default Mongoose.models.user || Mongoose.model('user', new Mongoose.Schema({
    id: {
        type: String,
        default: Date.now().toString()
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    perms: {
        type: Object,
        default: []
    }
}));