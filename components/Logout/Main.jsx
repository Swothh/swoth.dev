import { UilSpinnerAlt } from '@iconscout/react-unicons';
import { useState } from 'react';
import swr from '../../lib/swr.jsx';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';

export default function Main() {
    const { data: identify } = swr('/api/auth/me');
    const user = identify ? identify.user : null;

    const [ loading, setLoading ] = useState(false);
    const [ notification, setNotification ] = useState(false);
    const router = useRouter();

    const logout = async () => {
        if (loading) return;
        if (!identify || !user) return;
        setLoading(true);
        
        const _request = await fetch('/api/auth/logout', { method: 'POST' });
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
        <div className="w-full flex items-center justify-center mt-3">
            {!identify ? <div className="flex items-center justify-center">
                <UilSpinnerAlt className="spin dropdown" />
            </div> : (
                user ? <div className="flex items-center justify-center">
                    <h1 className="text-lg font-semibold">Are you sure you want to logout?</h1>
                    <a onClick={logout} className="ml-5 py-1 px-2 border-2 border-red-600 text-red-600 hover:text-white hover:bg-red-600 transition-all rounded-md font-bold cursor-pointer">
                        {loading ? <UilSpinnerAlt className="spin" /> : (notification ? notification.message : 'Yes, logout!')}
                    </a>
                </div> : <div className="flex items-center justify-center">
                    <h1 className="text-lg font-semibold">You are not logged in!</h1>
                </div>
            )}
        </div>
    );
};