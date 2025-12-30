import Input from "@common/input/Input";
import { BtnAction } from "@common/button/Index";
import { FaTrash } from "react-icons/fa";

const ExtraFeeSection = () => {
    return (
		<div className="w-full">
			<span className="font-medium mb-3 block">Phụ phí / Giảm trừ</span>
			<div className="flex gap-3">
				<Input type="text" placeholder="Tên khoản ví..." />
				<Input type="number" placeholder="0" className="max-w-24" />
			</div>
			<ul className="mt-3">
				<li className="flex items-center w-full space-x-3">
					<Input type="text" placeholder="Tên khoản ví..." value="Phạt đóng muộn" />
					<Input type="number" placeholder="0" className="max-w-27" value="50000" />

					<BtnAction dataTooltip="Xóa" className="bg-red-500 px-4">
						<FaTrash className="text-lg" />
					</BtnAction>
				</li>
			</ul>
		</div>
	);
}

export default ExtraFeeSection
