import ElectricWaterTable from "./ElectricWaterTable/Index";

const ElectricWaterUtilities = () => {
    return (
		<div>
			<span className="font-semibold text-lg mb-3 block">Thông tin điện & nước </span>
			<div className="w-full overflow-x-auto">
				<ElectricWaterTable />
			</div>
		</div>
	);
}

export default ElectricWaterUtilities
