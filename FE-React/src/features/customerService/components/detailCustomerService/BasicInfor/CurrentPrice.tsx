
const CurrentPrice = () => {
    return (
		<div className="border-t border-gray-300 pt-2 mt-4">
			<span className="text-xs uppercase font-bold tracking-wider text-gray-500">Đơn giá hiện tại</span>
			<p className="text-primary font-black text-3xl tracking-tight text-[#137fec]">
				3,500 <strong className="text-base font-normal text-blue-900">vnđ / kWh</strong>
			</p>
		</div>
	);
}

export default CurrentPrice
