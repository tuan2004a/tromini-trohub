import Search from "@common/input/search"
import BtnAddNew from "@common/button/btnAddNew"

const ActionsToolBar = () => {
    return (
        <div className="flex w-full justify-between">
            <div>
                <Search placeholder="Tìm theo mã HĐ, tên khách, sốn phòng..."/>
            </div>
            <div>
                <BtnAddNew>
                    Thêm mới hóa đơn
                </BtnAddNew>
            </div>
        </div>
    )
}

export default ActionsToolBar
