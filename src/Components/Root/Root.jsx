import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const Root = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
           <div>
           <Outlet></Outlet>
           </div>
           <div className="py-10">
           <Footer></Footer>
           </div>
        </div>
    );
};

export default Root;