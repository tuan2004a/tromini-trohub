import MasterLayOut from "@MasterLayout";
import BtnAddNew from "@common/button/btnAddNew";
import Search from "@common/input/search";
import { CustomerServiceTable } from "@components/customerService/components/customerServices/index";

const customerService = () => {
	return (
		<MasterLayOut>
			<div className="size-full p-8">
				<section className="flex justify-between p-5 rounded-xl bg-white border border-slate-200">
					<div>
						<Search className="w-90!" placeholder="tìm theo tên dịch vụ..." />
					</div>
					<div>
						<BtnAddNew>Thêm phòng mới</BtnAddNew>
					</div>
				</section>

				<section className="bg-white mt-5 rounded-xl border border-slate-200">
					<CustomerServiceTable />
				</section>
			</div>
		</MasterLayOut>
	);
};

export default customerService;
