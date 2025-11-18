import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import HomePage from "../Page/HomePage";
import RecipesPage from "../Page/RecipesPage";
import BlogPage from "../Page/BlogPage";
import AboutPage from "../Page/AboutPage";
import ContactPage from "../Page/ContactPage";

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
            {
                path: 'recipes',
                Component: RecipesPage
            },
            {
                path: 'blog',
                Component: BlogPage
            },
            {
                path: 'about',
                Component: AboutPage
            },
            {
                path: 'contact',
                Component: ContactPage
            }
        ]
    }
]);

export default router;