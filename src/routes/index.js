// Import Layout
import { HeaderOnly } from "~/components/Layout";

import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";

// Router không cần đăng nhập vẫn xem được
const publicRoutes = [
    { path: "/", component: Home },
    { path: "/following", component: Following },
    { path: "/@:nickname", component: Profile },
    { path: "/upload", component: Upload, layout: HeaderOnly },
    { path: "/search", component: Search, layout: null },
];
// Router cần đăng nhập mới xem được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
