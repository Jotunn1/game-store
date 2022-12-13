import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowsePage } from './components/pages/BrowsePage';
import { HomePage } from './components/pages/HomePage';
import Layout from "./components/Layout";

const router = createBrowserRouter(
    [{
        element: <Layout />, children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "browse",
                element: <BrowsePage />
            }
        ]
    }
    ]);
const App = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default App;