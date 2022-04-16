import mongoose from 'mongoose';

export default async function Database(req, res) {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect('MONGODB-URL', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
            autoIndex: false
        });
    };
};