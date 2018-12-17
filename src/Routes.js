import Home from './pages/home';
import Contact from './pages/contact';
import MapDash from './pages/MapDash';
import History from './pages/History';
import Strava from './pages/Strava';
import MapDashFull from './pages/MapDashFullscreen'

export const routes = [
    {
        component: Contact,
        leftNav: false,
        name: 'Contact',
        path: '/contact-us',
    },
    {
        component: History,
        leftNav: true,
        name: 'History',
        path: '/history',
    },
    {
        component: Strava,
        leftNav: true,
        name: 'Login',
        path: '/login',
    },
    {
        component: MapDash,
        leftNav: false,
        name: 'MapDash',
        path: '/read/*',
    },
    {
        component: MapDashFull,
        leftNav: false,
        name: 'MapDashFullScreen',
        path: '/fullscreen/*',
    },
    {
        component: Home,
        exact: true,
        leftNav: false,
        name: 'Home',
        path: '/',
    },
    
];
