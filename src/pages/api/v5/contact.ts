import type { NextApiRequest, NextApiResponse } from 'next';
import isEmail from 'validator/lib/isEmail';
let last_contact = 0;

export default async function Contact(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method !== 'POST') return res.status(405).end();
        if ((Date.now() - last_contact) < 5000) return res.status(405).end();

        const { username, email, message } = req.body;
        if (!username || !email || !message || !isEmail(email)) return res.status(400).end();

        // send request to discord or save to database

        last_contact = Date.now();
        res.json(true);
    } catch {
        res.status(500).end();
    };
};
