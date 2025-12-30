import ElectricWaterTable from "./Table/Index";

const ElectricWaterUtilities = () => {
	return (
		<div>
			<span className="font-semibold text-lg mb-3 block">Thông tin điện & nước </span>
			<div className="w-full border border-slate-200 rounded-xl overflow-x-auto">
				<ElectricWaterTable />
			</div>
		</div>
	);
};

export default ElectricWaterUtilities;
