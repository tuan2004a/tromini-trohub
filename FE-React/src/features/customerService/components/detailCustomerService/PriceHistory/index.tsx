import Timeline from "./Timeline";

const PriceHistory = () => {
    return (
		<div>
			<span className="font-semibold text-lg mb-4 flex items-center gap-2">Lịch sử giá</span>
			<ul className="border-l border-slate-400 relative">
				<Timeline />
				<Timeline />
				<Timeline />
			</ul>
		</div>
	);
}

export default PriceHistory
