import App from "../App";

import { createBrowserRouter, Link } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
        <App />
      </div>
    ),
  },
  {
    path: "about",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="/">Back to Home</Link>
      </div>
    ),
  },
  {
    path: "html",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>

        <br />
        <Link to="/">Back to Home</Link>
      </div>
    ),
  },
  {
    path: "react",
    element: (
      <div>
        <h1>Hello World</h1>
        <br />
        <Link to="/">Back to Home</Link>
      </div>
    ),
  },
  {
    path: "html/about",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>

        <br />
        <Link to="/">Back to Home</Link>
      </div>
    ),
  },
]);

export default router;
