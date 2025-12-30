import TH from "@common/table/th";

const TheadRow = () => {
	return (
		<tr className="bg-slate-100 border-b border-slate-200">
			<TH className="rounded-tl-xl">Phòng</TH>
			<TH>Tag</TH>
			<TH className="">Giá thuê</TH>
			<TH className="">Trạng thái</TH>
			<TH className="">Dịch vụ</TH>
			<TH className="rounded-tr-xl">Thao tác</TH>
		</tr>
	);
};

export default TheadRow;
