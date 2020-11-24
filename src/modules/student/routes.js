//import StudentPage from './pages/StudentPage'
//import StudentCreate from './components/StudentCreate'

export const StudentRoutes = [
    {
        path: '/student',
        component: () => import('./pages/StudentPage'),
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: '/',
                component: () => import('./components/StudentSearch'),
            },
            {
                path: 'create',
                component: () => import('./components/StudentCreate'),
            }
          ]
    },
    // {
    //     path: '/student/create',
    //     name: 'studentcreate',
    //     component: () => import('./components/StudentCreate'),
    //     meta: {
    //         requiresAuth: true
    //     }
    // }
]