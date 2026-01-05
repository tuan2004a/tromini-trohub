import { Icon } from "@common/card/Index";
import { FaAngleRight } from "react-icons/fa";
import { IoReceiptOutline } from "react-icons/io5";
import { LiaFileContractSolid } from "react-icons/lia";

const BtnQuick = () => {
	return (
		<div>
			<span className="flex items-center cursor-pointer hover:bg-slate-50 gap-3 p-3 rounded-xl">
				<Icon size={8}>
					<LiaFileContractSolid className="text-2xl" />
				</Icon>
				<div className="grow">
					<span className="block text-sm font-medium text-slate-900">Hợp đồng thuê</span>
					<p className="text-xs text-slate-500">Xem hoặc tạo mới</p>
				</div>
				<span className=" text-slate-400 group-hover:text-[#137fec] text-[20px]">
					<FaAngleRight />
				</span>
			</span>
			<span className="flex items-center cursor-pointer hover:bg-slate-50 gap-3 p-3 rounded-xl">
				<Icon size={8}>
					<IoReceiptOutline className="text-2xl" />
				</Icon>
				<div className="grow">
					<span className="block text-sm font-medium text-slate-900">Hóa đơn tháng này</span>
					<p className="text-xs text-slate-500">Chưa thanh toán</p>
				</div>
				<span className=" text-slate-400 group-hover:text-[#137fec] text-[20px]">
					<FaAngleRight />
				</span>
			</span>
		</div>
	);
};

export default BtnQuick;
