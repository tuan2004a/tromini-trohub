import RoomSelect from "./RoomSelect";
import TenantInput from "./TenantField";
import BillingPeriod from "./BillingPeriod";
import IssueDateInput from "./IssueDate";
import DueDateInput from "./DueDate";
import NoteField from "./NoteField";

const BillBasicInfo = () => {
	return (
		<div>
			<span className="font-semibold text-lg mb-3 block">Thông tin cơ bản</span>
			<div className="grid grid-cols-3 gap-5">
				<RoomSelect />
				<TenantInput />
				<BillingPeriod />
				<IssueDateInput />
				<DueDateInput />
				<NoteField />
			</div>
		</div>
	);
};

export default BillBasicInfo;
