import { OptionFilter, Select } from "@common/input/Index";

const TemplateSelector = () => {
	return (
		<div className="w-full">
			<label htmlFor="NotifiBillTemplate" className="block text-slate-900 text-sm font-medium mb-2">
				Chọn mẫu thông báo
			</label>
			<Select id="NotifiBillTemplate" className="w-full outline-none border-slate-200 font-normal!">
				<OptionFilter value="1">Thông báo hóa đơn mới</OptionFilter>
				<OptionFilter value="2">Thông báo hóa đơn mới</OptionFilter>
				<OptionFilter value="3">Thông báo hóa đơn mới</OptionFilter>
				<OptionFilter value="4">Thông báo hóa đơn mới</OptionFilter>
			</Select>
		</div>
	);
};

export default TemplateSelector;
