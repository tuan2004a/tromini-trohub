export interface LoginRequest {
	phone: string;
	password: string;
}
export interface RegisterRequest {
	phone: string;
	password: string;
	displayName: string;
}

export interface TokenPair {
	accessToken: string;
	refreshToken: string;
}

export interface RefreshTokenRequest {
	refreshToken: string;
	sessionId: string;
}

export interface RefreshTokenResponse {
	accessToken: string;
	refreshToken: string;
	sessionId: string;
	accessTokenExpiresAt: Date;
	refreshTokenExpiresAt: Date;
}

export interface AuthResponse {
	user: {
		id: string;
		email: string;
		name: string;
		avatar?: string;
		isVerified: boolean;
		role: string;
	};
	refreshToken: string;
	sessionId: string;
}