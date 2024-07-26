import {
    createBrowserRouter,
    Outlet,
    ScrollRestoration
} from "react-router-dom";

// axios
import { ProductsData } from "./api/axios";

// components
import Footer from "./components/Footer"
import Header from "./components/Header"

// pages
import Home from "./pages/Home"
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

const Layout = () => {
    return (
        <div>
            <Header />
            <ScrollRestoration />
            <Outlet />
            <Footer />
        </div>
    )
}

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: ProductsData
            },
            {
                path: "/product/:id",
                element: <Product />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/login",
                element: <Login />
            }
        ]
    }
]);