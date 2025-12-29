import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

const PaymentStatusDonut = () => {
	const totalRooms = 20;
	const paidRooms = 17;

	const percent = Math.round((paidRooms / totalRooms) * 100);

	const series: number[] = [percent];

	const options: ApexOptions = {
		chart: {
			type: "radialBar",
			height: 350,
			toolbar: { show: false },
		},
		plotOptions: {
			radialBar: {
				hollow: {
					size: "63%",
				},
				dataLabels: {
					total: {
						show: true,
						label: "Đã thanh toán",
						fontSize: "14px",
						formatter: () => `${paidRooms}/${totalRooms}`,
					},
					name: {
						fontSize: "14px",
					},
					value: {
						fontSize: "20px",
						formatter: (val) => `${val}`,
					},
				},
			},
		},
		colors: ["#137fec", "#ef4444"],
		labels: ["Đã thanh toán", "Chưa thanh toán"],
		stroke: {
			lineCap: "round",
		},
		legend: {
			show: false,
			position: "bottom",
			horizontalAlign: "center",
			fontSize: "14px",
			markers: {
				size: 6,
				shape: "circle",
			},
			itemMargin: {
				horizontal: 12,
				vertical: 8,
			},
		},
	};

	return (
		<div className="bg-white rounded-xl p-5 w-full">
			<span className="text-lg font-bold">Số phòng đã thanh toán</span>

			<ReactApexChart
				options={options}
				series={series}
				type="radialBar"
				height={350}
			/>
			<span className="flex flex-col items-center gap-3">
				<div className="flex items-center gap-x-2 text-sm text-slate-600">
					<span className="block size-3 rounded-full bg-[#137fec]"></span>
					Đã thành toán ( {paidRooms} )
				</div>
				<div className="flex items-center gap-x-2 text-sm text-slate-600">
					<span className="block size-3 rounded-full bg-slate-200"></span>
					Chưa thanh toán ( {Math.round(totalRooms - paidRooms)} )
				</div>
			</span>
		</div>
	);
};

export default PaymentStatusDonut;
