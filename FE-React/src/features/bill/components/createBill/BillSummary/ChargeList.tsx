const ChargeList = () => {
    return (
		<div>
			<ul className="text-slate-600 text-sm space-y-2 *:w-full *:flex *:justify-between">
				<li>
					<span>Tiền phòng (Tháng 10)</span>
					<span className="text-black">1,500,000 đ</span>
				</li>
				<li>
					<span>Điện</span>
					<span className="text-black">450,000 đ</span>
				</li>
				<li>
					<span>Nước</span>
					<span className="text-black">45,000 đ</span>
				</li>
				<li>
					<span>Dịch vụ định kỳ</span>
					<span className="text-black">180,000 đ</span>
				</li>
				<li>
					<span>Phụ phí khác</span>
					<span className="text-black">50,000 đ</span>
				</li>
			</ul>
		</div>
	);
}

export default ChargeList
