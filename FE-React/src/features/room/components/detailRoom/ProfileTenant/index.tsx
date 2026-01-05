import TenantMeta from "./TenantMeta";
import TenantSummary from "./TenantSummary";

const ProfileTentant = () => {
	return (
		<div>
			<span className="text-lg font-semibold text-slate-900 flex items-center">Người thuê đại diện</span>
			<TenantSummary />
			<TenantMeta />
			<button className="w-full py-2 px-4 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 cursor-pointer mt-4">
				Xem chi tiết hồ sơ
			</button>
		</div>
	);
};

export default ProfileTentant;
