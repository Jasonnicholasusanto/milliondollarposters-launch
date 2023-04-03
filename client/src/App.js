import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.scss';
import LaunchingSoon from "./pages/LaunchingSoon";

// Customizing the layout of the web page: Navigation bar and Footer stays the same
// in all pages. However, we utilize Outlet from react-router-dom to change the web pages'
// properties and objects.
const Layout = () => {
  return (
    <div className="app">
      <LaunchingSoon/>
    </div>
  )
}

// Creating the routes
const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children: [
      // Home page route
      {
        path:"/",
        element:<LaunchingSoon/>,
      },
    ]
  },

])

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
