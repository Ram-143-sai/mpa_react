import { Link } from "react-router-dom";
const Header = () => (
    <div className="container alert alert-success text-center">
     <table className="nav-menu" align= "center">
       <thead>
           <tr>
               <th>
         <Link className="nav-link" to="/">Home</Link>
       </th>
       <th>
         <Link className="nav-link" to="/about">About Us</Link>
       </th>
       <th>
         <Link className="nav-link" to="/contact">Contact</Link>
       </th>
       </tr>
       </thead>
     </table>
     </div>
     
)
export default Header
