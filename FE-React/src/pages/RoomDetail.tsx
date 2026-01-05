import { RoomDetailHeader, RoomBasicInfo, AppliedServices, ChangeHistory, ProfileTentant, QuickActionsCard } from "@components/room/components/detailRoom";
import MasterLayOut from "@MasterLayout";

const RoomDetail = () => {
	return (
		<MasterLayOut>
			<div className="size-full p-8">
				<section className="mb-6">
					<RoomDetailHeader />
				</section>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
					<div className="lg:col-span-2 flex flex-col gap-6">
						<section className="p-5 rounded-xl bg-white border border-slate-200 shadow-lg">
							<RoomBasicInfo />
						</section>
						<section className="rounded-xl bg-white border border-slate-200 shadow-lg">
							<AppliedServices />
						</section>
						<section className="p-5 rounded-xl bg-white border border-slate-200 shadow-lg">
							<ChangeHistory />
						</section>
					</div>
					<div className="lg:col-span-1 flex flex-col gap-6">
						<section className="p-5 rounded-xl bg-white border border-slate-200 shadow-lg">
							<ProfileTentant />
						</section>
						<section className="p-5 rounded-xl bg-white border border-slate-200 shadow-lg">
							<QuickActionsCard />
						</section>
					</div>
				</div>
			</div>
		</MasterLayOut>
	);
};

export default RoomDetail;
