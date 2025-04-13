export const routes = [
  { path: '/', redirect: '/dashboard' },
  {
    path: '/',
    component: () => import('@/layouts/default.vue'),
    children: [
      {
        path: 'dashboard',
        component: () => import('@/pages/dashboard.vue'),
      },
      {
        path: 'paket-soal',
        component: () => import('@/pages/question-packet-dashboard.vue'),
      },
      {
        path: 'detail',
        component: () => import('@/pages/question-packet-detail.vue'),
      },
      {
        path: 'review',
        component: () => import('@/pages/question-packet-review.vue'),
      },
      {
        path: 'result',
        component: () => import('@/pages/question-packet-result.vue'),
      },
      {
        path: 'soal',
        component: () => import('@/pages/question-packet.vue'),
      },
      {
        path: 'soal-review',
        component: () => import('@/pages/question-packet.vue'),
      },
      {
        path: 'profile/:tab',
        component: () => import('@/pages/account-settings.vue'),
      },
      {
        path: 'otp',
        component: () => import('@/pages/otp.vue'),
      },
      {
        path: 'upgrade/membership',
        component: () => import('@/pages/membership-dashboard.vue'),
      },
      {
        path: 'membership/detail',
        component: () => import('@/pages/membership-template-detail.vue'),
      },
      {
        path: 'lab-values',
        component: () => import('@/pages/lab-values.vue'),
      },
      {
        path: 'example-analisa-advis',
        component: () => import('@/pages/example-result-analyst-dashboard.vue'),
      },
      {
        path: 'analisa-advis/:menu',
        component: () => import('@/pages/result-analyst-dashboard.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('@/layouts/blank.vue'),
    children: [
      {
        path: 'login',
        component: () => import('@/pages/login.vue'),
      },
      {
        path: 'register',
        component: () => import('@/pages/register.vue'),
      },
      {
        path: 'register-step-2',
        component: () => import('@/pages/register-step-2.vue'),
      },
      {
        path: 'forgot-password',
        component: () => import('@/pages/forgot-password.vue'),
      },
      {
        path: 'reset-password',
        component: () => import('@/pages/reset-password.vue'),
      },
      {
        path: '/:pathMatch(.*)*',
        component: () => import('@/pages/[...error].vue'),
      },
    ],
  },
]
