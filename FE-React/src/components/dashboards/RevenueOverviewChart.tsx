import type { ApexOptions } from 'apexcharts';
import React from 'react';
import ReactApexChart from "react-apexcharts";

const RevenueOverviewChart: React.FC = () => {
	const series: ApexAxisChartSeries = [
		{
			name: "Doanh thu",
			data: [
				32000000,
				45000000,
				28000000,
				60000000,
				72000000,
				93000000,
				81000000,
				105000000,
			],
		},
	];

	// 🔹 Cấu hình biểu đồ
	const options: ApexOptions = {
		chart: {
			type: "bar",
			height: 350,
			toolbar: { show: false },
		},

		plotOptions: {
			bar: {
				borderRadius: 6,
				columnWidth: "45%",
				dataLabels: {
					position: "top", // số nằm trên đầu cột
				},
			},
		},

		// 🔹 Số hiển thị trên đầu cột
		dataLabels: {
			enabled: true,
			formatter: (val: number) => `${val.toLocaleString("vi-VN")} ₫`,
			offsetY: -20,
			style: {
				fontSize: "12px",
				colors: ["#1d4ed8"],
			},
		},

		// 🔹 Trục X (tháng)
		xaxis: {
			categories: ["T5", "T6", "T7", "T8", "T9", "T10", "T11", "T12"],
			axisBorder: { show: false },
			axisTicks: { show: false },
		},

		// 🔹 Trục Y (VNĐ)
		yaxis: {
			labels: {
				formatter: (val: number) => `${val.toLocaleString("vi-VN")} ₫`,
			},
		},

		tooltip: {
			y: {
				formatter: (val: number) => `${val.toLocaleString("vi-VN")} ₫`,
			},
		},

		colors: ["#3b82f6"],
	};

	return (
		<div className="bg-white p-5 rounded-xl mt-5">
			<span className="flex justify-between mb-5">
				<div>
					<span className="text-lg font-bold">Biểu đồ doanh thu</span>
					<p className="text-sm text-slate-500">6 tháng gần đây</p>
				</div>

				<p className="text-xl font-bold text-[#137fec]">
					<strong className="text-xs text-slate-500 font-medium mr-1">
						(tháng 10)
					</strong>
					270.000.000 đ
				</p>
			</span>

			<ReactApexChart
				options={options}
				series={series}
				type="bar"
				height={350}
			/>
		</div>
	);
};

export default RevenueOverviewChart
