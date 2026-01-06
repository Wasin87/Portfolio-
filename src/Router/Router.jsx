import { createBrowserRouter } from "react-router";
import { Suspense, lazy } from "react";
import Root from "../Root/Root";
import Loader from "../HomeLayout/Loader";
 

// Lazy load Home
const Home = lazy(() => import("../HomeLayout/Home"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        )
      }
    ]
  }
]);

export default router;
