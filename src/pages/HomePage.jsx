import { Link, Outlet } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <ul>
        <li><Link to="/cronometer">Cronometer</Link></li>
        <li><Link to="/counter">Counter</Link></li>
        <li><Link to="/news">News</Link></li>
      </ul>
      <Outlet/>
    </>
  );
}