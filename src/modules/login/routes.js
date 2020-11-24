//import SignInPage from './pages/SignIn'

export const LoginRoutes = [
    {
        path: '/signin',
        name: 'signin',
        component: () => import('./pages/SignIn')
    }
]