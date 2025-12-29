import React, { useEffect, useRef, useCallback, type ReactNode } from "react";
import { gsap } from "gsap";

// Props interface
interface LoaderProps {
	type?: "spinner" | "bounce" | "pulse" | "dual-ring" | "page";
	size?: "sm" | "md" | "lg" | "xl";
	text?: string;
	progress?: number;
	children?: ReactNode;
	className?: string;
}

export function Loader({ type = "page", size = "md", text = "Đang tải...", progress = 0, children, className = "" }: LoaderProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const spinnerRef = useRef<HTMLDivElement>(null);
	const progressRef = useRef<HTMLDivElement>(null);
	const textRef = useRef<HTMLDivElement>(null);
	const bounceRefs = useRef<(HTMLDivElement | null)[]>([]);

	// ✅ FIXED: Correct ref types
	const spinnerRefCallback = useCallback((node: HTMLDivElement | null) => {
		spinnerRef.current = node;
	}, []);

	const progressRefCallback = useCallback((node: HTMLDivElement | null) => {
		progressRef.current = node;
	}, []);

	const textRefCallback = useCallback((node: HTMLDivElement | null) => {
		textRef.current = node;
	}, []);

	// Size config
	const sizes = {
		sm: "w-6 h-6 border-2",
		md: "w-10 h-10 border-2",
		lg: "w-16 h-16 border-4",
		xl: "w-24 h-24 border-6",
	} as const;

	const sizeClass = sizes[size] || sizes.md;

	useEffect(() => {
		if (!containerRef.current) return;

		// GSAP Context để clean up dễ dàng
		const ctx = gsap.context(() => {
			// Container entrance animation
			gsap.fromTo(
				containerRef.current!,
				{ scale: 0.8, opacity: 0, y: 30 },
				{
					scale: 1,
					opacity: 1,
					y: 0,
					duration: 0.6,
					ease: "back.out(1.7)",
				}
			);

			// Type-specific animations
			switch (type) {
				case "spinner":
					animateSpinner();
					break;
				case "bounce":
					animateBounce();
					break;
				case "pulse":
					animatePulse();
					break;
				case "dual-ring":
					animateDualRing();
					break;
				case "page":
					animatePageLoader();
					break;
			}

			// Progress animation
			if (progressRef.current && progress > 0) {
				gsap.to(progressRef.current, {
					scaleX: progress / 100,
					duration: 0.8,
					ease: "power3.out",
					transformOrigin: "left center",
				});
			}

			// Text stagger animation
			if (textRef.current?.children?.length) {
				gsap.fromTo(
					Array.from(textRef.current.children),
					{ y: 20, opacity: 0 },
					{
						y: 0,
						opacity: 1,
						duration: 0.5,
						stagger: 0.1,
						ease: "power2.out",
					}
				);
			}
		});

		return () => ctx.revert();
	}, [type, progress]);

	const animateSpinner = () => {
		if (spinnerRef.current) {
			gsap.to(spinnerRef.current, {
				rotation: 360,
				duration: 1.2,
				repeat: -1,
				ease: "none",
			});
		}
	};

	const animateBounce = () => {
		bounceRefs.current.forEach((dot, index) => {
			if (dot) {
				gsap.to(dot, {
					y: -15,
					duration: 0.6,
					repeat: -1,
					delay: index * 0.1,
					ease: "power2.inOut",
				});
			}
		});
	};

	const animatePulse = () => {
		if (spinnerRef.current) {
			gsap.to(spinnerRef.current, {
				scale: 1.3,
				opacity: 0.7,
				duration: 1.5,
				repeat: -1,
				yoyo: true,
				ease: "power2.inOut",
			});
		}
	};

	const animateDualRing = () => {
		if (spinnerRef.current) {
			gsap.to(spinnerRef.current, {
				rotation: 360,
				duration: 1.5,
				repeat: -1,
				ease: "none",
			});
		}
	};

	const animatePageLoader = () => {
		// Multi-ring rotation
		gsap.to(".ring-1", {
			rotation: 360,
			duration: 2,
			repeat: -1,
			ease: "none",
		});
		gsap.to(".ring-2", {
			rotation: -360,
			duration: 2.5,
			repeat: -1,
			ease: "none",
		});
	};

	const renderLoader = () => {
		switch (type) {
			case "page":
				return <PageLoader sizeClass={sizeClass} text={text} progress={progress} spinnerRef={spinnerRefCallback} progressRef={progressRefCallback} textRef={textRefCallback} />;
			case "spinner":
				return <SpinnerLoader sizeClass={sizeClass} spinnerRef={spinnerRefCallback} text={text} textRef={textRefCallback} />;
			case "bounce":
				return <BounceLoader bounceRefs={bounceRefs} text={text} textRef={textRefCallback} />;
			case "pulse":
				return <PulseLoader sizeClass={sizeClass} spinnerRef={spinnerRefCallback} text={text} textRef={textRefCallback} />;
			case "dual-ring":
				return <DualRingLoader sizeClass={sizeClass} spinnerRef={spinnerRefCallback} text={text} textRef={textRefCallback} />;
			default:
				return null;
		}
	};

	return (
		<div ref={containerRef} className={`flex flex-col items-center justify-center min-h-[400px] bg-linear-to-br from-white to-blue-50/50 ${className}`}>
			{renderLoader()}
			{children}
		</div>
	);
}

