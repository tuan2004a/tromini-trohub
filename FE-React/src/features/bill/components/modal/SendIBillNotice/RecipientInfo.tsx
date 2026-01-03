import { Input } from "@common/input/Index";

const RecipientInfo = () => {
	return (
		<label className="flex flex-col font-medium w-full">
			Người nhận
			<Input type="text" className="bg-slate-200 text-slate-500 mt-2" readonly value="Nguyễn Văn A - P.101" />
		</label>
	);
};

export default RecipientInfo;
