import { FC, useEffect, useState } from 'react';
import { useApp } from '../App';
import { useLocation, useNavigate } from 'react-router-dom';

import styles from './index.module.scss';
import categoryData from '../../data/fullCategory';
import FranchiseData from '../../data/fullFranchise';
import { BookmarkIcon, FilterIcon, StarEmoji } from '../../components/emojiMicrosoft';
import { ChevronCircleRightFilledIcon } from '../../components/icons';

interface SearchPageProps {
	activeFilter?: string;
}

const SearchPage: FC<SearchPageProps> = () => {
	const app = useApp();
	const location = useLocation();
	const navigate = useNavigate();

	const [activeFilter, setActiveFilter] = useState<string[]>([]);
	const [searchResults, setSearchResults] = useState(FranchiseData);

	useEffect(() => {
		app?.setPageTitle('Search');
		app?.navbarConfig({
			_title: undefined,
			_back: true,
			_menu: true,
			_show: true,
		});

		activeFilter.push(location.state?.propsFilter);
		searchResults.filter(franchise => franchise.type.includes(location.state?.propsFilter));
	}, []);

	useEffect(() => {
		if (activeFilter.length === 0) {
			setSearchResults(FranchiseData);
		} else {
			const filteredResults = FranchiseData.filter(franchise => {
				if (activeFilter.includes(franchise.type)) return franchise;
			});
			setSearchResults(filteredResults);
		}
	}, [activeFilter]);

	return (
		<>
			<div className={styles.search__filter}>
				<button
					className={`${styles.search__filter__item} ${styles['search__filter__item--main']}`}
				>
					<div className={styles.search__filter__item__icon}>
						<FilterIcon />
					</div>
					<div className={styles.search__filter__item__title}>Filter</div>
				</button>

				{categoryData.map(({ icon, title }, index) => (
					<button
						key={index}
						className={`${styles.search__filter__item} ${
							activeFilter.includes(title)
								? styles['search__filter__item--active']
								: ''
						}`}
						onClick={e => {
							const target = e.target as HTMLButtonElement;

							if (target.classList.contains(styles['search__filter__item--active'])) {
								target.classList.remove(styles['search__filter__item--active']);

								setActiveFilter(activeFilter.filter(item => item !== title));
							} else {
								target.classList.add(styles['search__filter__item--active']);

								setActiveFilter([...activeFilter, title]);
							}
						}}
					>
						<div className={styles.search__filter__item__icon}>{icon}</div>
						<div className={styles.search__filter__item__title}>{title}</div>
					</button>
				))}
			</div>

			<main className={styles.search}>
				{searchResults.map(({ image, title, description, rating }, index) => {
					return (
						<div
							className={styles.search__item}
							onClick={() => {
								navigate(`/${title}`);
							}}
							key={index}
						>
							<div
								className={styles.search__item__image}
								style={{
									backgroundImage: `url(${image})`,
								}}
							></div>

							<div className={styles.search__item__content}>
								<div className={styles.search__item__content__description}>
									<h1
										className={styles.search__item__content__description__title}
									>
										{title}
									</h1>

									<p className={styles.search__item__content__description__about}>
										{description}
									</p>
								</div>

								<div className={styles.search__item__content__container}>
									<div className={styles.search__item__content__rating}>
										<div className={styles.search__item__content__rating__star}>
											<StarEmoji />
										</div>
										<p className={styles.search__item__content__rating__text}>
											{rating}
										</p>
										<p className={styles.search__item__content__rating__refer}>
											- {rating > 4.5 || rating < 3.5 ? 'Sangat ' : null}
											{rating >= 4
												? 'Baik'
												: rating <= 3.5
												? 'Buruk'
												: 'Baik'}
										</p>
									</div>

									<div className={styles.search__item__content__action}>
										<button
											className={styles.search__item__content__action__button}
											onClick={e => {
												e.stopPropagation();
												console.log('Item Saved');
											}}
										>
											<BookmarkIcon />
										</button>

										<button
											className={styles.search__item__content__action__button}
											onClick={e => {
												e.stopPropagation();
												console.log('Go to Detail');
											}}
										>
											<ChevronCircleRightFilledIcon color="#000" />
										</button>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</main>
		</>
	);
};

export default SearchPage;
