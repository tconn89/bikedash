import Default from './pages/Default';
import CardPage from './pages/CardPage';
import Article from './pages/Article';
import MapDash from './pages/MapDash';
import History from './pages/History';

export const routes = [
    {
        component: History,
        leftNav: true,
        name: 'History',
        path: '/history',
    },
    {
        component: MapDash,
        leftNav: true,
        name: 'MapDash',
        path: '/read/*',
    },
    {
        component: Default,
        exact: true,
        leftNav: true,
        name: 'Home',
        path: '/',
    },
    {
        component: CardPage,
        leftNav: true,
        name: 'Cards',
        path: '/cards',
    },
    {
        component: Article,
        leftNav: true,
        name: 'Article',
        path: '/article',
    },
    
];
