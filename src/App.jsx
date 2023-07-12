import { Routes, Route, Navigate } from "react-router-dom";
import { Footer, Navbar } from "@/components/layout";
import routes from "@/routes";
// import "@/bootstrap/dist/css/bootstrap.css";
import "./style.css"
import { useLocation } from 'react-router-dom'
import SecondaryNavbar from "./components/layout/SecondaryNavbar";
import Bookings from "./pages/Bookings/booking";
import CustomerDetail from "./pages/CustomerDetail/CustomerDetail";

function App() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <>
      <div className="global_font_family container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
        {location.pathname === "/home" ? <Navbar routes={routes} />
        :
        <SecondaryNavbar />}
      </div>
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        <Route path="*" element={<Navigate to="/home" replace />} />
        <Route path="/booking" element={<Bookings />} />
        <Route path="/customer_detail" element={<CustomerDetail />} />
      </Routes>

    </>
  );
}

export default App;
