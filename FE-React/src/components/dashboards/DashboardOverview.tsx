import { FaDoorOpen } from "react-icons/fa";

const DashboardOverview = () => {
	return (
		<div className="grid grid-cols-4 w-full gap-3">
			{/* Card Tổng số phòng */}
			<div className="flex flex-row-reverse justify-between w-full h-35 roundex-xl bg-white p-5 rounded-xl">
				<span>
					<div className="size-13 bg-sky-100 flex items-center justify-center rounded-full">
						<FaDoorOpen className="text-3xl text-[#137fec]" />
					</div>
				</span>
				<span className="flex flex-col">
					<span>Tổng số phòng</span>
					<b className="text-3xl mt-1">30</b>
					<span className="mt-3 text-emerald-600 w-fit flex items-center text-xs font-bold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
						+2 mới
					</span>
				</span>
			</div>

			<div className="flex flex-row-reverse justify-between w-full h-35 roundex-xl bg-white p-5 rounded-xl">
				<span>
					<div className="size-13 bg-sky-100 flex items-center justify-center rounded-full">
						<FaDoorOpen className="text-3xl text-[#137fec]" />
					</div>
				</span>
				<span className="flex flex-col">
					<span>Tổng số phòng</span>
					<b className="text-3xl mt-1">30</b>
					<span className="mt-3 text-emerald-600 w-fit flex items-center text-xs font-bold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
						+2 mới
					</span>
				</span>
			</div>

			<div className="flex flex-row-reverse justify-between w-full h-35 roundex-xl bg-white p-5 rounded-xl">
				<span>
					<div className="size-13 bg-sky-100 flex items-center justify-center rounded-full">
						<FaDoorOpen className="text-3xl text-[#137fec]" />
					</div>
				</span>
				<span className="flex flex-col">
					<span>Tổng số phòng</span>
					<b className="text-3xl mt-1">30</b>
					<span className="mt-3 text-emerald-600 w-fit flex items-center text-xs font-bold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
						+2 mới
					</span>
				</span>
			</div>

			<div className="flex flex-row-reverse justify-between w-full h-35 roundex-xl bg-white p-5 rounded-xl">
				<span>
					<div className="size-13 bg-sky-100 flex items-center justify-center rounded-full">
						<FaDoorOpen className="text-3xl text-[#137fec]" />
					</div>
				</span>
				<span className="flex flex-col">
					<span>Tổng số phòng</span>
					<b className="text-3xl mt-1">30</b>
					<span className="mt-3 text-emerald-600 w-fit flex items-center text-xs font-bold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
						+2 mới
					</span>
				</span>
			</div>
		</div>
	);
};

export default DashboardOverview;
