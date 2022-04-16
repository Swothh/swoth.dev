import { UilSpinnerAlt, UilCheck, UilTimes } from '@iconscout/react-unicons'
import fetch from 'isomorphic-unfetch';
import swr from '../../lib/swr.jsx';
import { useState } from 'react';

export default function Main() {
    const { data: identify } = swr('/api/auth/me');
    let user = identify ? identify.user : null;

    return (
        !identify ? <div className="flex items-center justify-center mt-3">
            <UilSpinnerAlt className="spin dropdown" />
        </div> : (
            user ? <div className="flex mt-3 items-center justify-center">
                <h1 className="text-lg font-bold">Coming soon!</h1>
            </div> : <div className="flex mt-3 items-center justify-center">
                <h1 className="text-lg font-bold">You are not logged in!</h1>
            </div>
        )
    );
};