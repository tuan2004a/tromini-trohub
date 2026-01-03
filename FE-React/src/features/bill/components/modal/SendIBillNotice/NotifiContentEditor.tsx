const NotifiContentEditor = () => {
	const defaultContent = `Xin chào, 

Đây là thông báo về hóa đơn tháng 10/2023 của phòng.
Tổng số tiền cần thanh toán là: VNĐ.\n
Hạn thanh toán: . 

Vui lòng thanh toán đúng hạn để tránh phí phạt.
Trân trọng, 
Ban quản lý TroHub.
`;

	return (
		<div className="space-y-2 relative">
			<span className="block text-slate-900 font-medium">Nội dung thông báo</span>
			<textarea defaultValue={defaultContent} className="w-full min-h-[170px] p-4 rounded-lg bg-white border border-slate-200 text-slate-900 text-sm leading-relaxed outline-none placeholder:text-slate-400 transition-shadow"></textarea>
		</div>
	);
};

export default NotifiContentEditor;
