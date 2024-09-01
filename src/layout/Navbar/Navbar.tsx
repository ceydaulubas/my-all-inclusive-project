import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  ShoppingCartOutlined,
  ScheduleOutlined,
  PlusOutlined,
  CalendarOutlined,
  ExperimentOutlined,
  MedicineBoxOutlined,
  CarOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { togglePopup } from "../../redux/navbarPopup/navbarPopupSlice";
import { RootState } from "../../redux/store";
import { NavItem } from "../../helper/interfaces";
import {
  NavbarContainer,
  NavItems,
  NavItemLink,
  ToggleIcon,
  BoldLeftOutlined,
  BoldRightIconOutlined,
  NavbarContent,
} from "./Navbar.styles";

const Navbar: React.FC = () => {
  const isNavbarOpen = useSelector(
    (state: RootState) => state.navbarPopup.isOpen
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const iconSize = "22px";

  const getIconWithSize = (icon: JSX.Element) => {
    return React.cloneElement(icon, {
      style: { fontSize: iconSize, color: "#555" },
    });
  };

  const handleLinkClick = (path: string) => {
    // Navigate to the path
    navigate(path);

    // Close the Navbar
    dispatch(togglePopup());
  };

  const navItems: NavItem[] = [
    {
      title: "Overview",
      icon: getIconWithSize(<HomeOutlined />),
      path: "/overview",
    },
    {
      title: "Shopping List",
      icon: getIconWithSize(<ShoppingCartOutlined />),
      path: "/shopping-list",
    },
    {
      title: "Tasks",
      icon: getIconWithSize(<ScheduleOutlined />),
      path: "/tasks",
    },
    {
      title: "Recipes",
      icon: getIconWithSize(<PlusOutlined />),
      path: "/recipes",
    },
    {
      title: "Meal Plan",
      icon: getIconWithSize(<ExperimentOutlined />),
      path: "/meal-plan",
    },
    {
      title: "Calendar",
      icon: getIconWithSize(<CalendarOutlined />),
      path: "/calendar",
    },
    {
      title: "Pill List",
      icon: getIconWithSize(<MedicineBoxOutlined />),
      path: "/pill-list",
    },
    {
      title: "Travel Plan",
      icon: getIconWithSize(<CarOutlined />),
      path: "/travel-plan",
    },
  ];

  return (
    <NavbarContainer isOpen={isNavbarOpen}>
      <NavbarContent>
        <ToggleIcon onClick={() => dispatch(togglePopup())}>
          {isNavbarOpen ? <BoldLeftOutlined /> : <BoldRightIconOutlined />}
        </ToggleIcon>
        <NavItems>
          {navItems.map((item, index) => (
            <NavItemLink
              key={index}
              to={item.path}
              onClick={() => handleLinkClick(item.path)}
            >
              {item.icon}
              {isNavbarOpen && <span>{item.title}</span>}
            </NavItemLink>
          ))}
        </NavItems>
      </NavbarContent>
    </NavbarContainer>
  );
  
};

export default Navbar;
