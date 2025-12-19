import { useMemo } from "react";

export const DOTS = "...";

const range = (start: number, end: number) => {
	let length = end - start + 1;
	return Array.from({ length }, (_, idx) => idx + start);
};

interface UsePaginationProps {
	totalCount: number;
	pageSize: number;
	siblingCount?: number; // Số lượng trang hiển thị bên cạnh trang hiện tại
	currentPage: number;
}

export const usePagination = ({ totalCount, pageSize, siblingCount = 1, currentPage }: UsePaginationProps) => {
	const paginationRange = useMemo(() => {
		const totalPageCount = Math.ceil(totalCount / pageSize);

		// Tổng số item hiển thị trên thanh pagination:
		// siblingCount + firstPage + lastPage + currentPage + 2 * DOTS
		const totalPageNumbers = siblingCount + 5;

		// Case 1: Nếu số trang ít hơn số blocks muốn hiển thị -> Show hết
		if (totalPageCount <= totalPageNumbers) {
			return range(1, totalPageCount);
		}

		// Tính toán index của sibling bên trái và phải
		const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
		const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);

		// Kiểm tra xem có cần hiện dấu ... không
		const shouldShowLeftDots = leftSiblingIndex > 2;
		const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

		const firstPageIndex = 1;
		const lastPageIndex = totalPageCount;

		// Case 2: Chỉ hiện ... bên phải
		if (!shouldShowLeftDots && shouldShowRightDots) {
			let leftItemCount = 3 + 2 * siblingCount;
			let leftRange = range(1, leftItemCount);
			return [...leftRange, DOTS, totalPageCount];
		}

		// Case 3: Chỉ hiện ... bên trái
		if (shouldShowLeftDots && !shouldShowRightDots) {
			let rightItemCount = 3 + 2 * siblingCount;
			let rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
			return [firstPageIndex, DOTS, ...rightRange];
		}

		// Case 4: Hiện ... ở cả hai bên
		if (shouldShowLeftDots && shouldShowRightDots) {
			let middleRange = range(leftSiblingIndex, rightSiblingIndex);
			return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
		}

		return [];
	}, [totalCount, pageSize, siblingCount, currentPage]);

	return paginationRange;
};
