import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <h2>Payment Gateway</h2>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/transactions">Transactions</Link></li>
      </ul>
    </nav>
  );
}
