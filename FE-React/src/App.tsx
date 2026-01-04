import "./index.css";
import "@radix-ui/themes/styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
const Dashboards = lazy(() => import("@page/Dashboard"));
const Rooms = lazy(() => import("@page/Room"));
const RoomDetail = lazy(() => import("@page/RoomDetail"));
const Service = lazy(() => import("@page/CustomerService"));
const User = lazy(() => import("@page/User"));
const Bill = lazy(() => import("@page/Bill"));
const CreateBill = lazy(() => import("@/pages/BillCreate"));
const DetailBill = lazy(() => import("@/pages/BillDetail"));
const NotFoundPage = lazy(() => import("@page/NotFoundPage"));
import { Loading } from "@common/card/Index";
import ErrorBoundary from "./error/ErrorBoundary";

function App() {
	const fallback = <Loading />;

	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						<ErrorBoundary>
							<Suspense fallback={fallback}>
								<Dashboards />
							</Suspense>
						</ErrorBoundary>
					}
				/>

				{/* Dashboard - trang tổng quan */}
				<Route
					path="/thong-ke"
					element={
						<ErrorBoundary>
							<Suspense fallback={fallback}>
								<Dashboards />
							</Suspense>
						</ErrorBoundary>
					}
				/>

				{/* Room - quản lý phòng */}
				<Route
					path="/quan-ly-phong"
					element={
						<ErrorBoundary>
							<Suspense fallback={fallback}>
								<Rooms />
							</Suspense>
						</ErrorBoundary>
					}
				/>
				<Route
					path="/quan-ly-phong/chi-tiet-phong"
					element={
						<ErrorBoundary>
							<Suspense fallback={fallback}>
								<RoomDetail />
							</Suspense>
						</ErrorBoundary>
					}
				/>

				{/* Customer Service - quản lý dịch vụ */}
				<Route
					path="/quan-ly-dich-vu"
					element={
						<ErrorBoundary>
							<Suspense fallback={fallback}>
								<Service />
							</Suspense>
						</ErrorBoundary>
					}
				/>

				{/* User - quản lý người dùng */}
				<Route
					path="/quan-ly-nguoi-dung"
					element={
						<ErrorBoundary>
							<Suspense fallback={fallback}>
								<User />
							</Suspense>
						</ErrorBoundary>
					}
				/>

				{/* Bill - quản lý hóa đơn */}
				<Route
					path="/quan-ly-hoa-don"
					element={
						<ErrorBoundary>
							<Suspense fallback={fallback}>
								<Bill />
							</Suspense>
						</ErrorBoundary>
					}
				/>
				<Route
					path="/quan-ly-hoa-don/tao-hoa-don"
					element={
						<ErrorBoundary>
							<Suspense fallback={fallback}>
								<CreateBill />
							</Suspense>
						</ErrorBoundary>
					}
				/>
				<Route
					path="/quan-ly-hoa-don/chi-tiet-hoa-don"
					element={
						<ErrorBoundary>
							<Suspense fallback={fallback}>
								<DetailBill />
							</Suspense>
						</ErrorBoundary>
					}
				/>

				{/* 404 Not Found */}
				<Route
					path="*"
					element={
						<Suspense fallback={fallback}>
							<NotFoundPage />
						</Suspense>
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;
