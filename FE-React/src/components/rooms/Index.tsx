import Search from "../common/input/search";
import MasterLayOut from "../layout/MasterLayOut";
import BtnAddNew from "../common/button/btnAddNew";
import BtnPrime from "../common/button/btnPrime";
import RoomTable from "./RoomTable";

const Rooms = () => {
	return (
		<MasterLayOut>
			<div className="size-full p-8">
				<section className="flex justify-between bg-white p-5 rounded-xl">
					<div className="flex ">
						<Search className="w-90!" placeholder="tìm theo mã phòng, theo khách" />
						<div className="ml-5 space-x-2.5">
							<BtnPrime className="bg-black! text-white!">Tất cả</BtnPrime>
							<BtnPrime>Còn trống</BtnPrime>
							<BtnPrime>Đã thuê</BtnPrime>
						</div>
					</div>
					<div>
						<BtnAddNew>Thêm phòng mới</BtnAddNew>
					</div>
				</section>

				<section className="bg-white mt-5 rounded-xl border border-slate-200">
					<RoomTable />
				</section>
			</div>
		</MasterLayOut>
	);
};

export default Rooms;
