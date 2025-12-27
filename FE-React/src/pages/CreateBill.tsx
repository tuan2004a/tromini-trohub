import BillBasicInfo from "@/components/bill/createBill/BillBasicInfo";
import ElectricWaterUtilities from "@/components/bill/createBill/ElectricWaterUtilities";
import MasterLayOut from "@MasterLayout"

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
			</div>
		</MasterLayOut>
	);
}

export default CreateBill
