import { Link, Outlet } from "react-router-dom";
function Admin() {
    return (
        <div>
            <nav>
                <Link to={"/admin/dashboard"}>Admin Page</Link>
                <Link to={"/admin/userdetails"}>User Details</Link>
                <Link to={"/admin/settings"}>Settings</Link>
            </nav>
            <Outlet/>
        </div>
     );
}

export default Admin;