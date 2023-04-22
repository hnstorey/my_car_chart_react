import Home from "../pages/Home";
import ServiceHistory from "../pages/ServiceHistory";

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string,
    protected: Boolean
}

const routes: RouteType[] = [
    {
        path: '',
        component: Home,
        name: 'Home Screen',
        protected: false, 
    },
    {
        path: '/servicehistory',
        component: ServiceHistory,
        name: 'Service History',
        protected: true,
    },
];

export default routes