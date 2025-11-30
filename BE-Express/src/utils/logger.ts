// src/utils/logger.ts
export const logInfo = (tag: string, message: string) => {
	console.log(`[${new Date().toISOString()}] [INFO] [${tag}] ${message}`);
};

export const logWarn = (tag: string, message: string) => {
	console.warn(`[${new Date().toISOString()}] [WARN] [${tag}] ${message}`);
};

export const logError = (tag: string, error: any) => {
	console.error(`[${new Date().toISOString()}] [ERROR] [${tag}] ${error.message}`);
	if (error.stack) console.error(error.stack);
};

export const logDebug = (tag: string, message: string) => {
	if (process.env.NODE_ENV === "development") {
		console.debug(`[${new Date().toISOString()}] [DEBUG] [${tag}] ${message}`);
	}
};
