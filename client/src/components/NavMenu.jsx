import React from "react";
import { NavLink } from "react-router-dom";

export default function NavMenu() {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "nav__link nav__link--active"
                                : "nav__link"
                        }
                    >
                        Мои задачи
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/completed"
                        className={({ isActive }) =>
                            isActive
                                ? "nav__link nav__link--active"
                                : "nav__link"
                        }
                    >
                        Выполненные
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/important"
                        className={({ isActive }) =>
                            isActive
                                ? "nav__link nav__link--active"
                                : "nav__link"
                        }
                    >
                        Важные
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
