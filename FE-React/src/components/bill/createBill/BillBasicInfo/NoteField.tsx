import Input from "@common/input/Input";

const NoteField = () => {
	return (
		<div>
			<label className="text-sm text-slate-500" htmlFor="note">
				Ghi chú
			</label>
			<Input type="text" id="note" placeholder="VD: Thu tiền bổ sung,..." className="border-gray-300" />
		</div>
	);
};

export default NoteField;
