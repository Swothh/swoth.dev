import { useEffect, useState } from 'react';
import axios, { AxiosPromise } from 'axios';

export default function Main() {
    const [ user, setUser ] = useState<string>('');
    const [ email, setEmail ] = useState<string>('');
    const [ message, setMessage ] = useState<string>('');
    const [ loading, setLoading ] = useState<boolean>(false);
    const [ success, setSuccess ] = useState<boolean>(false);
    const [ err, setErr ] = useState<string>();

    useEffect(() => {
        if (user.length > 0 || email.length > 0 || message.length > 0) setSuccess(false);
    }, [ user, email, message ]);

    const sendContact = async () => {
        if (loading) return;
        setLoading(true);
        setErr(undefined);
        setSuccess(false);

        const req = await axios.post('/api/v5/contact', {
            username: user,
            email,
            message
        }).catch((err): AxiosPromise => err?.response);
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
        <div className="w-full px-5 pt-20 pb-36">
            <div className="max-w-screen-lg mx-auto w-full flex flex-col">
                <input 
                    value={user}
                    onChange={e => setUser(e.target.value)}
                    type="text"
                    placeholder="Name"
                    className="w-full md:w-96 lg:w-1/2 outline-none mb-3 p-3 px-4 text-slate-900 dark:text-zinc-50 bg-zinc-100 dark:bg-slate-900/50 dark:shadow-slate-800/40 dark:hover:bg-slate-900/75 dark:focus:bg-slate-900/75 hover:bg-zinc-200 focus:bg-zinc-200 transition-all duration-200 shadow-inner rounded-lg border border-zinc-200 dark:border-slate-800 dark:hover:border-slate-800 hover:border-zinc-300"
                />
                <input 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type="email"
                    placeholder="E-Mail"
                    className="w-full md:w-96 lg:w-1/2 outline-none mb-3 p-3 px-4 text-slate-900 dark:text-zinc-50 bg-zinc-100 dark:bg-slate-900/50 dark:shadow-slate-800/40 dark:hover:bg-slate-900/75 dark:focus:bg-slate-900/75 hover:bg-zinc-200 focus:bg-zinc-200 transition-all duration-200 shadow-inner rounded-lg border border-zinc-200 hover:border-zinc-300 dark:border-slate-800 dark:hover:border-slate-800"
                />
                <textarea 
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="Message"
                    className="min-h-[8rem] block max-h-[20rem] w-full md:w-96 lg:w-1/2 outline-none p-3 px-4 text-slate-900 dark:text-zinc-50 bg-zinc-100 dark:bg-slate-900/50 dark:shadow-slate-800/40 dark:hover:bg-slate-900/75 dark:focus:bg-slate-900/75 hover:bg-zinc-200 focus:bg-zinc-200 transition-all duration-200 shadow-inner rounded-lg border border-zinc-200 hover:border-zinc-300 dark:border-slate-800 dark:hover:border-slate-800"
                />
                <div className="pt-6 flex items-center space-x-5">
                    <a onClick={sendContact} className={(loading ? 'opacity-50' : 'opacity-100') + " transition-opacity duration-200 cursor-pointer button-gradient relative h-12 w-32 rounded-lg"}>
                        <div className="absolute transition-colors duration-200 -inset-px bg-gradient-to-b flex items-center justify-center rounded-lg from-zinc-100 dark:from-slate-900 dark:to-slate-900/90 to-zinc-100/90">
                            <h1 className="text-slate-900 dark:text-zinc-50 transition-colors duration-200">Send <i className="far fa-arrow-right ml-2" /></h1>
                        </div>
                    </a>
                    {err && <h1 className="text-slate-700 dark:text-zinc-300 duration-200 transition-colors"><i className="fas text-red-600 fa-circle-x mr-0.5" /> {err}</h1>}
                    {success && <h1 className="text-slate-700 dark:text-zinc-300 duration-200 transition-colors"><i className="fas text-green-600 fa-circle-check mr-0.5" /> Yey, the form has been successfully submitted.</h1>}
                </div>
            </div>
        </div>
    );
};