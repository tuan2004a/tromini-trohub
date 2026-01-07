import { Input } from "@common/input/Index";

const NameTag = () => {
	return (
		<label htmlFor="" className="flex flex-col items-start gap-y-1.5 text-sm font-medium">
			Tag Name
			<Input type="text" className="font-normal" />
		</label>
	);
};

export default NameTag;
