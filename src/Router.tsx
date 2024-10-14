import React, { Suspense } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import Navbar from './layout/Navbar/Navbar';
import { Header } from './layout';
import './App.css';

import { ShoopingList, Cookbook } from './pages';

// Lazy-loaded pages
const Home = React.lazy(() => import('./pages/Home/Home'));
const Login = React.lazy(() => import('./pages/Login/Login'));

const AppLayout: React.FC = () => {
    const isNavbarOpen = useSelector((state: RootState) => state.navbarPopup.isOpen);

    // Define dynamic styles based on navbar state
    const contentStyle = {
        transition: 'margin-left 0.3s ease',
        marginLeft: '80px',
        marginRight: '10px',
        paddingLeft: isNavbarOpen ? '150px' : '0px',
    };

    return (
        <div className={`app-container ${isNavbarOpen ? 'navbar-open' : 'navbar-closed'}`}>
            <Header />
            <Navbar />
            <div className="main-content" style={contentStyle}>
                <Outlet />
            </div>
        </div>
    );
};

// Route definitions
const routeDefinitions = [
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Home />
                    </Suspense>
                ),
            },
            {
                path: '/login',
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Login />
                    </Suspense>
                ),
            },
            {
                path: '/shopping-list',
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <ShoopingList />
                    </Suspense>
                ),
            },
            {
                path: '/cookbook',
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Cookbook />
                    </Suspense>
                ),
            },
        ],
    },
];

const router = createBrowserRouter(routeDefinitions);

const Router: React.FC = () => {
    return <RouterProvider router={router} />;
};

export default Router;
