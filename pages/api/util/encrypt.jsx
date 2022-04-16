import Encrypt from '../../../lib/session.jsx';
import perms from '../../../lib/perms.jsx';
import User from '../../../lib/user.jsx';
import Crypto from 'crypto-js';

export default Encrypt(async (req, res, session) => {
    const send = (success, message) => {
        return res.status(200).json({
            success, message
        });
    };

    const _user = await User(req, res);
    if (!_user) return send(false, 'You are not logged in!');
    if (!perms['encrypt'].some(perm => _user.perms.includes(perm))) return send(false, 'Access denied, required permission: ENCRYPT');
    if (!req.query['methods']) return send(false, 'Missing query: ?methods');
    if (!req.query['q']) return send(false, 'Missing query: ?q');
    
    let _methods = req.query['methods'].split(';');
    let _output = '';
    let _error = '';

    await _methods.forEach(_method => {
        try {
            if (_error.length > 0) return;
            _output = Crypto[_method](_output.length == 0 ? req.query['q'] : _output).toString();
        } catch(err) {
            let _err = err.toString();
            if (_err.includes('[_method] is not a function')) {
                _error = _method + ' is not a encrypt method!';
            } else {
                _error = _err;
            };
        }
    });

    if (_error.length > 0) {
        send(false, _error);
    } else {
        send(true, _output);
    };
});