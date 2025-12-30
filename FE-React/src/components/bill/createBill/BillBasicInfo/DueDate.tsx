import Input from "@common/input/Input";

const DueDateInput = () => {
	return (
		<div>
			<label className="text-sm text-slate-500" htmlFor="dueDate">
				Hạn thanh toán
			</label>
			<Input type="date" id="dueDate" className="border-gray-300" />
		</div>
	);
};

export default DueDateInput;
