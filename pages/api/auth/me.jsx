import Me from '../../../lib/session.jsx';
import User from '../../../lib/user.jsx';

export default Me(async (req, res, session) => {
    const send = (message, user) => res.status(200).json({ message, user });
    const _user = await User(req, res);
    
    if (!_user) {
        send('You are not logged in!');
    } else {
        send('You are logged in as ' + _user.username, {
            id: _user.id,
            username: _user.username,
            email: _user.email,
            perms: _user.perms
        });
    };
});