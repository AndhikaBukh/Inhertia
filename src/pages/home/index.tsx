import { useEffect, useRef, useState } from 'react';
import { useApp } from '../App';
import { HamburgerEmoji, MedalEmoji, TargetEmoji } from '../../components/emojiMicrosoft';
import { ChevronCircleRightFilledIcon } from '../../components/icons';
import Categories from '../../components/categories';
import categoryData from '../../data/fullCategory';
import { useNavigate } from 'react-router-dom';

import styles from './index.module.scss';

// ? Will be changed to API Based Link later on.
// import boxImage1 from '../../assets/Box1.png';
import boxImage2 from '../../assets/Box2.png';
import boxImage3 from '../../assets/Box3.png';

import cardImage1 from '../../assets/Card1.png';
import cardImage2 from '../../assets/Card2.png';
import cardImage3 from '../../assets/Card3.png';
import useDrag from '../../hooks/useDrag';

const HomePage = () => {
	const app = useApp();
	const drag = useDrag();
	const navigate = useNavigate();

	const [showOther, setShowOther] = useState<boolean>(false);
	const refWrapOther = useRef<HTMLDivElement>(null);
	const refDragOther = useRef<any>(null);

	useEffect(() => {
		app?.setPageTitle('Home');
		app?.navbarConfig({
			_title: undefined,
			_show: true,
			_back: false,
			_menu: true,
			_children: undefined,
		});
	}, []);

	return (
		<main className={styles.home}>
			<div
				className={styles.home__other}
				style={{
					top: showOther ? '2vh' : '100vh',
				}}
				ref={refWrapOther}
			>
				<button
					className={styles.home__other__drag}
					tabIndex={-1}
					ref={refDragOther}
					onClick={() => setShowOther(false)}
					onMouseDown={e => drag.mouse(refDragOther, refWrapOther, setShowOther, e)}
					onTouchStart={e => drag.touch(refDragOther, refWrapOther, setShowOther, e)}
				>
					<div className={styles.home__other__drag__indicator}></div>
				</button>

				<div className={styles.home__other__wrapper}>
					<div className={styles.home__other__title}>Kategori Franchise</div>
					{categoryData.map(({ title, description }, index) => {
						return (
							<>
								<div className={styles.home__other__categories} key={index}>
									<Categories title={title} />

									<div className={styles.home__other__categories__content}>
										<h2
											className={
												styles.home__other__categories__content__title
											}
										>
											{title}
										</h2>
										<p
											className={
												styles.home__other__categories__content__description
											}
										>
											{description}
										</p>
									</div>
								</div>

								{index !== categoryData.length - 1 && (
									<div className={styles.home__other__border}></div>
								)}
							</>
						);
					})}
				</div>
			</div>

			<section className={styles.home__section}>
				<div className={styles.home__section__banner}>
					<div className={styles.home__section__banner__content}>
						<h1 className={styles.home__section__banner__content__title}>
							Masih bingung cari franchise?
						</h1>
						<p className={styles.home__section__banner__content__subtitle}>
							Yuk ikut quiz ini buat cari franchise yang cocok buat kamu!
						</p>
					</div>

					<button className={styles.home__section__banner__button}>
						<ChevronCircleRightFilledIcon />
					</button>

					<div className={styles.home__section__banner__decor}>
						<MedalEmoji />
					</div>

					<div className={styles.home__section__banner__pagination}>
						<button
							// prettier ignore
							className={`${styles.home__section__banner__pagination__item} ${styles['home__section__banner__pagination__item--active']}`}
						/>
						<button className={styles.home__section__banner__pagination__item} />
						<button className={styles.home__section__banner__pagination__item} />
						<button className={styles.home__section__banner__pagination__item} />
					</div>
				</div>
			</section>

			<section className={styles.home__section}>
				<div className={styles.home__section__action}>
					<div className={styles.home__section__action__row}>
						{categoryData.slice(0, 4).map(({ title }, index) => {
							return (
								<button
									className={styles.home__section__action__item}
									key={index}
									onClick={() =>
										navigate('/search', { state: { activeFilter: title } })
									}
								>
									<Categories title={title} />
									<div className={styles.home__section__action__item__title}>
										{title}
									</div>
								</button>
							);
						})}
					</div>

					<div className={styles.home__section__action__row}>
						{categoryData.slice(4, 7).map(({ title }, index) => {
							return (
								<button
									className={styles.home__section__action__item}
									key={index}
									onClick={() =>
										navigate('/search', { state: { activeFilter: title } })
									}
								>
									<Categories title={title} />
									<div className={styles.home__section__action__item__title}>
										{title}
									</div>
								</button>
							);
						})}

						<button
							className={styles.home__section__action__item}
							onClick={() => setShowOther(true)}
						>
							<Categories title="others" />
							<div className={styles.home__section__action__item__title}>Lainnya</div>
						</button>
					</div>
				</div>
			</section>

			<div className={styles.home__title}>Franchise yang paling populer</div>
			<section className={`${styles.home__section} ${styles['home__section--row']}`}>
				<div
					className={styles.home__section__box}
					style={{
						backgroundColor: '#FEC629',
					}}
				>
					<img src={boxImage2} alt="" />
				</div>
				<div
					className={styles.home__section__box}
					style={{
						backgroundColor: '#FFFFFF',
					}}
				>
					<img src={boxImage3} alt="" />
				</div>
			</section>

			<div className={styles.home__title}>
				<div className={styles.home__title__icon}>
					<HamburgerEmoji />
				</div>
				Franchise Makanan
			</div>
			<section className={`${styles.home__section} ${styles['home__section--row']}`}>
				<div className={styles.home__section__card}>
					<div className={styles.home__section__card__image}>
						<img src={cardImage1} alt="" />
					</div>

					<div className={styles.home__section__card__content}>Posarang, Korean BBQ</div>
				</div>

				<div className={styles.home__section__card}>
					<div className={styles.home__section__card__image}>
						<img src={cardImage2} alt="" />
					</div>

					<div className={styles.home__section__card__content}>
						Nagoya, Nasi Goreng Goyang
					</div>
				</div>

				<div className={styles.home__section__card}>
					<div
						className={styles.home__section__card__image}
						style={{
							backgroundColor: '#e2101c',
						}}
					>
						<img src={cardImage3} alt="" />
					</div>

					<div className={styles.home__section__card__content}>Yasaka Fried Chiken</div>
				</div>
			</section>

			<div className={styles.home__title}>
				<div className={styles.home__title__icon}>
					<TargetEmoji />
				</div>
				Buat kamu yang lagi cari Part-Time
			</div>
			<div className={styles.home__section}>
				<div className={styles.home__section__announce}>
					<div
						className={styles.home__section__announce__image}
						style={
							{
								// Planned to dynamically retrieve picture from the API
								// backgroundImage: `url(${image3})`,
							}
						}
					></div>

					<div className={styles.home__section__announce__content}>
						<div className={styles.home__section__announce__content__title}>
							Lagi cari duit lebih? Cari uang jajan buat akhir bulan?
						</div>
						<div className={styles.home__section__announce__content__info}>
							Ada cabang sama mitra yang lagi hiring nih!
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default HomePage;
