import { GeneralInfoCard, ActivityLog, FeeDetailsTable, BillSummaryStatus, TransactionHistory, BillDetailHeader } from "@components/bill/components/detailBill/index";
import MasterLayOut from "@MasterLayout";
import { SendIBillNotice } from "@components/bill/components/modal/index";

const DetailBill = () => {
	return (
		<MasterLayOut>
			<div className="size-full p-8">
				<section>
					<BillDetailHeader />
				</section>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
					<div className="lg:col-span-1 space-y-6">
						<section className="p-5 rounded-xl bg-white border border-slate-200 shadow-lg">
							<GeneralInfoCard />
						</section>
						<section className="p-5 rounded-xl bg-white border border-slate-200 shadow-lg">
							<ActivityLog />
						</section>
					</div>
					<div className="lg:col-span-2 space-y-6">
						<section className="rounded-xl bg-white border border-slate-200 shadow-lg">
							<FeeDetailsTable />
						</section>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<section className="p-5 rounded-xl bg-white border border-slate-200 shadow-lg">
								<BillSummaryStatus />
							</section>
							<section className="p-5 rounded-xl bg-white border border-slate-200 shadow-lg">
								<TransactionHistory />
							</section>
						</div>
					</div>
				</div>
			</div>

			<section className="hidden! fixed top-1/2 left-1/2 -translate-1/2 size-full flex-center bg-slate-700/80 backdrop-blur-xs z-50">
				<SendIBillNotice />
			</section>
		</MasterLayOut>
	);
};

export default DetailBill;
