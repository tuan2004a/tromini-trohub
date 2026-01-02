import { BtnIconAction } from "@common/button/Index"
import { BiSend } from "react-icons/bi";
import { FaPrint } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
import { FaRegPenToSquare } from "react-icons/fa6";

const BtnActionGroup = () => {
    return (
		<div className="flex gap-x-2">
			<BtnIconAction className="text-sm! border-slate-200 bg-white text-slate-600 focus:ring-[#137fec]">
				<FaRegPenToSquare className="text-base" />
				Chỉnh sửa
			</BtnIconAction>
			<BtnIconAction className="text-sm! border-slate-200 bg-white text-slate-600 focus:ring-[#137fec]">
				<FaPrint className="text-base" />
				In/PDF
			</BtnIconAction>
			<BtnIconAction className="text-sm! border-slate-200 bg-white text-slate-600 focus:ring-[#137fec]">
				<BiSend className="text-xl" />
				Giửi TB
			</BtnIconAction>
			<BtnIconAction className="text-sm! border-slate-200 bg-[#137fec]/90 text-white focus:ring-0 border-none! ">
				<BsCashCoin className="text-lg" />
				Xác nhận TT
			</BtnIconAction>
		</div>
	);
}

export default BtnActionGroup
