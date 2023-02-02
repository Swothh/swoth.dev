import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Main() {
    const [ user, setUser ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ message, setMessage ] = useState('');
    const [ loading, setLoading ] = useState(false);
    const [ err, setErr ] = useState(false);
    const [ success, setSuccess ] = useState(false);

    useEffect(() => {
        if (user.length > 0 || email.length > 0 || message.length > 0) setSuccess(false);
    }, [ user, email, message ]);

    const sendContact = async () => {
        if (loading) return;
        setLoading(true);
        setErr(false);
        setSuccess(false);

        const req = await axios.post('/api/contact/new', {
            username: user,
            email,
            message
        }).catch(err => err?.response);
        setLoading(false);

        if (!req || !req.data) {
            switch(req?.status ?? 400) {
                case 400:
                    setErr('Fill in all fields and enter a valid email.')
                    break;
                case 405:
                    setErr('Your request has been canceled due to busyness, try again in a few seconds.');
                    break;
                default:
                    setErr('An unknown error has occurred.');
                    break;
            };
        } else {
            setEmail('');
            setUser('');
            setMessage('');
            setSuccess(true);
        };
    };

    return (
        <div className="w-full px-5">
            <div className="w-full max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-5">
                    <div className="flex rounded-md border border-white/10 overflow-hidden items-center bg-[#090909]">
                        <div className="h-10 w-10 border-r border-white/10 bg-[#121212] flex items-center justify-center">
                            <i className="fal fa-user text-white" />
                        </div>
                        <input disabled={loading} value={user} onChange={e => setUser(e.target.value)} placeholder="Name" type="text" className="px-3 h-10 bg-transparent w-full text-zinc-300 focus:text-white outline-none transition-all" />
                    </div>
                    <div className="flex rounded-md border border-white/10 overflow-hidden items-center bg-[#090909]">
                        <div className="h-10 w-10 border-r border-white/10 bg-[#121212] flex items-center justify-center">
                            <i className="fal fa-envelope text-white" />
                        </div>
                        <input disabled={loading} value={email} onChange={e => setEmail(e.target.value)} placeholder="E-Mail" type="email" className="px-3 h-10 bg-transparent w-full text-zinc-300 focus:text-white outline-none transition-all" />
                    </div>
                </div>
                <div className="flex rounded-md border border-white/10 overflow-hidden items-center bg-[#090909]">
                    <div className="h-full w-10 border-r border-white/10 bg-[#121212] flex items-center justify-center">
                        <i className="fal fa-pencil text-white" />
                    </div>
                    <textarea disabled={loading} value={message} onChange={e => setMessage(e.target.value)} placeholder="Your Message" className="p-3 resize-none h-full bg-transparent w-full text-zinc-300 focus:text-white outline-none transition-all" />
                </div>
            </div>
            <div className="w-full max-w-screen-lg mx-auto space-x-5 flex items-center mt-5 justify-end">
                {err && <h1 className="text-red-500 italic"><i className="fas fa-circle-x mr-1" /> {err}</h1>}
                {success && <h1 className="text-green-500 italic"><i className="fas fa-circle-check mr-1" /> Yey, the form has been successfully submitted.</h1>}
                <a onClick={sendContact} className="cursor-pointer w-28 text-center py-2 bg-blue-700 transition-all rounded-md text-white" style={{ opacity: loading ? 0.5 : 1 }}>
                    Send <i className="ml-1 fal fa-arrow-right" />
                </a>
            </div>
        </div>
    );
};