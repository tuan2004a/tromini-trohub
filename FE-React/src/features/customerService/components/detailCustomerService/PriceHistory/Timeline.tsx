
const Timeline = () => {
    return (
		<li className="mb-5 ml-5">
			<span className="absolute flex items-center justify-center size-2 bg-[#137fec] rounded-full -start-1 ring-2 ring-[#137fec]/50"></span>
			<p className="text-xs font-bold uppercase text-[#137fec] ">Hiện tại</p>
			<div className="flex justify-between items-center">
				<p className="text-lg font-bold">3,500 đ</p>
				<time className="text-xs text-slate-400 mt-0.5 font-medium">01/11/2023 - 08:30 AM</time>
			</div>
		</li>
	);
}

export default Timeline
