import { useState } from 'react';
import styles from './index.module.scss';
import image1 from '../../assets/Showcase-3.png';
import image2 from '../../assets/Showcase-2.png';
import image3 from '../../assets/Showcase-1.png';
import image4 from '../../assets/Showcase.png';

const LandingPage = () => {
	const [currentPage, setCurrentPage] = useState<number>(1);

	const handleNext = () => {
		if (currentPage >= 4) return;
		setCurrentPage(currentPage + 1);
	};

	const handlePrevious = () => {
		if (currentPage === 1) return;
		setCurrentPage(currentPage - 1);
	};

	return (
		<div className={styles.landing}>
			<div className={styles.landing__hero}>
				<button
					className={styles.landing__hero__button}
					style={{
						display: currentPage === 1 ? 'none' : 'flex',
					}}
					onClick={handlePrevious}
				>
					<svg height="24" width="24">
						<path d="m10.725 19.3-6.5-6.5q-.175-.175-.25-.375-.075-.2-.075-.425 0-.225.075-.425.075-.2.25-.375l6.5-6.5q.325-.3.788-.313.462-.012.812.313.35.325.363.8.012.475-.338.8L7.8 10.85h10.675q.475 0 .813.338.337.337.337.812 0 .475-.337.812-.338.338-.813.338H7.8l4.55 4.55q.325.3.338.788.012.487-.338.812-.325.325-.8.325-.475 0-.825-.325Z" />
					</svg>
				</button>

				<div className={styles.landing__hero__slideshow}>
					<div
						className={styles.landing__hero__slideshow__pagination}
						style={{
							display: 'none',
						}}
					>
						<div
							className={
								currentPage === 0
									? styles.landing__hero__slideshow__pagination__item__active
									: styles.landing__hero__slideshow__pagination__item
							}
						></div>
						<div
							className={
								currentPage === 1
									? styles.landing__hero__slideshow__pagination__item__active
									: styles.landing__hero__slideshow__pagination__item
							}
						></div>
						<div
							className={
								currentPage === 2
									? styles.landing__hero__slideshow__pagination__item__active
									: styles.landing__hero__slideshow__pagination__item
							}
						></div>
						<div
							className={
								currentPage === 3
									? styles.landing__hero__slideshow__pagination__item__active
									: styles.landing__hero__slideshow__pagination__item
							}
						></div>
					</div>

					<div
						className={styles.landing__hero__slideshow__image}
						style={{
							backgroundImage: `url(${image1})`,
							transform: `translateX(-${(currentPage - 1) * 100}%)`,
						}}
					></div>
					<div
						className={styles.landing__hero__slideshow__image}
						style={{
							backgroundImage: `url(${image2})`,
							transform: `translateX(-${(currentPage - 2) * 100}%)`,
						}}
					></div>
					<div
						className={styles.landing__hero__slideshow__image}
						style={{
							backgroundImage: `url(${image3})`,
							transform: `translateX(-${(currentPage - 3) * 100}%)`,
						}}
					></div>
					<div
						className={styles.landing__hero__slideshow__image}
						style={{
							backgroundImage: `url(${image4})`,
							transform: `translateX(-${(currentPage - 4) * 100}%)`,
						}}
					></div>
				</div>
			</div>

			<div className={styles.landing__content}>
				<div className={styles.landing__content__header}>
					<h1 className={styles.landing__content__header__title}>
						Kami perkenalkan,
						<br />
						Projekt&nbsp;
						<span className={styles.landing__content__header__title__highlight}>
							Inhertia
						</span>
						.
					</h1>

					<p className={styles.landing__content__header__description}>
						Sebuah platform marketplace franchise bagi kamu yang tertarik buat buka
						franchise.
					</p>
				</div>

				<div className={styles.landing__content__action}>
					<button className={styles.landing__content__action__button__fade}>
						Lewati
					</button>
					<button
						className={styles.landing__content__action__button__bold}
						onClick={handleNext}
					>
						Selanjutnya
					</button>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
