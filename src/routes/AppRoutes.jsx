import { Route, Routes } from "react-router";
import Layout from "../layout/Layout";
import Home from "../views/home/Home";
import NotFound from "../views/notFound/NotFound";
import FlightsList from "../views/flightsList/FlightsList";

const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="flights-list" element={<FlightsList />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    );
  };
  
  export default AppRoutes;