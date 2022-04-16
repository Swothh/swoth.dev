import Database from '../lib/database.jsx';
import Users from '../models/user.jsx';

export default async function User(req, res) {
    await Database(req, res);
    const _session = req.session.get('user');
    
    if (_session) {
        const _user = await Users.findOne({
            id: _session.id
        });

        if (_user) {
            return _user;
        } else {
            return;
        };
    } else {
        return;
    };
};