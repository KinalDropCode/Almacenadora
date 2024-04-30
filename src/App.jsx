import { useRoutes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import routes from "./routes.jsx";
// import  "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

export const App = () => {
  let element = useRoutes(routes);

  return (
    <>
      {element}
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};
