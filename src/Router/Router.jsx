import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import HomePage from "../Page/HomePage";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: HomePage,
                loader: () => fetch('food.json'),
            },
        ]
    }
]);

export default router;