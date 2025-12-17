import MasterLayOut from "@components/layout/MasterLayOut";
import DashboardOverview from "./DashboardOverview";
import RevenueOverviewChart from "./RevenueOverviewChart";
import PaymentStatusDonut from "./PaymentStatusDonut";
import ImportantNotice from "./ImportantNotice";

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
					<div className="flex-1"></div>
				</section>
			</div>
		</MasterLayOut>
	);
};

export default dashboards;
