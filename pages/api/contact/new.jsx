import { Webhook, MessageBuilder } from 'webhook-discord';
import config from '../../../website.config';
import isEmail from 'validator/lib/isEmail';
let last_contact = 0;

export default async function Contact(req, res) {
    try {
        if (req.method !== 'POST') return res.status(405).end();
        if ((Date.now() - last_contact) < 5000) return res.status(405).end();
        const { username, email, message } = req.body;
        if (!username || !email || !message || !isEmail(email)) return res.status(400).end();
        const hook = new Webhook(config.webhook_url);

        await hook.send(
            new MessageBuilder()
                .setName('Postacı')
                .setColor('#2563eb')
                .setTitle('Contact - swoth.me')
                .addField('**Date**', '```' + (new Date().toLocaleString()) + '```', true)
                .addField('**Username**', '```' + username + '```', true)
                .addField('**E-Mail**', '```' + email + '```', true)
                .addField('**Message**', '```' + message.slice(0, 1024) + '```')
        );

        last_contact = Date.now();
        res.json(true);
    } catch {
        res.status(500).end();
    };
};
