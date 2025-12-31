import { LuNotebookText } from "react-icons/lu";

const AttachmentNote = () => {
	return (
		<div className="bg-yellow-50 border border-yellow-100 rounded-lg p-3">
			<span className="text-xs font-medium text-yellow-800 mb-1 flex items-center gap-1">
				<LuNotebookText className="" />
				Ghi chú
			</span>
			<p className="text-sm text-yellow-900 italic">Khách xin đóng trễ 2 ngày do đi công tác.</p>
		</div>
	);
};

export default AttachmentNote;
