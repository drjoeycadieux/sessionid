import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/views/Login.vue'; // Your login component
import Dashboard from '@/views/Dashboard.vue'; // Your dashboard component
import { auth } from '@/firebase'; // Firebase auth import

Vue.use(VueRouter);

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: { requiresAuth: true }, // Protected route
    },
    {
        path: '*', // Fallback for unknown routes
        redirect: '/login'
    }
];

const router = new VueRouter({
    mode: 'history', // Optional: Removes the hash from URLs
    routes
});

// Navigation guard to protect routes
router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const user = auth.currentUser; // Check the current Firebase user

    if (requiresAuth && !user) {
        // If the route requires authentication and there's no logged-in user, redirect to login
        next('/login');
    } else {
        // Otherwise, proceed
        next();
    }
});

export default router;
