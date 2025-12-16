import MasterLayOut from "@components/layout/MasterLayOut";
import DashboardOverview from "./DashboardOverview";
import RevenueOverviewChart from "./RevenueOverviewChart";

const dashboards = () => {
	return (
		<MasterLayOut>
			<div className="size-full p-8">
				<section>
					<DashboardOverview />
				</section>
				<section>
					<RevenueOverviewChart/>
				</section>
			</div>
		</MasterLayOut>
	);
};

export default dashboards;
