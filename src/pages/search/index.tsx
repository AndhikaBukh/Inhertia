import { FC, useEffect } from 'react';
import { useApp } from '../App';
import { useLocation } from 'react-router-dom';

import styles from './index.module.scss';
import categoriesData from '../../data/listofCategory';

interface SearchPageProps {
	activeFilter?: string;
}

const renderFilter = () => {
	return (
		<div className={styles.search__filter}>
			{/* <div className={styles.search__filter__item}>
				<div className={styles.search__filter__item__icon}></div>
				<div className={styles.search__filter__item__title}></div>
			</div> */}

			{categoriesData.map(({ icon, name }, index) => (
				<div className={styles.search__filter__item} key={index}>
					<div className={styles.search__filter__item__icon}>{icon}</div>
					<div className={styles.search__filter__item__title}>
						{name.charAt(0).toUpperCase() + name.slice(1)}
					</div>
				</div>
			))}
		</div>
	);
};

const SearchPage: FC<SearchPageProps> = () => {
	const app = useApp();
	const location = useLocation();

	useEffect(() => {
		app?.setPageTitle('Search');
		app?.navbarConfig({
			_title: undefined,
			_back: true,
			_menu: true,
			_show: true,
			_children: renderFilter(),
		});

		console.log(location.state);
	}, []);

	return <main className={styles.search}></main>;
};

export default SearchPage;
