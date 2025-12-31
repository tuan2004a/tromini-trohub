import { GeneralInfoCard, ActivityLog } from "@components/bill/components/detailBill/index";
import MasterLayOut from "@MasterLayout";

const DetailBill = () => {

	return (
		<MasterLayOut>
			<div className="size-full p-8">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
					<div className="lg:col-span-1 space-y-6">
						<section className="p-5 rounded-xl bg-white border border-slate-200 shadow-lg">
							<GeneralInfoCard />
						</section>
						<section className="p-5 rounded-xl bg-white border border-slate-200 shadow-lg">
							<ActivityLog />
						</section>
					</div>
					<div className="lg:col-span-2 space-y-6"></div>
				</div>
			</div>
		</MasterLayOut>
	);
};

export default DetailBill;
