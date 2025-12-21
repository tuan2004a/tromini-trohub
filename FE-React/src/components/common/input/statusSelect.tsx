import { memo, useState, useCallback } from "react";
import { STATUS_CUSTOMER_SERVICE, type StatusKeyService } from "@/types/status.config";
import StatusOptions from "@common/input/statusOptions";

interface StatusSelectProps {
	defaultValue?: StatusKeyService;
	onStatusChange?: (status: StatusKeyService) => void;
}

const StatusSelect = memo(({ defaultValue = "active", onStatusChange }: StatusSelectProps) => {
	// Local state - chỉ component này re-render
	const [value, setValue] = useState<StatusKeyService>(defaultValue);

	const handleChange = useCallback(
		(e: React.ChangeEvent<HTMLSelectElement>) => {
			const newValue = e.target.value as StatusKeyService;
			setValue(newValue);
			onStatusChange?.(newValue);
		},
		[onStatusChange]
	);

	return (
		<select value={value} onChange={handleChange} className={`${STATUS_CUSTOMER_SERVICE[value].className} w-30 outline-none rounded-full px-3 py-1.5 text-xs font-semibold border transition-colors`}>
			{Object.entries(STATUS_CUSTOMER_SERVICE).map(([key, item]) => (
				<StatusOptions className={STATUS_CUSTOMER_SERVICE[value].checked} key={key} value={key}>
					{item.label}
				</StatusOptions>
			))}
		</select>
	);
});

StatusSelect.displayName = "StatusSelect";
export default StatusSelect;
