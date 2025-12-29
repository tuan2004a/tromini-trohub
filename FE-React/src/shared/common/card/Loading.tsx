const Loading = () => {
	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
			<div className="w-10 h-10 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
			<p className="mt-2 text-lg font-bold">Loading...</p>
		</div>
	);
};

export default Loading;
