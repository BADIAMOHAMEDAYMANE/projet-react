import { Route, Routes } from "react-router";
import Layout from "../layout/Layout";
import Home from "../views/home/Home";
import About from "../views/about/About";
import NotFound from "../views/notFound/NotFound";

const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    );
  };
  
  export default AppRoutes;