import React, { Component } from "react";
import type { ErrorInfo, ReactNode } from "react";

// Fallback UI nội bộ
const ErrorFallback: React.FC<{ message?: string; onRetry?: () => void }> = ({ message = "Lỗi tải trang WEB!", onRetry }) => {
	return (
		<div className="min-h-screen bg-linear-to-br from-rose-200 via-rose-100 to-rose-50 flex items-center justify-center px-6 font-sans">
			<div className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 text-center text-rose-900">
				<div className="text-5xl mb-2">⚠️</div>
				<h2 className="text-2xl font-bold">{message}</h2>
				<p className="mt-3 text-sm text-rose-700">Trục trặc nhỏ thôi. Bạn có thể thử tải lại trang hoặc kiểm tra kết nối mạng.</p>

				{onRetry && (
					<button onClick={onRetry} className="cursor-pointer mt-6 inline-flex items-center justify-center rounded-full bg-rose-600 text-white font-semibold px-6 py-3 shadow-lg shadow-rose-600/30 transition-transform duration-150 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-rose-500/40">
						Thử lại
					</button>
				)} 
			</div>
		</div>
	);
};

interface Props {
	children: ReactNode;
	fallbackMessage?: string; // Custom message qua props
}

interface State {
	hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
	public state: State = { hasError: false };

	public static getDerivedStateFromError(_: Error): State {
		return { hasError: true };
	}

	public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error("Uncaught error:", error, errorInfo);
	}

	public render() {
		if (this.state.hasError) {
			return <ErrorFallback message={this.props.fallbackMessage} /* onRetry nếu cần */ />;
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
