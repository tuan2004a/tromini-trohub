import MeasurementUnit from "./MeasurementUnit";
import NameService from "./NameService";
import PriceField from "./PriceField";

const BasicInfor = () => {
    return (
		<div>
			<span className="font-semibold text-lg mb-4 flex items-center gap-2">Thông tin cơ bản</span>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				<NameService />
				<MeasurementUnit />
				<PriceField />
			</div>
		</div>
	);
}

export default BasicInfor
