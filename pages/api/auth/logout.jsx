import Logout from '../../../lib/session.jsx';

export default Logout(async (req, res, session) => {
    if (req.method !== 'POST') return res.status(200).json({ success: false, message: 'Method not allowed!' });
    await req.session.destroy();
    res.status(200).json({ success: true, message: 'You have successfully logged out!' });
});