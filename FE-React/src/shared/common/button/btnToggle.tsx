const BtnToggle = () => {
	return (
		<label className="inline-flex items-center cursor-pointer">
			<input type="checkbox" value="" className="sr-only peer" />
			<div className="relative w-11 h-6 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-0.5 after:start-0.5 after:bg-white after:rounded-full after:size-5 after:transition-all peer-checked:bg-[#137fec]"></div>
		</label>
	);
};

export default BtnToggle;
