import Input from "@common/input/Input";

const IssueDateInput = () => {
	return (
		<div>
			<label className="text-sm text-slate-500" htmlFor="issueDate">
				Ngày lập
			</label>
			<Input type="date" id="issueDate" className="border-gray-300" />
		</div>
	);
};

export default IssueDateInput;
