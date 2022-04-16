import Database from '../../../lib/database.jsx';
import Login from '../../../lib/session.jsx';
import Users from '../../../models/user.jsx';
import { SHA256, MD5 } from 'crypto-js';

export default Login(async (req, res, session) => {
    try {
        await Database(req, res);
        const body = JSON.parse(req.body);
        const send = (success, message) => res.status(200).json({ success, message });
        const format = value => SHA256(MD5(value).toString()).toString();

        if (req.method !== 'POST') return send(false, 'Method not allowed!');
        if (!body['email'] || !body['password'] || !body['answer']) return send(false, 'Please fill in all the blanks!');

        const _user = await Users.findOne({ email: body['email'] });
        if (!_user) return send(false, 'E-Mail, password or security question is incorrect!');
        if (format(body['password']) !== _user.password) return send(false, 'E-Mail, password or security question is incorrect!');
        if (format(String(body['answer']).toLowerCase()) !== _user.answer) return send(false, 'E-Mail, password or security question is incorrect!');

        req.session.set('user', { id: _user.id });
        await req.session.save();
        send(true, 'You have successfully logged in!');
    } catch {
        res.status(200).json({
            success: false,
            message: 'Something went wrong!'
        });
    };
});