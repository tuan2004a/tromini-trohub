import { usePagination, DOTS } from "@/hooks/usePagination";
import classnames from "classnames"; // Optional: Lib nhỏ giúp merge class đẹp hơn

interface PaginationProps {
	onPageChange: (page: number) => void;
	totalCount: number;
	siblingCount?: number;
	currentPage: number;
	pageSize: number;
	className?: string;
}

const Pagination = (props: PaginationProps) => {
	const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize, className } = props;

	const paginationRange = usePagination({
		currentPage,
		totalCount,
		siblingCount,
		pageSize,
	});

	// Nếu chưa đến 2 trang thì không cần hiển thị
	if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
		return null;
	}

	const onNext = () => {
		onPageChange(currentPage + 1);
	};

	const onPrevious = () => {
		onPageChange(currentPage - 1);
	};

	let lastPage = paginationRange ? paginationRange[paginationRange.length - 1] : 0;

	return (
		<nav aria-label="Pagination Navigation" className={classnames("flex list-none justify-center mt-4", className)}>
			{/* Nút Previous */}
			<button disabled={currentPage === 1} onClick={onPrevious} className="px-3 py-1 mx-1 border rounded disabled:opacity-50 hover:bg-gray-100">
				&lt; Prev
			</button>

			{/* Render các trang */}
			{paginationRange?.map((pageNumber, index) => {
				// Render dấu ...
				if (pageNumber === DOTS) {
					return (
						<li key={`dots-${index}`} className="px-3 py-1 mx-1">
							...
						</li>
					);
				}

				// Render số trang
				return (
					<button
						key={pageNumber}
						className={classnames("px-3 py-1 mx-1 border rounded", {
							"bg-blue-500 text-white": pageNumber === currentPage,
							"hover:bg-gray-100": pageNumber !== currentPage,
						})}
						onClick={() => onPageChange(Number(pageNumber))}
						aria-current={pageNumber === currentPage ? "page" : undefined}
					>
						{pageNumber}
					</button>
				);
			})}

			{/* Nút Next */}
			<button disabled={currentPage === lastPage} onClick={onNext} className="px-3 py-1 mx-1 border rounded disabled:opacity-50 hover:bg-gray-100">
				Next &gt;
			</button>
		</nav>
	);
};

export default Pagination;
