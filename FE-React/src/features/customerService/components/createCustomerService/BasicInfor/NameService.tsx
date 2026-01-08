import { Input } from "@common/input/Index";

const NameService = () => {
	return (
		<label className="">
			Tên dịch vụ
			<Input type="text" placeholder="Ví dụ: Tiền điện, Internet, Vệ sinh..." />
		</label>
	);
};

export default NameService;
