import MasterLayOut from "@MasterLayout";
import PeriodicServiceList from "@/components/bill/createBill/PeriodicServiceList";
import BillSummary from "@/components/bill/createBill/BillSummary/Index";

import { BillBasicInfo, ElectricWaterUtilities } from "@components/bill/components/createBill/index";

const CreateBill = () => {
	return (
		<MasterLayOut>
			<div className="size-full p-8">
				<section className="p-5 rounded-xl bg-white border border-slate-200 shadow-lg">
					<BillBasicInfo />
				</section>

				<section className="p-5 rounded-xl bg-white border border-slate-200 shadow-lg mt-5">
					<ElectricWaterUtilities />
				</section>

				<section className="p-5 rounded-xl bg-white border border-slate-200 shadow-lg mt-5">
					<PeriodicServiceList />
				</section>

				<section className="p-5 rounded-xl bg-white border border-slate-200 shadow-lg mt-5">
					<BillSummary />
				</section>
			</div>
		</MasterLayOut>
	);
};

export default CreateBill;
