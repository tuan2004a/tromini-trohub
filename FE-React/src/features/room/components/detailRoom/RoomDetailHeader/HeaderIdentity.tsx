import { StatusBadge } from "@common/card/Index";

const HeaderIdentity = () => {
	return (
		<div>
			<span className="text-3xl font-bold text-slate-900 tracking-tight gap-x-3 flex items-center">
				Chi tiết phòng P101
				<StatusBadge className="bg-[#137fec]/15 text-[#137fec] border-[#137fec]/50" classCircle="bg-[#137fec]!">
					Đang thuê
				</StatusBadge>
			</span>
			<p className="text-slate-500 dark:text-slate-400">Tầng 1 - Căn hộ Trohub</p>
		</div>
	);
};

export default HeaderIdentity;
