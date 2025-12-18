import { MdReceiptLong } from "react-icons/md";

const ImportantNotice = () => {
	return (
		<div className="w-full rounded-xl bg-white ">
			<div className="w-full flex justify-between p-5 text-slate-900 text-base font-bold">
				Thông báo quan trọng
				<button
					type="submit"
					className="text-[#137fec] text-xs font-bold hover:underline cursor-pointer"
				>
					Xem tất cả
				</button>
			</div>
			<div className="p-5 border-t border-slate-200 space-y-6">
				<div className="flex gap-x-5">
					<div className="size-12 bg-sky-100 rounded-full flex items-center justify-center border border-[#137fec]/30">
						<MdReceiptLong className="text-2xl text-[#137fec]" />
					</div>
					<span className="text-slate-900 text-sm font-semibold">
						Hóa đơn thanh toán
						<p className="text-slate-500">
							3 phòng chưa thanh toán hóa đơn tháng 10
						</p>
						<p className="text-xs text-slate-400 mt-1">
							2 giờ trước
						</p>
					</span>
				</div>
				<div className="flex gap-x-5">
					<div className="size-12 bg-sky-100 rounded-full flex items-center justify-center border border-[#137fec]/30">
						<MdReceiptLong className="text-2xl text-[#137fec]" />
					</div>
					<span className="text-slate-900 text-sm font-semibold">
						Hóa đơn thanh toán
						<p className="text-slate-500">
							3 phòng chưa thanh toán hóa đơn tháng 10
						</p>
						<p className="text-xs text-slate-400 mt-1">
							2 giờ trước
						</p>
					</span>
				</div>
				<div className="flex gap-x-5">
					<div className="size-12 bg-sky-100 rounded-full flex items-center justify-center border border-[#137fec]/30">
						<MdReceiptLong className="text-2xl text-[#137fec]" />
					</div>
					<span className="text-slate-900 text-sm font-semibold">
						Hóa đơn thanh toán
						<p className="text-slate-500">
							3 phòng chưa thanh toán hóa đơn tháng 10
						</p>
						<p className="text-xs text-slate-400 mt-1">
							2 giờ trước
						</p>
					</span>
				</div>
				<div className="flex gap-x-5">
					<div className="size-12 bg-sky-100 rounded-full flex items-center justify-center border border-[#137fec]/30">
						<MdReceiptLong className="text-2xl text-[#137fec]" />
					</div>
					<span className="text-slate-900 text-sm font-semibold">
						Hóa đơn thanh toán
						<p className="text-slate-500">
							3 phòng chưa thanh toán hóa đơn tháng 10
						</p>
						<p className="text-xs text-slate-400 mt-1">
							2 giờ trước
						</p>
					</span>
				</div>
			</div>
		</div>
	);
};

export default ImportantNotice;
