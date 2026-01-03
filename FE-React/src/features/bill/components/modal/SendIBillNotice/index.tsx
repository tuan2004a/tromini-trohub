import { memo } from "react";
import Title from "./Title";
import ChannelPicker from "./ChannelPicker";
import RecipientInfo from "./RecipientInfo";
import NotifiContentEditor from "./NotifiContentEditor";
import { BtnIconAction, BtnPrime } from "@common/button/Index";
import { BiSend } from "react-icons/bi";
// import TemplateSelector from "./TemplateSelector";

const SendIBillNotice = memo(() => {
	return (
		<div className="bg-white z-50 p-5 rounded-xl max-w-2xl w-full space-y-5 overflow-y-auto">
			<Title />
			<ChannelPicker />
			<div className="flex items-center justify-between gap-x-5">
				<RecipientInfo />
				{/* <TemplateSelector /> */}
			</div>
			<NotifiContentEditor />
			<div className="flex justify-end gap-x-3">
				<BtnPrime className="text-sm! border-slate-200 bg-white focus:ring-none">Hủy</BtnPrime>
				<BtnIconAction className="text-sm! border-slate-200 bg-[#137fec] text-white focus:ring-none">
					<BiSend className="text-xl" />
					Giửi TB
				</BtnIconAction>
			</div>
		</div>
	);
});

export default SendIBillNotice;
