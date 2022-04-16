import Database from '../../../lib/database.jsx';
import Users from '../../../models/user.jsx';
import Edit from '../../../lib/session.jsx';
import User from '../../../lib/user.jsx';
import { SHA256, MD5 } from 'crypto-js';

export default Edit(async (req, res, session) => {
    try {
        await Database(req, res);
        const send = (success, message) => res.status(200).json({ success, message });
        const format = value => SHA256(MD5(value).toString()).toString();
        if (req.method !== 'POST') return send(false, 'Method not allowed!');
        const _user = await User(req, res);
        const _body = JSON.parse(req.body);
        
        if (!_user) {
            send(false, 'You are not logged in!');
        } else {
            let _update = {};
            let _username = _body['username'];
            let _email = _body['email'];
            let _password = _body['password'];
            let _answer = _body['answer'];
            
            if (_username) {
                if (_username.length < 3) return send(false, 'Username must be at least 3 characters.');
                if (_username.length > 15) return send(false, 'Username must be a maximum of 15 characters.');
                _update.username = _username;
            };

            if (_email) {
                if (
                    !_email.includes('@') ||
                    !_email.includes('.') ||
                    _email.startsWith('@') ||
                    _email.endsWith('.')
                ) return send(false, 'Please enter a valid email.');
                _update.email = _email;
            };

            if (_password) {
                if (_password.length < 8) return send(false, 'Password must be at least 8 characters.');
                if (_password.length > 16) return send(false, 'Password must be a maximum of 16 characters.');
                _update.password = format(_password);
            };

            if (_answer) {
                if (_answer.length < 3) return send(false, 'Answer must be at least 3 characters.');
                if (_answer.length > 20) return send(false, 'Answer must be a maximum of 20 characters.');
                _update.answer = format(_answer);
            };

            await Users.findOneAndUpdate({ id: _user.id }, _update, err => {});
            return send(true, 'Profile has been successfully updated.');
        };
    } catch {
        res.status(200).json({
            success: false,
            message: 'Something went wrong!'
        });
    };
});