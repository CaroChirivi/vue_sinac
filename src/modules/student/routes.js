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
                meta: {
                    requiresAuth: true
                },
            },
            {
                path: 'create',
                component: () => import('./components/StudentCreate'),
                meta: {
                    requiresAuth: true
                },
            },
            {
                path: 'student',
                component: () => import('./components/Student'),
                meta: {
                    requiresAuth: true
                },
            }
          ]
    },
]