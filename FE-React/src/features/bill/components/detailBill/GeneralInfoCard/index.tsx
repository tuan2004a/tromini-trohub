import { memo } from "react";
import CodeField from "./CodeField";
import RoomInfo from "./RoomInfo";
import TenantInfo from "./TenantInfo";
import PaymentTimeline from "./PaymentTimeline";
import AttachmentNote from "./AttachmentNote";

const GeneralInfoCard = memo(() => {
	return (
		<div>
			<span className="font-semibold text-slate-900 pb-3 block mb-2 text-lg">Thông tin chung</span>
			<div className="space-y-4">
				<CodeField />
				<RoomInfo />
				<TenantInfo />
				<PaymentTimeline />
				<AttachmentNote />
			</div>
		</div>
	);
});

export default GeneralInfoCard;
