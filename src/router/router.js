import { createBrowserRouter } from "react-router-dom";
import Default from "../screens/Default";
import Product from "../screens/Product";
import LandingPage from "../screens/LandingPage/LandingPage";

import App from "../App";
import LoginForm from "../screens/Forms/LoginForm";

const basename = process.env.NODE_ENV === 'production' ? '/desarrollo-frontend-react' : '/';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <LandingPage />,
            },
            {
                path: "/default",
                element: <Default />,
            },
            {
                path: "/product",
                element: <Product />,
            },
            {
                path: "/loginForm",
                element: <LoginForm />
            }
        ],
    },
],
{
    basename: basename
}
);

export default router;