import { Input } from "@common/input/Index";

const PriceField = () => {
	return (
		<label className="">
			Đơn giá (VNĐ)
			<Input type="number" placeholder="0" />
		</label>
	);
};

export default PriceField;
