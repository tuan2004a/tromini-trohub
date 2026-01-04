import InforRoom from "./InforRoom";
import LastUpdatedText from "./LastUpdatedText";
import RoomRentPrice from "./RoomRentPrice";

const RoomBasicInfo = () => {
	return (
		<div>
			<span className="text-lg font-semibold text-slate-900 flex items-center">Thông tin cơ bản</span>
			<div className="mt-4">
				<InforRoom />
				<div className="p-4 mt-4 bg-slate-50 rounded-xl flex items-center justify-between">
					<RoomRentPrice />
					<LastUpdatedText />
				</div>
			</div>
		</div>
	);
};

export default RoomBasicInfo;
