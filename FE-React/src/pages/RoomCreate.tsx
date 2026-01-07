import MasterLayOut from "@MasterLayout";
import { BasicInfor, DetailsSection } from "@components/room/components/createRoom/index";

const RoomCreate = () => {
	return (
		<MasterLayOut>
			<div className="size-full p-8 space-y-6">
				<section className="p-5 rounded-xl bg-white border border-slate-200 shadow-lg">
					<BasicInfor />
				</section>
				<section className="p-5 rounded-xl bg-white border border-slate-200 shadow-lg">
					<DetailsSection />
				</section>
			</div>
		</MasterLayOut>
	);
};

export default RoomCreate;
