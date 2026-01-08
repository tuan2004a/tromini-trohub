import { Input } from "@common/input/Index";

const MeasurementUnit = () => {
	return (
		<label className="">
			Đơn vị tính
			<Input type="text" placeholder="Ví dụ: kWh, m³, Phòng/Tháng, Người/Tháng,..." />
		</label>
	);
};

export default MeasurementUnit;
