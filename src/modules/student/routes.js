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
                children: [
                    {
                        path: '',
                        component: () => import('./components/Info'),
                        meta: {
                            requiresAuth: true
                        }
                    },
                    {
                        path: '/histories',
                        component: () => import('./components/Histories'),
                        meta: {
                            requiresAuth: true
                        }
                    },
                    {
                        path: '/programs',
                        component: () => import('./components/programs/Programs'),
                        meta: {
                            requiresAuth: true
                        },
                    },
                    {
                        path: '/programs/historial',
                        component: () => import('./components/programs/Historial'),
                        meta: {
                            requiresAuth: true
                        },
                    },
                    {
                        path: '/programs/historial/states',
                        component: () => import('./components/programs/HistorialStates'),
                        meta: {
                            requiresAuth: true
                        },
                    },
                    {
                        path: '/programs/payments',
                        component: () => import('./components/programs/Payments'),
                        meta: {
                            requiresAuth: true
                        },
                    }
                ]
            }
          ]
    },
]