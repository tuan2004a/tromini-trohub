import { Input } from "@common/input/Index";

const AreaField = () => {
	return (
		<label htmlFor="" className="flex flex-col items-start gap-y-1.5 text-sm font-medium relative">
			Diện tích (m²)
			<Input type="text" className="font-normal" />
		</label>
	);
};

export default AreaField;
