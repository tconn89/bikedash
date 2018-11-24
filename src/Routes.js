import Default from './pages/Default';
import MapDash from './pages/MapDash';
import History from './pages/History';
import MapDashFull from './pages/MapDashFullscreen'

export const routes = [
    {
        component: History,
        leftNav: true,
        name: 'History',
        path: '/history',
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
        component: Default,
        exact: true,
        leftNav: false,
        name: 'Home',
        path: '/',
    },
    
];
