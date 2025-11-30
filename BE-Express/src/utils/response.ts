export const sendSuccess = (res: any, data: any, message = "Success") => {
	res.status(200).json({
		success: true,
		message,
		data,
	});
};

export const sendError = (res: any, message = "Something went wrong", code = 500) => {
	res.status(code).json({
		success: false,
		message,
	});
};
