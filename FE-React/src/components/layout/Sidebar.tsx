import { MdOutlineDashboard } from "react-icons/md";
import { FaDoorOpen, FaUsers } from "react-icons/fa";
import { Button } from "@radix-ui/themes";
import { FaArrowRightFromBracket, FaBellConcierge } from "react-icons/fa6";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = React.memo(() => {
	const location = useLocation();

	const getNavClassName = ({ isActive }: { isActive: boolean }) => {
		return `menu-sidebar ${isActive ? "uk-active" : ""}`;
	};

	const getDashboardClassName = () => {
		// Custom active logic for dashboard: active if pathname is "/" or "/dashboard"
		const isCustomActive = location.pathname === "/" || location.pathname === "/thong-ke";
		return `menu-sidebar ${isCustomActive ? "uk-active" : ""}`;
	};

	return (
		<div className="flex flex-col justify-between h-full p-5 pt-0">
			<div className="h-18 flex items-center">
				<div className="w-23 rounded-full">
					<img className="" src="/logo-trohub.png" alt="Trohub logo, a property management platform for rental accommodations" />
				</div>
				<p>Trohub</p>
			</div>
			<nav className="py-5 grow">
				<ul className="space-y-1.5 block">
					<li>
						<NavLink to="/thong-ke" className={getDashboardClassName}>
							<MdOutlineDashboard className="text-2xl" />
							Tổng quan
						</NavLink>
					</li>
					<li>
						<NavLink to="/quan-ly-phong" className={getNavClassName}>
							<FaDoorOpen className="text-2xl" />
							Quản lý phòng
						</NavLink>
					</li>
					<li>
						<NavLink to="/quan-ly-dich-vu" className={getNavClassName}>
							<FaBellConcierge className="text-2xl" />
							Dịch vụ
						</NavLink>
					</li>
					<li>
						<NavLink to="/quan-ly-nguoi-dung" className={getNavClassName}>
							<FaUsers className="text-2xl" />
							Người thuê
						</NavLink>
					</li>
				</ul>
			</nav>
			<div className="w-full">
				<Button size="4" color="red" variant="soft" className="w-full! rounded-xl gap-x-2 cursor-pointer!">
					<FaArrowRightFromBracket className="text-2xl" />
					Đăng xuất
				</Button>
			</div>
		</div>
	);
});

export default Sidebar;
