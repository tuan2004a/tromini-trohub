import { CiBank } from "react-icons/ci";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const TransactionEmptyState = () => {
	return (
		<>
			{/* <div className="size-full flex-center flex-col">
				<IoReceiptOutline className="text-3xl text-slate-400 flex items-center justify-center mb-3" />
				<p className="text-sm font-medium text-slate-700">Chưa có giao dịch nào</p>
				<p className="text-xs text-slate-400 mt-1 max-w-[250px] text-center">Các khoản thanh toán sẽ xuất hiện ở đây sau khi được ghi nhận.</p>
			</div> */}
			<div className="size-full max-h-[210px] overflow-y-auto">
				<ul className="*:not-last:border-b *:border-slate-200! space-y-3">
					<li className="pb-3">
						<span className="font-semibold mt-2 mb-0.5 gap-x-1 flex items-center w-full">
							<CiBank className="text-2xl text-[#137fec]" />
							Chuyển khoản
						</span>
						<div className="flex items-start justify-between">
							<div className="flex flex-col">
								<span className="">
									Bởi: <b className="uppercase font-semibold">Nguyễn Văn A</b>
								</span>
								<time dateTime="03/01/2026 - 18:56" className="text-sm text-slate-400">
									03/01/2026 - 18:56
								</time>
							</div>
							<div className="font-semibold flex flex-col items-end text-green-500 underline ">
								3,000,000 đ{" "}
								<span className="flex items-center gap-x-0.5 font-medium text-sm">
									<IoMdCheckmarkCircleOutline className="text-base" />
									thành công
								</span>
							</div>
						</div>
					</li>
					<li className="pb-3">
						<span className="font-semibold mt-2 mb-0.5 gap-x-1 flex items-center w-full">
							<CiBank className="text-2xl text-[#137fec]" />
							Chuyển khoản
						</span>
						<div className="flex items-start justify-between">
							<div className="flex flex-col">
								<span className="">
									Bởi: <b className="uppercase font-semibold">Nguyễn Văn A</b>
								</span>
								<time dateTime="03/01/2026 - 18:56" className="text-sm text-slate-400">
									03/01/2026 - 18:56
								</time>
							</div>
							<div className="font-semibold flex flex-col items-end text-green-500 underline ">
								3,000,000 đ{" "}
								<span className="flex items-center gap-x-0.5 font-medium text-sm">
									<IoMdCheckmarkCircleOutline className="text-base" />
									thành công
								</span>
							</div>
						</div>
					</li>
					<li className="pb-3">
						<span className="font-semibold mt-2 mb-0.5 gap-x-1 flex items-center w-full">
							<CiBank className="text-2xl text-[#137fec]" />
							Chuyển khoản
						</span>
						<div className="flex items-start justify-between">
							<div className="flex flex-col">
								<span className="">
									Bởi: <b className="uppercase font-semibold">Nguyễn Văn A</b>
								</span>
								<time dateTime="03/01/2026 - 18:56" className="text-sm text-slate-400">
									03/01/2026 - 18:56
								</time>
							</div>
							<div className="font-semibold flex flex-col items-end text-green-500 underline ">
								3,000,000 đ{" "}
								<span className="flex items-center gap-x-0.5 font-medium text-sm">
									<IoMdCheckmarkCircleOutline className="text-base" />
									thành công
								</span>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</>
	);
};

export default TransactionEmptyState;
