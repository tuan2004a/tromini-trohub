import FloorSelect from "./FloorSelect";
import NameRoom from "./NameRoom";
import NameTag from "./NameTag";

const BasicInfor = () => {
    return (
		<div>
			<span className="font-semibold text-lg mb-4 flex items-center gap-2">Thông tin cơ bản</span>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<NameRoom />
				<NameTag />
				<FloorSelect />
			</div>
		</div>
	);
}

export default BasicInfor
