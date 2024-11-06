import Main from "./pages/main";
import Sitemap from "./pages/Sitemap";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Test1 from "./pages/Test1";
import Home1 from "./pages/Home copy";

const routes = [
    {
        path: '/',
        element: <Main />,
        name: '메인(첫 페이지)'
    },
    {
        path: '/home',
        element: <Home />,
        name: '홈 페이지'
    },
    {
        path: '/detail',
        element: <Detail />,
        name: '해충설명페이지'
    }
]

export default routes;