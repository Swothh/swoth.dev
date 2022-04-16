import { UilSpinnerAlt } from '@iconscout/react-unicons';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import swr from '../../lib/swr.jsx';

export default function Main() {
    const { data: identify } = swr('/api/auth/me');
    const user = identify ? identify.user : null;
    
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ answer, setAnswer ] = useState('');
    const [ loading, setLoading ] = useState(false);
    const [ notification, setNotification ] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (notification) {
            if (notification.type !== true) setNotification(false);
        };
    }, [ email, password, answer ]);

    const login = async () => {
        if (loading) return;
        if (user) return;
        setLoading(true);
        
        const _request = await fetch('/api/auth/login', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password,
                answer
            })
        });

        const _json = await _request.json();
        setNotification({ type: _json.success, message: _json.message });
        setLoading(false);

        if (_json.success == true) {
            setTimeout(() => {
                router.push('/');
            }, 1000)
        };
    };

    return (
        !identify ? <div>
            <UilSpinnerAlt className="w-8 h-8 mx-auto spin" />
        </div> : (user ? <div className="w-full px-5">
            <h1 className="text-center text-lg font-semibold">You are already logged in!</h1>
        </div> : <div className="w-full px-5">
            <label className="mx-auto block lg:w-1/2 md:w-2/3 w-full text-sm opacity-75" htmlFor="email">E-Mail:</label>
            <input type="email" className="py-2 px-4 text-sm text-white mx-auto block input lg:w-1/2 md:w-2/3 focus:outline-none rounded-md w-full" onChange={(e) => setEmail(e.target.value)} value={email} />
            <label className="mt-3 mx-auto block lg:w-1/2 md:w-2/3 w-full text-sm opacity-75" htmlFor="email">Password:</label>
            <input type="password" className="py-2 px-4 text-sm text-white mx-auto block input lg:w-1/2 md:w-2/3 focus:outline-none rounded-md w-full" onChange={(e) => setPassword(e.target.value)} value={password} />
            <label className="mt-3 mx-auto block lg:w-1/2 md:w-2/3 w-full text-sm opacity-75" htmlFor="email">Security Question:</label>
            <input type="password" className="py-2 px-4 text-sm text-white mx-auto block input lg:w-1/2 md:w-2/3 focus:outline-none rounded-md w-full" onChange={(e) => setAnswer(e.target.value)} value={answer} />
            <div className="flex items-center justify-center mt-5">
                {!notification ? <a onClick={login} className="cursor-pointer py-1.5 px-3 rounded-md border-2 border-white hover:bg-white hover:text-black transition duration-300 text-white font-semibold">
                    {loading ? <UilSpinnerAlt className="spin" /> : 'Login'}
                </a> : (notification.type == true ? <a className="cursor-pointer py-1.5 px-3 rounded-md border-2 border-green-500 hover:bg-green-500 text-green-500 hover:text-black transition duration-300 font-semibold">
                    {notification.message}
                </a> : <a className="cursor-pointer py-1.5 px-3 rounded-md border-2 border-red-500 hover:bg-red-500 text-red-500 hover:text-black transition duration-300 font-semibold">
                    {notification.message}
                </a>)}
            </div>
        </div>)
    );
};