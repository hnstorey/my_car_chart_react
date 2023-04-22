import { useAuth0 } from '@auth0/auth0-react';

const LogOutButton = () => {
    const { logout } = useAuth0();

    return (
        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
        className='authButton'>
            Log Out
        </button>
    );
};

export default LogOutButton