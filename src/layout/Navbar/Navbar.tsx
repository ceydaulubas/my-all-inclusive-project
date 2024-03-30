// Navbar.tsx

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

// Import the icons
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

// Import the interfaces
import { NavItem  } from '../../helper/interfaces';

// Import the redux hooks
import type { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { togglePopup } from '../../redux/navbarPopup/navbarPopupSlice'

const Navbar: React.FC = () => {

  const isNavbarOpen = useSelector((state: RootState) => state.navbarPopup.isOpen);
  const dispatch = useDispatch()
  
  const iconSize = '22px';

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
    <div className={`navbar-container ${isNavbarOpen ? 'open' : 'closed'}`}>
      <div className="toggle-icon"  onClick={() => dispatch(togglePopup())}>
        {isNavbarOpen ? <LeftOutlined /> : <RightOutlined />}
      </div>
      <div className="nav-items">
        {navItems.map((item, index) => (
          <Link key={index} to={item.path} className="nav-item">
            {item.icon}
            {isNavbarOpen && <span>{item.title}</span>}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
