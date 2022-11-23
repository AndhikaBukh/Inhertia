import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useApp } from '../App';
import FranchiseData, { FranchiseTypes } from '../../data/fullFranchise';
import styles from './index.module.scss';
import ButtonComponent from '../../components/button';
import { MoneyEmoji, StarEmoji } from '../../components/emojiMicrosoft';
import { ChevronCircleRightFilledIcon } from '../../components/icons';

const FranchisePage = () => {
	const app = useApp();
	const { franchiseName } = useParams();

	const [franchise, setFranchise] = useState<FranchiseTypes>();

	useEffect(() => {
		app?.navbarConfig({
			_title: franchiseName,
			_back: true,
			_menu: true,
			_show: true,
		});

		setFranchise(FranchiseData.find(franchise => franchise.title === franchiseName));
	});

	return (
		<>
			<main className={styles.franchise}>
				<div className={styles.franchise__image}>
					<img
						className={styles.franchise__image__content}
						src={franchise?.image}
						alt=""
					/>
				</div>

				<div className={styles.franchise__details}>
					<h1 className={styles.franchise__details__title}>{franchise?.title}</h1>
					<p className={styles.franchise__details__description}>
						{franchise?.description}
					</p>
				</div>

				<div className={styles.franchise__overview}>
					<div className={styles.franchise__overview__container}>
						<h3 className={styles.franchise__overview__title}>Rating Pelanggan</h3>
						<p className={styles.franchise__overview__content}>
							<div className={styles.franchise__overview__content__icon}>
								<StarEmoji />
							</div>
							{franchise?.rating}{' '}
							<span className={styles.franchise__overview__refer}>
								-{' '}
								{franchise?.rating !== undefined
									? franchise?.rating > 4.5 || franchise?.rating < 3.5
										? 'Sangat'
										: ''
									: ''}{' '}
								{franchise?.rating !== undefined
									? franchise?.rating >= 4
										? 'Baik'
										: franchise?.rating <= 3.5
										? 'Buruk'
										: 'Baik'
									: ''}
							</span>
						</p>
					</div>
				</div>

				<div className={styles.franchise__overview}>
					<div className={styles.franchise__overview__container}>
						<h3 className={styles.franchise__overview__title}>Biaya Franchise</h3>
						<p className={styles.franchise__overview__content}>
							<div className={styles.franchise__overview__content__icon}>
								<MoneyEmoji />
							</div>
							IDR RP. {franchise?.pricing}
						</p>
					</div>
				</div>

				<div className={styles.franchise__overview}>
					<div className={styles.franchise__overview__container}>
						<h3 className={styles.franchise__overview__title}>
							Ketersediaan Part-Time
						</h3>
						<p className={styles.franchise__overview__content}>
							{' '}
							- {franchise?.partTime ? 'Sedang mencari!' : 'Saat ini tidak mencari'}
						</p>
					</div>
				</div>

				<div className={styles.franchise__overview}>
					<div className={styles.franchise__overview__container}>
						<h3 className={styles.franchise__overview__title}>Syarat & Ketentuan</h3>
					</div>

					<div className={styles.franchise__overview__action}>
						<ChevronCircleRightFilledIcon color="#0e67ed" />
					</div>
				</div>

				<div className={styles.franchise__action}>
					<ButtonComponent>Daftar {franchise?.title}</ButtonComponent>
				</div>
			</main>
		</>
	);
};

export default FranchisePage;
