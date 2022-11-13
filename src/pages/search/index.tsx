import { FC, useEffect } from 'react';
import { useApp } from '../App';
import { useLocation } from 'react-router-dom';

import styles from './index.module.scss';
import categoryData from '../../data/fullCategory';
import { FilterIcon } from '../../components/emojiMicrosoft';

// Import Image Assets
import img from '../../assets/Card1.png';
import { BookmarkIcon, ChevronCircleRightFilledIcon } from '../../components/icons';

interface SearchPageProps {
	activeFilter?: string;
}

const SearchPage: FC<SearchPageProps> = () => {
	const app = useApp();
	const location = useLocation();

	const renderFilter = () => {
		const locateActive = location.state.activeFilter;
		console.log(locateActive);

		return (
			<div className={styles.search__filter}>
				<button className={styles.search__filter__item}>
					<div className={styles.search__filter__item__icon}>
						<FilterIcon />
					</div>
					<div className={styles.search__filter__item__title}>Filter</div>
				</button>

				{categoryData.map(({ icon, title }, index) => (
					<button
						// prettier-ignore
						className={`${styles.search__filter__item}`}
						key={index}
					>
						<div className={styles.search__filter__item__icon}>{icon}</div>
						<div className={styles.search__filter__item__title}>{title}</div>
					</button>
				))}
			</div>
		);
	};

	useEffect(() => {
		app?.setPageTitle('Search');
		app?.navbarConfig({
			_title: undefined,
			_placeholder: `Lagi cari franchise ${location.state.activeFilter} apa nih?`,
			_back: true,
			_menu: true,
			_show: true,
			_children: renderFilter(),
		});
	}, []);

	return (
		<main className={styles.search}>
			{[1, 2, 3, 4, 5, 6].map(index => (
				<div
					className={styles.search__item}
					onClick={() => console.log('Direct to franchise page')}
					key={index}
				>
					<div
						className={styles.search__item__image}
						style={{
							backgroundImage: `url(${img})`,
						}}
					></div>
					<div className={styles.search__item__content}>
						<div className={styles.search__item__content__description}>
							<h1 className={styles.search__item__content__description__title}>
								Posarang, Korean BBQ
							</h1>

							<p className={styles.search__item__content__description__about}>
								Posarang adalah sebuah konsep bisnis terbaru dari BATI Group yang
								menyajikan makanan dari resep authentic Korea yang telah disesuaikan
								dengan cinta rasa Indonesia.
							</p>
						</div>

						<div className={styles.search__item__content__container}>
							<div className={styles.search__item__content__rating}>
								<div className={styles.search__item__content__rating__star}>
									<svg viewBox="0 0 12 12">
										<g>
											<path
												d="M5.19574 1.01174C5.30157 0.670077 5.63907 0.414244 6.00074 0.432577C6.37657 0.41341 6.71657 0.69091 6.81657 1.04674C7.14574 2.04091 7.45657 3.04174 7.79157 4.03424C8.85824 4.03341 9.9249 4.02758 10.9916 4.03591C11.4466 4.03341 11.8424 4.46424 11.8057 4.91758C11.8091 5.21508 11.6099 5.46258 11.3774 5.62591C10.5507 6.22174 9.72991 6.82674 8.90074 7.41924C9.19657 8.42258 9.54324 9.41008 9.8574 10.4076C9.95657 10.7184 9.90907 11.0917 9.65824 11.3192C9.36574 11.6159 8.85907 11.6351 8.53657 11.3751C7.69074 10.7609 6.8449 10.1467 5.9999 9.53008C5.15407 10.1467 4.3074 10.7617 3.4599 11.3767C3.13824 11.6351 2.6349 11.6151 2.34157 11.3209C2.0899 11.0917 2.04157 10.7151 2.14324 10.4026C2.4574 9.40674 2.8024 8.42091 3.09907 7.41924C2.2699 6.82758 1.4499 6.22258 0.622404 5.62674C0.389904 5.46424 0.191571 5.21758 0.194071 4.92008C0.154904 4.46508 0.553238 4.03174 1.0099 4.03591C2.07574 4.02758 3.14157 4.03341 4.2074 4.03424C4.5474 3.03008 4.85907 2.01674 5.19574 1.01174ZM5.93574 1.16008C5.54324 2.36841 5.1499 3.57508 4.7574 4.78341C3.47407 4.80591 2.18824 4.76008 0.904904 4.80674C0.970738 4.91758 1.05157 5.02008 1.15824 5.09341C2.1024 5.77674 3.0474 6.45924 3.98657 7.15008C3.61074 8.37758 3.16324 9.58508 2.8199 10.8226C3.09074 10.7734 3.28907 10.5709 3.50574 10.4209C4.33657 9.81674 5.16574 9.21091 5.9999 8.61091C6.94574 9.29341 7.88907 9.97924 8.83074 10.6684C8.93241 10.7467 9.05324 10.7926 9.1774 10.8234C8.83824 9.58424 8.38741 8.37841 8.01324 7.15008C8.8399 6.53924 9.67407 5.94008 10.5049 5.33508C10.7141 5.17508 10.9674 5.05008 11.0941 4.80674C9.81074 4.76008 8.52574 4.80508 7.24157 4.78341C6.8674 3.63841 6.49824 2.49258 6.1249 1.34841C6.11324 1.24091 6.01907 1.20174 5.93574 1.16008Z"
												fill="#383838"
											/>
											<path
												d="M5.93562 1.16016C6.01895 1.20182 6.11312 1.24099 6.12479 1.34849C6.49812 2.49266 6.86729 3.63849 7.24145 4.78349C8.52562 4.80516 9.81062 4.76016 11.094 4.80682C10.9673 5.05016 10.714 5.17516 10.5048 5.33516C9.67395 5.94016 8.83979 6.53932 8.01312 7.15016C8.38729 8.37849 8.83812 9.58432 9.17729 10.8235C9.05312 10.7927 8.93229 10.7468 8.83062 10.6685C7.88895 9.97932 6.94562 9.29349 5.99979 8.61099C5.16562 9.21099 4.33645 9.81682 3.50562 10.421C3.28895 10.571 3.09062 10.7735 2.81979 10.8227C3.16312 9.58516 3.61062 8.37766 3.98645 7.15016C3.04729 6.45932 2.10229 5.77682 1.15812 5.09349C1.05145 5.02016 0.970619 4.91766 0.904785 4.80682C2.18812 4.76016 3.47395 4.80599 4.75729 4.78349C5.14979 3.57516 5.54312 2.36849 5.93562 1.16016Z"
												fill="#FFC83D"
											/>
										</g>
									</svg>
								</div>
								<p className={styles.search__item__content__rating__text}>4.6</p>
								<p className={styles.search__item__content__rating__refer}>
									{' '}
									- Sangat Baik
								</p>
							</div>

							<div className={styles.search__item__content__action}>
								<button className={styles.search__item__content__action__button}>
									<BookmarkIcon />
								</button>

								<button className={styles.search__item__content__action__button}>
									<ChevronCircleRightFilledIcon color="#000" />
								</button>
							</div>
						</div>
					</div>
				</div>
			))}
		</main>
	);
};

export default SearchPage;
