import FiltersContainer from "@/components/bill/FiltersContainer/Index";
import BillTable from "@/components/bill/table/Index";
import MasterLayOut from "@MasterLayout";

const Bill = () => {
	return (
		<MasterLayOut>
			<div className="size-full p-8">
				<section className="p-5 rounded-xl bg-white border border-slate-200">
					<FiltersContainer />
				</section>

				<section className=" bg-white mt-5 rounded-xl border border-slate-200">
					<BillTable />
				</section>
			</div>
		</MasterLayOut>
	);
};

export default Bill;
