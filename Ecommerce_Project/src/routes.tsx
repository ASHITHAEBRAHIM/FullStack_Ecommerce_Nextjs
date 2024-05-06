import { createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Home from './pages/Home';
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        children: [
            { index: true, element: <Home/> },
        ],
    },
    {
        path: '/product/:id', element: <ProductDetails />,
    },
    {
        path: '/cart', element: <CartPage />,
    }
]);
export default router;
