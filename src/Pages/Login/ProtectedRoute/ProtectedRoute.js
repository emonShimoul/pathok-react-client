import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const ProtectedRoute = ({
    redirectPath = '/login',
    children
}) => {
    const { user, isLoading } = useAuth();
    const location = useLocation();
    if (isLoading) {
        return <p className='text-xl text-green-600 m-2 font-bold'>Loading...</p>
    }
    if (!user?.email) {
        return <Navigate to={redirectPath} replace state={{ redirectTo: location }} />;
    }
    return children;
};

export default ProtectedRoute;