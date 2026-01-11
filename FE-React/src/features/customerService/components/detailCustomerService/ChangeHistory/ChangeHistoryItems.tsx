const ChangeHistoryItems = () => {
	return (
		<li className="flex gap-x-2 items-start">
			<div className="size-7 rounded-full bg-blue-100 text-[#137fec] flex-center font-bold text-xs border border-blue-200">AD</div>
			<div className="flex flex-col">
				<span className="text-sm font-normal">
					Đã cập nhật đơn giá từ <b className="line-through font-medium italic!">3,000</b> thành <b className="italic! text-[#137fec]">3,500</b>
				</span>
				<span className="text-xs text-gray-500">01/06/2023 - 09:30</span>
			</div>
		</li>
	);
};

export default ChangeHistoryItems;
