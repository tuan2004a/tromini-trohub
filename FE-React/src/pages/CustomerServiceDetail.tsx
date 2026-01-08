import { BasicInfor, AppliedLocations } from "@components/customerService/components/detailCustomerService";
import MasterLayOut from "@MasterLayout";

const CustomerServiceDetail = () => {
	return (
		<MasterLayOut>
			<div className="size-full p-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
				<div className="lg:col-span-2 flex flex-col gap-6">
					<section className="p-5 rounded-xl bg-white border border-slate-200 shadow-lg">
						<BasicInfor />
					</section>
					<section className="p-5 rounded-xl bg-white border border-slate-200 shadow-lg">
						<AppliedLocations />
					</section>
				</div>
			</div>
		</MasterLayOut>
	);
};

export default CustomerServiceDetail;
