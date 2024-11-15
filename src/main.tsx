import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '@/router/pages/layout.tsx';
import Root from '@/router/pages/root/RootPage.tsx';
import NotFound from '@/router/features/error/NotFound.tsx';
import PlaylistPage from '@/router/pages/playlist/PlaylistPage.tsx';
import ProfilePage from '@/router/pages/profile/ProfilePage.tsx';

const router = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                element: <Root />,
                path: '/'
            },
            {
                element: <App />,
                path: '/favorites'
            },
            {
                element: <PlaylistPage />,
                path: '/playlist/:playlistId'
            },
            {
                element: <ProfilePage />,
                path: '/profile/:profileId'
            }
        ]
    }
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
