import CurrentPrice from "./CurrentPrice";
import DescriptionText from "./DescriptionText";
import DetailsInfor from "./DetailsInfor";

const BasicInfor = () => {
    return (
		<div>
			<span className="font-semibold text-lg mb-4 flex items-center gap-2">Thông tin cơ bản</span>
			<DetailsInfor />
			<CurrentPrice />
			<DescriptionText />
		</div>
	);
}

export default BasicInfor