// ✅ FIXED: Updated interfaces với Callback refs
interface LoaderSubProps {
	sizeClass: string;
	text: string;
	progress?: number;
	spinnerRef: (node: HTMLDivElement | null) => void;
	progressRef?: (node: HTMLDivElement | null) => void;
	textRef: (node: HTMLDivElement | null) => void;
}

function PageLoader({ text, progress, spinnerRef, progressRef, textRef }: LoaderSubProps) {
	return (
		<>
			<div className="relative mb-8">
				<div className="ring-1 absolute inset-0 w-24 h-24 rounded-full border-4 border-blue-100/50"></div>
				<div ref={spinnerRef} className="ring-2 absolute inset-4 w-16 h-16 rounded-full border-4 border-transparent border-t-blue-600"></div>
				<div className="absolute inset-8 w-8 h-8 bg-linear-to-r from-blue-500 to-indigo-600 rounded-full shadow-lg animate-ping"></div>
			</div>

			{progress && progressRef && (
				<div className="w-80 h-2 bg-gray-200/50 rounded-full overflow-hidden mb-8">
					<div ref={progressRef} className="h-full bg-linear-to-r from-blue-500 via-indigo-500 to-purple-600" style={{ transformOrigin: "left center" }} />
				</div>
			)}

			<div ref={textRef} className="text-center">
				<h2 className="text-2xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">{text}</h2>
				<p className="text-sm text-gray-500">Vui lòng chờ trong giây lát...</p>
			</div>
		</>
	);
}

interface SimpleLoaderProps {
	sizeClass: string;
	spinnerRef: (node: HTMLDivElement | null) => void;
	text: string;
	textRef: (node: HTMLDivElement | null) => void;
}

function SpinnerLoader({ sizeClass, spinnerRef, text, textRef }: SimpleLoaderProps) {
	return (
		<>
			<div ref={spinnerRef} className={`${sizeClass} rounded-full border-gray-200 border-t-blue-600 mx-auto mb-4`}></div>
			<div ref={textRef} className="text-center">
				<p className="text-gray-600 font-medium">{text}</p>
			</div>
		</>
	);
}

interface BounceLoaderProps {
	bounceRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
	text: string;
	textRef: (node: HTMLDivElement | null) => void;
}

function BounceLoader({ bounceRefs, text, textRef }: BounceLoaderProps) {
	return (
		<>
			<div className="flex gap-2 mb-6">
				{Array.from({ length: 3 }).map((_, i) => (
					<div
						key={i}
						ref={(el) => {
							bounceRefs.current[i] = el;
						}}
						className="w-5 h-5 bg-linear-to-r from-blue-500 to-indigo-600 rounded-full"
					/>
				))}
			</div>
			<div ref={textRef} className="text-center">
				<p className="text-gray-600 font-medium">{text}</p>
			</div>
		</>
	);
}

function PulseLoader({ sizeClass, spinnerRef, text, textRef }: SimpleLoaderProps) {
	return (
		<>
			<div ref={spinnerRef} className={`${sizeClass} mx-auto mb-4 bg-blue-600 rounded-full`}></div>
			<div ref={textRef} className="text-center">
				<p className="text-gray-600 font-medium">{text}</p>
			</div>
		</>
	);
}

function DualRingLoader({ sizeClass, spinnerRef, text, textRef }: SimpleLoaderProps) {
	return (
		<>
			<div ref={spinnerRef} className="relative mx-auto mb-6">
				<div className={`${sizeClass} rounded-full border-t-blue-600 border-l-blue-600 border-r-blue-200 border-b-blue-200`}></div>
				<div className={`absolute top-1 left-1 right-1 bottom-1 ${sizeClass} rounded-full border-t-blue-400 border-l-blue-400 opacity-30`}></div>
			</div>
			<div ref={textRef} className="text-center">
				<p className="text-gray-600 font-medium">{text}</p>
			</div>
		</>
	);
}

export type { LoaderProps };
