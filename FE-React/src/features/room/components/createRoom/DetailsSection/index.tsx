import AreaField from "./AreaField";
import Description from "./Description";
import MonthlyRentField from "./MonthlyRentField";

const DetailsSection = () => {
    return (
		<div>
			<span className="font-semibold text-lg mb-4 flex items-center gap-2">Thông tin cơ bản</span>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<MonthlyRentField />
				<AreaField />
				<Description />
			</div>
		</div>
	);
}

export default DetailsSection
