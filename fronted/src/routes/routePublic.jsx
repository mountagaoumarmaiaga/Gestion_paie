import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectAuth } from '../redux/authSlice'
import { Outlet, useNavigate } from 'react-router-dom';

const routePublic = () => {
    const { isAuthenticated } = useSelector(selectAuth);
    
    return isAuthenticated ? <Navigate to='/' /> : <Outlet />;
}

export default routePublic
