import React, { useEffect } from 'react';
import useAuth  from '../hooks/useAuth'

const ResolveAuthScreen = () => {
    const { tryLocalSignIn  } = useAuth();

    useEffect( () => {
        tryLocalSignIn();
    }, [] )

    return null
}

export default ResolveAuthScreen;
