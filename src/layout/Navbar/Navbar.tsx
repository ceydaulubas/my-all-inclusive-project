// Navbar.tsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import {
  LeftOutlined,
  RightOutlined,
  ShoppingCartOutlined,
  ScheduleOutlined,
  PlusOutlined,
  CalendarOutlined,
  ExperimentOutlined,
  MedicineBoxOutlined,
  CarOutlined,
  HomeOutlined
} from "@ant-design/icons";

interface NavItem {
  title: string;
  icon: JSX.Element;
  path: string;
}

const Navbar: React.FC = () => {
  const iconSize = '22px';
  const [isNavbarPopupOpen, setIsNavbarPopupOpen] = useState<boolean>(false);

  const toggleNavbar = () => {
    setIsNavbarPopupOpen(!isNavbarPopupOpen);
  };

  const getIconWithSize = (icon: JSX.Element) => {
    return React.cloneElement(icon, { style: { fontSize: iconSize, color: '#555' } });
  };

  const navItems: NavItem[] = [
    { title: "Overview", icon: getIconWithSize(<HomeOutlined />), path: "/overview" },
    { title: "Shopping List", icon: getIconWithSize(<ShoppingCartOutlined />), path: "/shopping-list" },
    { title: "Tasks", icon: getIconWithSize(<ScheduleOutlined />), path: "/tasks" },
    { title: "Recipes", icon: getIconWithSize(<PlusOutlined />), path: "/recipes" },
    { title: "Meal Plan", icon: getIconWithSize(<ExperimentOutlined />), path: "/meal-plan" },
    { title: "Calendar", icon: getIconWithSize(<CalendarOutlined />), path: "/calendar" },
    { title: "Pill List", icon: getIconWithSize(<MedicineBoxOutlined />), path: "/pill-list" },
    { title: "Travel Plan", icon: getIconWithSize(<CarOutlined />), path: "/travel-plan" }
  ];

  return (
    <div className={`navbar-container ${isNavbarPopupOpen ? 'open' : 'closed'}`}>
      <div className="nav-items">
        {navItems.map((item, index) => (
          <Link key={index} to={item.path} className="nav-item">
            {item.icon}
            {isNavbarPopupOpen && <span>{item.title}</span>}
          </Link>
        ))}
      </div>
      <div className="toggle-icon" onClick={toggleNavbar}>
        {isNavbarPopupOpen ? <LeftOutlined /> : <RightOutlined />}
      </div>
    </div>
  );
};

export default Navbar;
