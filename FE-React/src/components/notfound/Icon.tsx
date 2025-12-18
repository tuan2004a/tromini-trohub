const Icon = () => {
	return (
		<div className="relative w-full max-w-[400px] aspect-4/3 flex items-center justify-center">
			<div className="absolute inset-0 bg-[#137fec]/5 rounded-full blur-3xl transform scale-75"></div>
			<div className="relative z-10 w-64 h-64 bg-slate-50  rounded-full flex items-center justify-center border-4 border-slate-200 shadow-sm">
				{/* <span className="material-symbols-outlined text-9xl text-slate-300">search_off</span> */}
				<svg xmlns="http://www.w3.org/2000/svg" height="128px" viewBox="0 -960 960 960" width="128px" fill="#cad5e2">
					<path d="M280-80q-83 0-141.5-58.5T80-280q0-83 58.5-141.5T280-480q83 0 141.5 58.5T480-280q0 83-58.5 141.5T280-80Zm544-40L568-376q-12-13-25.5-26.5T516-428q38-24 61-64t23-88q0-75-52.5-127.5T420-760q-75 0-127.5 52.5T240-580q0 6 .5 11.5T242-557q-18 2-39.5 8T164-535q-2-11-3-22t-1-23q0-109 75.5-184.5T420-840q109 0 184.5 75.5T680-580q0 43-13.5 81.5T629-428l251 252-56 56Zm-615-61 71-71 70 71 29-28-71-71 71-71-28-28-71 71-71-71-28 28 71 71-71 71 28 28Z" />
				</svg>
			</div>
			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-24 bg-white shadow-xl border border-slate-100 px-6 py-2 rounded-full z-20">
				<span className="text-3xl font-extrabold text-[#137fec] tracking-widest">404</span>
			</div>
		</div>
	);
};

export default Icon;
