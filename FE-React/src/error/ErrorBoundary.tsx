import React, { Component } from "react";
import type { ErrorInfo, ReactNode } from "react";

// Fallback UI nội bộ
const ErrorFallback: React.FC<{ message?: string; onRetry?: () => void }> = ({ message = "Lỗi tải dữ liệu!", onRetry }) => {
	return (
		<div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", backgroundColor: "#f8d7da", color: "#721c24" }}>
			<h2>{message}</h2>
			{onRetry && (
				<button onClick={onRetry} style={{ marginTop: "10px", padding: "10px", backgroundColor: "#dc3545", color: "white", border: "none", cursor: "pointer" }}>
					Thử lại
				</button>
			)}
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
