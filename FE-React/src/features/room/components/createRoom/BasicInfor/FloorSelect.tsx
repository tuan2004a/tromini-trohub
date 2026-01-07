import {Select, OptionFilter} from "@common/input/Index"

const FloorSelect = () => {
    return (
		<Select className="border-slate-300">
			<OptionFilter>Tầng 1</OptionFilter>
			<OptionFilter>Tầng 2</OptionFilter>
			<OptionFilter>Tầng 3</OptionFilter>
			<OptionFilter>Tầng 4</OptionFilter>
		</Select>
	);
}

export default FloorSelect
