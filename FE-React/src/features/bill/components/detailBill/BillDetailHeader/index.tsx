import BillIdentityInfo from "./BillIdentityInfo";
import BtnActionGroup from "./BtnActionGroup";

const BillDetailHeader = () => {
	return (
		<div className="w-full flex items-start justify-between mb-6 ">
			<BillIdentityInfo />
			<BtnActionGroup />
		</div>
	);
};

export default BillDetailHeader;
