import { BtnIconAction } from "@common/button/Index";
import { MdArrowBack, MdOutlineSyncAlt } from "react-icons/md";

const BtnAction = () => {
	return (
		<div className="flex items-center gap-x-3">
			<BtnIconAction className="text-sm bg-white border-slate-200 focus:ring-0!">
				<MdOutlineSyncAlt className="text-xl " />
				Chuyển trạng thái
			</BtnIconAction>
			<BtnIconAction className="text-sm bg-[#137fec] text-white border-slate-200 focus:ring-0!">
				<MdArrowBack className="text-xl " />
				Trờ về
			</BtnIconAction>
		</div>
	);
};

export default BtnAction;
