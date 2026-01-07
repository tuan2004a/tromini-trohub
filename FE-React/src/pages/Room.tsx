import Search from "@common/input/search";
import MasterLayOut from "@MasterLayout";
import { RoomTable } from "@components/room/components/rooms/index";
import { BtnAddNew, BtnPrime } from "@common/button/Index";
import { useNavigate } from "react-router";

const Rooms = () => {

	const navigate = useNavigate();

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
						<BtnAddNew onClick={() => navigate("/quan-ly-phong/tao-phong-moi")}>Thêm phòng mới</BtnAddNew>
					</div>
				</section>

				<section className=" bg-white mt-5 rounded-xl border border-slate-200">
					<RoomTable />
				</section>
			</div>
		</MasterLayOut>
	);
};

export default Rooms;
