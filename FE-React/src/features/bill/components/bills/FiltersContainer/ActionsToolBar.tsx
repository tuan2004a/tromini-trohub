import Search from "@common/input/search";
import BtnAddNew from "@common/button/btnAddNew";
import { useNavigate } from "react-router-dom";

const ActionsToolBar = () => {
	const navigate = useNavigate();

	return (
		<div className="flex w-full justify-between">
			<div>
				<Search placeholder="Tìm theo mã HĐ, tên khách, sốn phòng..." />
			</div>
			<div>
				<BtnAddNew onClick={() => navigate("/quan-ly-hoa-don/tao-hoa-don")}>Thêm mới hóa đơn</BtnAddNew>
			</div>
		</div>
	);
};

export default ActionsToolBar;
