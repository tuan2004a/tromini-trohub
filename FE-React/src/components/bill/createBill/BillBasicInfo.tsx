import Input from "@common/input/Input";
import OptionFilter from "@common/input/optionFilter";
import Select from "@common/input/select"

const BillBasicInfo = () => {
    return (
		<div>
			<span className="font-semibold text-lg mb-3 block">Thông tin cơ bản</span>
			<div className="grid grid-cols-3 gap-5">
				<div className="w-full">
					<label className="text-sm text-slate-500" htmlFor="">
						Số phòng
					</label>
					<Select className="w-full outline-none border-slate-200 font-normal! mt-1 py-2 *:py-2 *:px-2">
						<OptionFilter>Chọn phòng:</OptionFilter>
						<OptionFilter>P101</OptionFilter>
						<OptionFilter>P102</OptionFilter>
						<OptionFilter>P103</OptionFilter>
					</Select>
				</div>
				<div className="w-full">
					<label className="text-sm text-slate-500" htmlFor="">
						Người thuê
					</label>
					<Input type="text" value={"Tên người thuê"} className="bg-gray-100 text-slate-500 mt-1" />
				</div>
				<div>
					<label className="text-sm text-slate-500" htmlFor="">
						Kỳ hóa đơn
					</label>
					<Input type="month" className=" border-gray-300 " />
				</div>
				<div>
					<label className="text-sm text-slate-500" htmlFor="">
						Ngày lập
					</label>
					<Input type="date" className=" border-gray-300 " />
				</div>
				<div>
					<label className="text-sm text-slate-500" htmlFor="">
						Hạn thanh toán
					</label>
					<Input type="date" className=" border-gray-300 " />
				</div>
				<div>
					<label className="text-sm text-slate-500" htmlFor="">
						Ghi chú
					</label>
					<Input type="text" placeholder="VD: Thu tiền bổ sung,..." className=" border-gray-300 " />
				</div>
			</div>
		</div>
	);
}

export default BillBasicInfo
