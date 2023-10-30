import { NavLink } from "react-router-dom";
import "./ItemNavLink_style.scss";
export const ItemNavLink = ({ to, children, ...props }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          isActive
            ? "nav-link rounded-0 fw-bold active"
            : "nav-link text-white",
        ].join(" ")
      }
      {...props}
    >
      {children}
    </NavLink>
  );
};
