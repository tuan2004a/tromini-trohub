import { BasicInfor, IconSession, Describe } from "@components/customerService/components/createCustomerService";
import MasterLayOut from "@MasterLayout";

const CustomerServiceCreate = () => {
	return (
		<MasterLayOut>
			<div className="size-full p-8 space-y-6">
				<section className="p-5 rounded-xl bg-white border border-slate-200 shadow-lg">
					<BasicInfor />
				</section>
				<section className="p-5 rounded-xl bg-white border border-slate-200 shadow-lg">
					<IconSession />
				</section>
				<section className="p-5 rounded-xl bg-white border border-slate-200 shadow-lg">
					<Describe />
				</section>
			</div>
		</MasterLayOut>
	);
};

export default CustomerServiceCreate;
