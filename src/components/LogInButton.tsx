import { useAuth0 } from '@auth0/auth0-react';

const LogInButton = () => {
    const { loginWithPopup } = useAuth0();

    return <button onClick={() => loginWithPopup()} className='authButton'>
        Log In
    </button>;
};

export default LogInButton;