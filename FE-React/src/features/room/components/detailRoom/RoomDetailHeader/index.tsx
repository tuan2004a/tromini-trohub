import BtnAction from "./BtnAction";
import HeaderIdentity from "./HeaderIdentity";

const RoomDetailHeader = () => {
    return (
		<div className="flex items-start justify-between">
			<HeaderIdentity />
			<BtnAction />
		</div>
	);
}

export default RoomDetailHeader
