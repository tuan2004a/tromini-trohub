import { Input } from "@common/input/Index";

const MonthlyRentField = () => {
	return (
		<label htmlFor="" className="flex flex-col items-start gap-y-1.5 text-sm font-medium relative">
			Giá thuê (VNĐ/tháng)
			<Input type="text" className="font-normal" />
		</label>
	);
};

export default MonthlyRentField;
