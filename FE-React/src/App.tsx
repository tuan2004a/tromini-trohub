import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboards from "@/components/dashboards/Index";
import "@radix-ui/themes/styles.css";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Dashboards />} />
				<Route path="/thong-ke" element={<Dashboards />} />
			</Routes>
		</Router>
	);
}

export default App;
