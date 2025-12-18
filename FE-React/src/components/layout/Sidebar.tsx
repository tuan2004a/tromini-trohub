import { MdOutlineDashboard } from "react-icons/md";
import { FaDoorOpen } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { Button } from "@radix-ui/themes";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = React.memo(() => {
	return (
		<div className="flex flex-col justify-between h-full p-5 pt-0">
			<div className="h-18">
				{/* logo */}
				<img src="" alt="" />
				<p>Trohub</p>
			</div>
			<nav className="py-5 grow">
				<ul className="space-y-1.5 block!">
					<li className="">
						<NavLink to="/" className={({ isActive }) => `menu-sidebar ${isActive ? "uk-active" : ""}`}>
							<MdOutlineDashboard className="text-2xl" />
							Tổng quan
						</NavLink>
					</li>
					<li>
						<NavLink to="/quan-ly-phong" className={({ isActive }) => `menu-sidebar ${isActive ? "uk-active" : ""}`}>
							<FaDoorOpen className="text-2xl" />
							Quản lý phòng
						</NavLink>
					</li>
					<li>
						<NavLink to="/quan-ly-tai-khoan" className={({ isActive }) => `menu-sidebar ${isActive ? "uk-active" : ""}`}>
							<FaUsers className="text-2xl" />
							Người thê
						</NavLink>
					</li>
				</ul>
			</nav>
			<div>
				<Button size="4" color="red" variant="soft" className="w-full! rounded-xl! gap-x-2! cursor-pointer!">
					<FaArrowRightFromBracket className="2xl" />
					Đăng xuất
				</Button>
			</div>
		</div>
	);
});

export default Sidebar;
