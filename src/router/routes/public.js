
import Layout from '@/layout/Layout.vue'
import Dashboard from '@/views/Dashboard.vue'
import Charts from '@/views/Charts.vue'

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '/',
        redirect: 'dashboard'
      },
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'charts',
        name: 'Charts',
        component: Charts
      }
    ]
  }
]

export default routes.map(route => {
  const meta = {
    public: true,
    onlyLoggedOut: true
  }
  return {
    ...route,
    meta
  }
})