import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from '@/router/pages/rootLayout.tsx';
import Root from '@/router/pages/root/RootPage.tsx';
import NotFound from '@/router/features/error/NotFound.tsx';
import PlaylistPage from '@/router/pages/playlist/PlaylistPage.tsx';
import ProfilePage from '@/router/pages/user/UserPage.tsx';
import SearchPage from '@/router/pages/search/SearchPage.tsx';
import AuthLayout from '@/router/pages/authLayout.tsx';
import LoginPage from '@/router/pages/login/LoginPage.tsx';
import RegisterPage from '@/router/pages/register/RegisterPage.tsx';
import RecoverPasswordPage from '@/router/pages/recover/RecoverPasswordPage.tsx';
import RecoverPasswordEmailPage from '@/router/pages/recover/recoverPasswordEmail/RecoverPasswordEmailPage.tsx';
import RecoverPasswordConfirmPage from '@/router/pages/recover/recoverPasswordConfirm/RecoverPasswordConfirmPage.tsx';
import DebugPage from '@/router/pages/debug/DebugPage.tsx';
import ProfileTracksPage from '@/router/pages/user/tracks/UserTracksPage.tsx';
import MashupPage from '@/router/pages/mashup/MashupPage.tsx';
import Layout from '@/router/pages/layout.tsx';
import FavoritesPage from '@/router/pages/favorites/FavoritesPage.tsx';
import RecommendationsPage from '@/router/pages/recommendations/RecommendationsPage.tsx';
import RegisterEmailPage from '@/router/pages/register/registerEmail/RegisterEmailPage.tsx';
import RegisterConfirmPage from '@/router/pages/register/registerConfirm/RegisterConfirmPage.tsx';
import RestorePasswordSuccessPage from '@/router/pages/recover/recoverPasswordSuccess/RestorePasswordSuccessPage.tsx';
import { HotkeysProvider } from 'react-hotkeys-hook';
import PrivacyPolicyPage from '@/router/pages/privacyPolicy/PrivacyPolicyPage.tsx';
import DMCAPage from '@/router/pages/dmca/DMCAPage.tsx';
import UserAgreementPage from '@/router/pages/userAgreement/UserAgreement.tsx';
import SettingsPage from '@/router/pages/settings/SettingsPage.tsx';
import UploadMashupPage from '@/router/pages/uploadMashup/UploadMashupPage.tsx';

const router = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            // основное приложение
            {
                element: <RootLayout />,
                children: [
                    {
                        element: <DebugPage />,
                        path: '/debug'
                    },
                    {
                        element: <Root />,
                        path: '/'
                    },
                    {
                        element: <PrivacyPolicyPage />,
                        path: '/privacy_policy'
                    },
                    {
                        element: <DMCAPage />,
                        path: '/dmca'
                    },
                    {
                        element: <UserAgreementPage />,
                        path: '/user_agreement'
                    },
                    {
                        element: <FavoritesPage />,
                        path: '/favorites'
                    },
                    {
                        element: <RecommendationsPage />,
                        path: '/recommendations'
                    },
                    {
                        element: <PlaylistPage />,
                        path: '/playlist/:playlistId'
                    },
                    {
                        element: <MashupPage />,
                        path: '/mashup/:mashupId'
                    },
                    {
                        element: <UploadMashupPage />,
                        path: '/mashup/upload'
                    },
                    {
                        element: <ProfilePage />,
                        path: '/user/:profileUsername'
                    },
                    {
                        element: <SettingsPage />,
                        path: '/settings'
                    },
                    {
                        element: <ProfileTracksPage />,
                        path: '/user/:profileUsername/tracks'
                    },
                    {
                        element: <SearchPage />,
                        path: '/search'
                    }
                ]
            },
            // страницы входа
            {
                element: <AuthLayout />,
                children: [
                    {
                        element: <LoginPage />,
                        path: '/login'
                    },
                    // регистрация
                    {
                        element: <RegisterPage />,
                        path: '/register'
                    },
                    {
                        element: <RegisterEmailPage />,
                        path: '/register/email'
                    },
                    {
                        element: <RegisterConfirmPage />,
                        path: '/register/confirm'
                    },
                    // восстановление
                    {
                        element: <RecoverPasswordPage />,
                        path: '/user/recover_password'
                    },
                    {
                        element: <RecoverPasswordEmailPage />,
                        path: '/user/recover_password/email'
                    },
                    {
                        element: <RecoverPasswordConfirmPage />,
                        path: '/user/recover_password/confirm'
                    },
                    {
                        element: <RestorePasswordSuccessPage />,
                        path: '/user/recover_password/success'
                    }
                ]
            }
        ]
    }
]);

createRoot(document.getElementById('root')!).render(
    // <StrictMode>
    //
    // </StrictMode>

    <HotkeysProvider>
        <RouterProvider router={router} />
    </HotkeysProvider>
);
