import { Input } from "@common/input/Index";

const NameRoom = () => {
	return (
		<label htmlFor="" className="flex flex-col items-start gap-y-1.5 text-sm font-medium">
			Tên phòng
			<Input type="text" className="font-normal" />
		</label>
	);
};

export default NameRoom;
