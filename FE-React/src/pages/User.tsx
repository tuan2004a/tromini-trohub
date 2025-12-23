import BtnAddNew from "@common/button/btnAddNew";
import BtnPrime from "@common/button/btnPrime";
import Search from "@common/input/search";
import UserTable from "@/components/user/UserTable";
import MasterLayOut from "@layout/MasterLayOut"

const User = () => {
	// throw new Error("Test crash Room page");


    return (
		<MasterLayOut>
			<div className="size-full p-8">
				<section className="flex justify-between p-5 rounded-xl bg-white border border-slate-200">
					<div className="flex ">
						<Search className="w-90!" placeholder="tìm theo mã phòng, theo khách" />
						<div className="ml-5 space-x-2.5">
							<BtnPrime className="bg-black! text-white!">Tất cả</BtnPrime>
							<BtnPrime>Còn trống</BtnPrime>
							<BtnPrime>Đã thuê</BtnPrime>
						</div>
					</div>
					<div>
						<BtnAddNew>Thêm khác thuê</BtnAddNew>
					</div>
				</section>
				<section className=" bg-white mt-5 rounded-xl border border-slate-200">
					<UserTable />
				</section>
			</div>
		</MasterLayOut>
	);
}

export default User

// const Rooms = () => {
// 	throw new Error("Test crash Room page");
// };
// export default Rooms;