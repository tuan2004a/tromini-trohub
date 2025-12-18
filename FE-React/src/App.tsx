import "./index.css";
import "@radix-ui/themes/styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboards from "@/components/dashboards/Index";
import Rooms from "./components/rooms/Index";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Dashboards />} />
				<Route path="/thong-ke" element={<Dashboards />} />
				<Route path="/quan-ly-phong" element={<Rooms />} />
			</Routes>
		</Router>
	);
}

export default App;
