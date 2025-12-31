import { Avatar, Text } from "@radix-ui/themes";
import React from "react";
import { useLocation } from "react-router-dom";
import Search from "@common/input/search";
import BtnNotif from '@common/button/btnNotif';

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
		case "/quan-ly-phong":
			return {
				title: "Danh sách phòng",
				subtitle: "Quản lý trạng thái và thông tin phòng trọ",
			};
		case "/quan-ly-dich-vu":
			return {
				title: "Danh sách dịch vụ",
				subtitle: "Thiết lập giá và danh mục dịch vụ toàn hệ thống",
			};
		case "/quan-ly-nguoi-dung":
			return {
				title: "Danh sách người thuê",
				subtitle: "Danh sách tất cả khách thuê hiện tại",
			};
		case "/quan-ly-hoa-don":
			return {
				title: "Quản lý hóa đơn",
				subtitle: "Theo dõi, quản lý công nợ và thu tiền hàng tháng.",
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
				<div className="">
					<Search className="w-75!" />
				</div>
				<div className="flex gap-x-4">
					<BtnNotif />
					<div className="flex flex-row-reverse gap-x-3 border-l border-slate-200 pl-4">
						<Avatar src="https://i.pravatar.cc/" fallback="A" />
						<div>
							<span className="text-sm font-semibold text-slate-800">Admin User</span>
							<p className="text-xs text-slate-500">Quản trị viên</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
});

export default Navbar;
