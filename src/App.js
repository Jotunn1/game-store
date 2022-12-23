import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BrowsePage from "./components/pages/BrowsePage";
import { HomePage } from "./components/pages/HomePage";
import Layout from "./components/Layout";
import GamePage from "./components/pages/GamePage";
import { NotFoundPage } from "./components/pages/NotFoundPage";
import GamePlaceholder from "./components/pages/GamePlaceholder";
import TechnogoliesPage from "./components/pages/TechnogoliesPage";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "browse",
                element: <BrowsePage />,
            },
            {
                path: "games/:gameId",
                element: <GamePage />,
            },
            {
                path: "/placeholder",
                element: <GamePlaceholder />,
            },
            {
                path: "/technologies",
                element: <TechnogoliesPage />,
            },
            {
                path: "*",
                element: <NotFoundPage />,
            },
        ],
    },
]);
const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
