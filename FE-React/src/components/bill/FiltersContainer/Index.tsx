import AdvancedFilterPanel from "./AdvancedFilterPanel";
import ActionsToolBar from "./ActionsToolBar";
import { memo } from "react";

const FiltersContainer = memo(() => {
	return (
		<div>
			<ActionsToolBar />
			<AdvancedFilterPanel />
		</div>
	);
});

export default FiltersContainer;
