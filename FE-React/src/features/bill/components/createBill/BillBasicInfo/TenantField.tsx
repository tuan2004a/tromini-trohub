import Input from "@common/input/Input";

const TenantInput = () => {
	return (
		<div className="w-full">
			<label className="text-sm text-slate-500" htmlFor="tenantName">
				Người thuê
			</label>
			<Input type="text" id="tenantName" value="Tên người thuê" className="bg-gray-100 text-slate-500 mt-1" />
		</div>
	);
};

export default TenantInput;
