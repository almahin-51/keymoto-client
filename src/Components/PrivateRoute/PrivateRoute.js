import React from 'react';
import { Redirect, Route } from 'react-router';
import { PulseLoader } from 'react-spinners';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <div className="sweet-loading text-center">
            <PulseLoader size={20} />
        </div>
    }
    
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;