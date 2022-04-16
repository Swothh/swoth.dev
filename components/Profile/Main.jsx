import { UilSpinnerAlt, UilCheck, UilTimes } from '@iconscout/react-unicons'
import fetch from 'isomorphic-unfetch';
import swr from '../../lib/swr.jsx';
import { useState } from 'react';

export default function Main() {
    const { data: identify } = swr('/api/auth/me');
    let user = identify ? identify.user : null;
    const [ _loading, _setLoading ] = useState(false);

    const _save = async (type, value) => {
        if (_loading) return;
        if (!user) return;
        _setLoading(true);
        if (![ 'password', 'answer' ].includes(type)) user[type] = value;
        
        const _request = await fetch('/api/auth/edit', { method: 'POST', body: JSON.stringify({ [type]: value }) });
        _setLoading(false);
    };

    const [ __username, __setUsername ] = useState(false);
    const [ _username, _setUsername ] = useState('');
    const [ __email, __setEmail ] = useState(false);
    const [ _email, _setEmail ] = useState('');
    const [ __password, __setPassword ] = useState(false);
    const [ _password, _setPassword ] = useState('');
    const [ __answer, __setAnswer ] = useState(false);
    const [ _answer, _setAnswer ] = useState('');
    
    return (
        !identify ? <div className="flex items-center justify-center mt-3">
            <UilSpinnerAlt className="spin dropdown" />
        </div> : (
            user ? <div className="mt-3 gap-x-8 gap-y-4 grid grid-cols-1 sm:grid-cols-2">
                <div>
                    <h6 className="text-gray-300 text-sm">Username:</h6>
                    <div className="flex items-center w-full">
                        {!__username ? 
                            <input value={ user.username } className="w-full input focus:outline-none rounded-md py-1 px-2" disabled={true} />
                        :
                            <input value={_username} onChange={(e) => _setUsername(e.target.value)} className="w-full input focus:outline-none rounded-md py-1 px-2" />
                        }
                        <a onClick={() => {
                            if (__username) _save('username', _username);
                            if (__username) _setUsername('');
                            __setUsername(!__username);
                        }} className={ (__username ? "border-green-600 text-green-600 hover:bg-green-600" : "border-white text-white hover:bg-white") + " hover:text-black py-1 px-2 rounded-md border-2 transition-all ml-2 font-bold cursor-pointer" }>
                            {__username ? 'Save' : 'Edit'}
                        </a>
                    </div>
                </div>
                <div>
                    <h6 className="text-gray-300 text-sm">E-Mail:</h6>
                    <div className="flex items-center w-full">
                        {!__email ? 
                            <input value={ user.email } className="w-full input focus:outline-none rounded-md py-1 px-2" disabled={true} />
                        :
                            <input value={_email} onChange={(e) => _setEmail(e.target.value)} className="w-full input focus:outline-none rounded-md py-1 px-2" />
                        }
                        <a onClick={() => {
                            if (__email) _save('email', _email);
                            if (__email) _setEmail('');
                            __setEmail(!__email);
                        }} className={ (__email ? "border-green-600 text-green-600 hover:bg-green-600" : "border-white text-white hover:bg-white") + " hover:text-black py-1 px-2 rounded-md border-2 transition-all ml-2 font-bold cursor-pointer" }>
                            {__email ? 'Save' : 'Edit'}
                        </a>
                    </div>
                </div>
                <div>
                    <h6 className="text-gray-300 text-sm">Password:</h6>
                    <div className="flex items-center w-full">
                        {!__password ? 
                            <input value={ '************' } className="w-full input focus:outline-none rounded-md py-1 px-2" disabled={true} />
                        :
                            <input value={_password} onChange={(e) => _setPassword(e.target.value)} className="w-full input focus:outline-none rounded-md py-1 px-2" />
                        }
                        <a onClick={() => {
                            if (__password) _save('password', _password);
                            if (__password) _setPassword('');
                            __setPassword(!__password);
                        }} className={ (__password ? "border-green-600 text-green-600 hover:bg-green-600" : "border-white text-white hover:bg-white") + " hover:text-black py-1 px-2 rounded-md border-2 transition-all ml-2 font-bold cursor-pointer" }>
                            {__password ? 'Save' : 'Edit'}
                        </a>
                    </div>
                </div>
                <div>
                    <h6 className="text-gray-300 text-sm">Security Question:</h6>
                    <div className="flex items-center w-full">
                        {!__answer ? 
                            <input value={ '************' } className="w-full input focus:outline-none rounded-md py-1 px-2" disabled={true} />
                        :
                            <input value={_answer} onChange={(e) => _setAnswer(e.target.value)} className="w-full input focus:outline-none rounded-md py-1 px-2" />
                        }
                        <a onClick={() => {
                            if (__answer) _save('answer', _answer);
                            if (__answer) _setAnswer('');
                            __setAnswer(!__answer);
                        }} className={ (__answer ? "border-green-600 text-green-600 hover:bg-green-600" : "border-white text-white hover:bg-white") + " hover:text-black py-1 px-2 rounded-md border-2 transition-all ml-2 font-bold cursor-pointer" }>
                            {__answer ? 'Save' : 'Edit'}
                        </a>
                    </div>
                </div>
            </div> : <div className="flex mt-3 items-center justify-center">
                <h1 className="text-lg font-bold">You are not logged in!</h1>
            </div>
        )
    );
};