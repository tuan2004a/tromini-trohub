import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboards from "@/components/dashboards/Index";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Dashboards />} />
			</Routes>
		</Router>
	);
}

export default App;
