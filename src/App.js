import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Hero } from "./pages/Hero/Hero";
import "./App.sass";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/hero/:id",
      element: <Hero />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
