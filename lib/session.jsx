import { withIronSession } from 'next-iron-session';

export default function withSession(handler) {
    return withIronSession(handler, {
        password: 'RANDOM-SECRET-STRING-FOR-SESSION-SECURITY',
        cookieName: 'swoth/session',
        maxAge: 2147483647,
        cookieOptions: {
            secure: process.env.NODE_ENV === "production" ? true : false
        }
    });
};