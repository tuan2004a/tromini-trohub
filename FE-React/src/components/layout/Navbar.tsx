import { Text } from "@radix-ui/themes";
import React from "react";
import { useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

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
		<div className="w-full h-18 flex justify-between items-center">
			<div>
				<Text size="6" className="font-bold!">
					{title}
				</Text>
				<Text as="p" size="2" weight="regular" color="gray">
					{subtitle}
				</Text>
			</div>
			<div>
				<div className="hidden lg:flex relative w-80 group">
					<CiSearch className="text-2xl absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
					<input
						className="w-full h-11 pl-10 pr-4 rounded-xl bg-slate-100 border border-transparent hover:bg-white hover:border-slate-200 focus:bg-white focus:border-[#137fec] focus:ring-2 focus:ring-[#137fec] transition-all text-sm text-slate-900 placeholder-slate-400"
						placeholder="Tìm kiếm nhanh..."
						type="text"
					/>
				</div>
				<div></div>
			</div>
		</div>
	);
});

export default Navbar;
