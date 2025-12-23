import "./index.css";
import "@radix-ui/themes/styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
const Dashboards = lazy(() => import("@page/Dashboard"));
const Rooms = lazy(() => import("@page/Room"));
const Service = lazy(() => import("@page/CustomerService"));
const User = lazy(() => import("@page/User"));
const Bill = lazy(() => import("@page/Bill"));
const NotFoundPage = lazy(() => import("@page/NotFoundPage"));
import Loading from "@/components/common/card/Loading";
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
					path="/quan-ly-dich-vu"
					element={
						<ErrorBoundary>
							<Suspense fallback={fallback}>
								<Service />
							</Suspense>
						</ErrorBoundary>
					}
				/>
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
