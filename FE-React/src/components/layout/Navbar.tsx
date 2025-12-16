import { Avatar, Text } from "@radix-ui/themes";
import React from "react";
import { useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { MdNotifications } from "react-icons/md";

interface DynamicText {
	title: string;
	subtitle: string;
}

const getDynamicText = (pathname: string): DynamicText => {
	switch (pathname) {
		case "/":
			return {
				title: "Tổng quan",
				subtitle: "Thông tin thống kê tổng quát",
			};
		case "/thong-ke":
			return {
				title: "Tổng quan",
				subtitle: "Thông tin thống kê tổng quát",
			};
		default:
			return {
				title: "Trang không xác định",
				subtitle: "Đường dẫn không hợp lệ",
			};
	}
};

const Navbar = React.memo(() => {
	const { pathname } = useLocation();
	const { title, subtitle } = getDynamicText(pathname);

	return (
		<div className="w-full h-18 flex justify-between items-center px-8">
			<div>
				<Text size="6" className="font-bold!">
					{title}
				</Text>
				<Text as="p" size="2" weight="regular" color="gray">
					{subtitle}
				</Text>
			</div>
			<div className="flex">
				<div className="hidden lg:flex relative w-100 group mr-50">
					<CiSearch className="text-2xl absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
					<input
						className="w-full h-11 pl-10 pr-4 rounded-xl bg-slate-100 border outline-none border-transparent hover:border-[#137fec]/20 focus:bg-white focus:border-[#137fec] focus:ring-3 focus:ring-[#137fec]/20 transition-all text-sm text-slate-900 placeholder-slate-400"
						placeholder="Tìm kiếm nhanh..."
						type="text"
					/>
				</div>
				<div className="flex gap-x-4">
					<button className="size-11.5 justify-items-center hover:bg-[#137fec]/10 rounded-xl cursor-pointer">
						<MdNotifications className="text-2xl" />
					</button>
					<div className="flex flex-row-reverse gap-x-3 border-l border-slate-200 pl-4">
						<Avatar 
							src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
							fallback="A"
						/>
						<div>
							<span className="text-sm font-semibold text-slate-800">
								Admin User
							</span>
							<p className="text-xs text-slate-500">
								Quản trị viên
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
});

export default Navbar;
