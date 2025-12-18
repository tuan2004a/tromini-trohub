import "./index.css";
import "@radix-ui/themes/styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboards from "@/components/dashboards/Index";
import Rooms from "./components/rooms/Index";
import NotFoundPage from "@/pages/NotFoundPage";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Dashboards />} />
				<Route path="/thong-ke" element={<Dashboards />} />
				<Route path="/quan-ly-phong" element={<Rooms />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</Router>
	);
}

export default App;
