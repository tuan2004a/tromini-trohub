import MasterLayOut from "@layout/MasterLayOut";
import DashboardOverview from "@components/dashboards/DashboardOverview";
import RevenueOverviewChart from "@components/dashboards/RevenueOverviewChart";
import PaymentStatusDonut from "@components/dashboards/PaymentStatusDonut";
import ImportantNotice from "@components/dashboards/ImportantNotice";
import RecentTransactions from "@components/dashboards/RecentTransactions";

const dashboards = () => {
	return (
		<MasterLayOut>
			<div className="size-full p-8">
				<section>
					<DashboardOverview />
				</section>
				<section className="flex justify-between w-full mt-5 gap-5">
					<div className="flex-3 min-w-0">
						<RevenueOverviewChart />
					</div>
					<div className="flex-1 min-w-0">
						<PaymentStatusDonut />
					</div>
				</section>
				<section className="flex justify-between w-full mt-5 gap-5">
					<div className="flex-1">
						<ImportantNotice />
					</div>
					<div className="flex-1">
						<RecentTransactions />
					</div>
				</section>
			</div>
		</MasterLayOut>
	);
};

export default dashboards;
