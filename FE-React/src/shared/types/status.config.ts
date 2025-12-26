export const STATUS_CUSTOMER_SERVICE = {
	active: {
		label: "Hoạt động",
		className: "bg-green-100/80 text-green-600",
		checked: "checked:bg-green-100/70 checked:text-green-600",
	},
	inactive: {
		label: "Tạm ngưng",
		className: "bg-slate-200/75 text-slate-700",
		checked: "checked:bg-slate-200/75 checked:text-slate-700!",
	},
} as const;

export const STATUS_ROOMS = {
	rented: {
		label: "Đang thuê",
		className: "bg-[#137fec]/10 text-[#137fec]",
		checked: "checked:bg-[#137fec]/10 checked:text-[#137fec]",
	},
	available: {
		label: "Đang trống",
		className: "bg-green-100/80 text-green-600",
		checked: "checked:bg-green-100/70 checked:text-green-600!",
	},
	maintenace: {
		label: "Bảo trì",
		className: "bg-yellow-50 text-yellow-700",
		checked: "checked:bg-yellow-100 checked:text-yellow-700",
	},
} as const;

export type StatusKeyService = keyof typeof STATUS_CUSTOMER_SERVICE;
export type StatusKeyRoom = keyof typeof STATUS_ROOMS;
