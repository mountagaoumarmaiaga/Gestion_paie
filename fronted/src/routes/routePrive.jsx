import { useSelector } from 'react-redux'
import { selectAuth } from '../redux/authSlice'
import { Navigate, Outlet } from 'react-router-dom';

const routePrive = () => {
    const { isAuthenticated } = useSelector(selectAuth);
    
    return isAuthenticated ? <Outlet /> : <Navigate to='/' />;
}

export default routePrive;
