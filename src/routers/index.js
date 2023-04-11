import config from '~/config';

// // Layouts
// import HeaderOnly from '~/layouts/HeaderOnly';

// pages
import { Mymusic, Home, Zingchart, Radio, Following, MV, Nhacmoi, Theloai, Top100, Login } from '~/pages';

// cấu hình Router không cần login
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.zingchart,
        component: Zingchart,
    },

    {
        path: config.routes.mymusic,
        component: Mymusic,
    },

    {
        path: config.routes.radio,
        component: Radio,
        // layout: HeaderOnly,
    },

    {
        path: config.routes.following,
        component: Following,
    },

    {
        path: config.routes.nhacmoi,
        component: Nhacmoi,
    },

    {
        path: config.routes.top100,
        component: Top100,
    },

    {
        path: config.routes.theloai,
        component: Theloai,
    },

    {
        path: config.routes.mv,
        component: MV,
    },

    {
        path: config.routes.login,
        component: Login,
        layout: null,
    },
];

// cấu hình các Router cần login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
