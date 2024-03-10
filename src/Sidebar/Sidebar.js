import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { MdOutlineDashboard, MdOutlineProductionQuantityLimits,MdOutlineCategory, MdInventory2 } from "react-icons/md";
import { FaFirstOrder } from "react-icons/fa";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { TbReportSearch } from "react-icons/tb";
import { FcCustomerSupport } from "react-icons/fc";
import { IoIosSettings } from "react-icons/io";
import {BsCart3} from 'react-icons/bs'

const Sidebar = ({openSidebarToggle, OpenSidebar}) => {
  return (
    <aside id="sidebara" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div>
          <BsCart3  className='icon_header'/> SHOP
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
          </div>
        
      <nav className="nav">
        
        <Link to="/">
          <MdOutlineDashboard /> Dashboard
        </Link>
        <Link to="/products">
          <MdOutlineProductionQuantityLimits /> Products
        </Link>
        <Link to="/orders">
          <FaFirstOrder /> Orders
        </Link>
        <Link to="/calendar">
          <IoCalendarNumberOutline /> Calendar
        </Link>
        <Link to="/calendar">
          <MdOutlineCategory /> Category
        </Link>
        <Link to="/calendar">
          <FcCustomerSupport /> Customer
        </Link>
        <Link to="/calendar">
          <MdInventory2 /> Inventory
        </Link>
        <Link to="/calendar">
          <TbReportSearch /> Reports
        </Link>
        <Link to="/calendar">
          <IoIosSettings /> Setting
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
