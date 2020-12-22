export const ProgramRoutes = [
    {
        path: '/programs',
        component: () => import('./pages/ProgramsPage'),
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: '/',
                component: () => import('./components/Dashboard'),
                meta: {
                    requiresAuth: true
                },
            },
            {
                path: 'program',
                component: () => import('./components/Program'),
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
                        path: '/programs/program/groups',
                        component: () => import('./components/groups/Groups'),
                        meta: {
                            requiresAuth: true
                        }
                    },
                    {
                        path: '/programs/program/groups/students',
                        component: () => import('./components/groups/Students'),
                        meta: {
                            requiresAuth: true
                        }
                    },
                ]
            }
        ]
    }
]