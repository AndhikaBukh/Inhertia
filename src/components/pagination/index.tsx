import { FC } from 'react';
import Styles from './index.module.scss';

interface PaginationProps {
	currentPage: number;
	totalPages: number;
}

const renderPaginationItem = (_currentPage: number, _totalPages: number) => {
	const paginationItems = [];
	for (let i = 0; i < _totalPages; i++) {
		paginationItems.push(
			<div
				className={
					_currentPage === i
						? Styles.pagination__item__active
						: Styles.pagination__item
				}
			></div>
		);
	}
	return paginationItems;
};

const pagination: FC<PaginationProps> = ({
	currentPage,
	totalPages,
	// autoplay,
	// setFunction,
}) => {
	return (
		<div className={Styles.pagination}>
			{renderPaginationItem(currentPage, totalPages)}
		</div>
	);
};

export default pagination;
