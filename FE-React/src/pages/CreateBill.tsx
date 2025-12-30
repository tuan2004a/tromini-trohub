import MasterLayOut from "@MasterLayout";
import { BillBasicInfo, ElectricWaterUtilities, PeriodicServiceList, BillSummary } from "@components/bill/components/createBill/index";
import { BtnAddNew, BtnPrime } from "@common/button/Index";
import { BiSend } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const CreateBill = () => {

	const navigate = useNavigate();

	return (
		<MasterLayOut>
			<div className="size-full p-8">
				<section className="p-5 rounded-xl bg-white border border-slate-200 shadow-lg">
					<BillBasicInfo />
				</section>

				<section className="p-5 rounded-xl bg-white border border-slate-200 shadow-lg mt-5">
					<ElectricWaterUtilities />
				</section>

				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-5">
					<section className="w-full lg:col-span-7 h-full">
						<PeriodicServiceList />
					</section>

					<section className="p-5 w-full lg:col-span-5 rounded-xl bg-white border border-slate-200 shadow-lg">
						<BillSummary />
					</section>
				</div>

				<div className="flex justify-end mt-10 gap-5">
					<BtnPrime onClick={() => navigate("/quan-ly-hoa-don")} className="">
						Hủy bỏ
					</BtnPrime>
					<BtnAddNew iconName={<BiSend className="text-xl mr-2" />}>Giửi hóa đơn</BtnAddNew>
				</div>
			</div>
		</MasterLayOut>
	);
};

export default CreateBill;
