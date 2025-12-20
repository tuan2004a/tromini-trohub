import MasterLayOut from "@layout/MasterLayOut";
import ServiceTable from "@/components/service/ServiceTable";
import BtnAddNew from "@common/button/btnAddNew";
import Search from "@common/input/search";

const Service = () => {
	return (
		<MasterLayOut>
			<div className="size-full p-8">
				<section className="flex justify-between bg-white p-5 rounded-xl">
					<div>
						<Search className="w-90!" placeholder="tìm theo tên dịch vụ..." />
					</div>
					<div>
						<BtnAddNew>Thêm phòng mới</BtnAddNew>
					</div>
				</section>

				<section className="bg-white mt-5 rounded-xl border border-slate-200">
					<ServiceTable />
				</section>
			</div>
		</MasterLayOut>
	);
};

export default Service;
