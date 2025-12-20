import "./index.css";
import "@radix-ui/themes/styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboards from "@page/Dashboard";
import Rooms from "@page/Service";
import NotFoundPage from "@page/NotFoundPage";
import Service from "@page/Service";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Dashboards />} />
				<Route path="/thong-ke" element={<Dashboards />} />
				<Route path="/quan-ly-phong" element={<Rooms />} />
				<Route path="/quan-ly-dich-vu" element={<Service />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</Router>
	);
}

export default App;
