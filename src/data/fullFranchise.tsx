// Import Images
import Posarang from '../assets/franchise/Posarang.png';
import Nagoya from '../assets/franchise/Nagoya.png';
import Sabana from '../assets/franchise/Sabana.png';
import Yasaka from '../assets/franchise/Yasaka.png';
import BabaRafi from '../assets/franchise/BabaRafi.png';
import Menantea from '../assets/franchise/Menantea.png';
import TehPoci from '../assets/franchise/TehPoci.png';
import JanjiJiwa from '../assets/franchise/JanjiJiwa.png';
import Kenangan from '../assets/franchise/Kenangan.png';

export interface FranchiseTypes {
	type: string;
	title: string;
	description: string;
	rating: number;
	pricing: string;
	partTime: boolean;
	image: string;
}

const FranchiseData: FranchiseTypes[] = [
	// Makanan
	{
		type: 'Makanan',
		title: 'Posarang, Korean BBQ',
		description:
			'Posarang adalah sebuah franchise yang menyajikan makanan dari resep authentic Korea yang telah disesuaikan dengan cinta rasa Indonesia.',
		rating: 4.6,
		pricing: '1.000.000 - 2.000.000',
		partTime: false,
		image: Posarang,
	},
	{
		type: 'Makanan',
		title: 'Nagoya',
		description:
			'Nagoya adalah singkatan dari nasi goreng goyang. Nama yang unik ini digunakan karena mesin nagoya yang unik yang digunakan untuk membuat nasi goreng goyang.',
		rating: 4.4,
		pricing: '750.000 - 1.500.000',
		partTime: true,
		image: Nagoya,
	},
	{
		type: 'Makanan',
		title: 'Sabana Fried Chicken',
		description:
			'Sabana Fried Chicken adalah restoran yang menyajikan ayam goreng yang disajikan di restoran ini memiliki cita rasa yang khas dan unik.',
		rating: 4.8,
		pricing: '5.000.000 - 15.000.000',
		partTime: true,
		image: Sabana,
	},
	{
		type: 'Makanan',
		title: 'Yasaka Fried Chicken',
		description:
			'Yasaka yang berarti kesejahteraan dalam bahasa Jepang, adalah restoran yang menyajikan ayam goreng dengan harga terjangkau yang dapat dinikmati oleh semua kalangan.',
		rating: 4.4,
		pricing: '2.500.000 - 5.000.000',
		partTime: false,
		image: Yasaka,
	},
	{
		type: 'Makanan',
		title: 'Kebab Turki Baba Rafi',
		description:
			'Kebab Turki Baba Rafi adalah restoran yang menyajikan kebab turki dengan cita rasa yang khas dan unik.',
		rating: 4.5,
		pricing: '12.000.000 - 32.000.000',
		partTime: false,
		image: BabaRafi,
	},

	// Minuman
	{
		type: 'Minuman',
		title: 'Menantea',
		description:
			'Menantea merupakan franchise yang menjual kuliner minuman teh yang dibangun oleh dua kakak-adik bersaudara yaitu Jerome Polin dan Jehian Panangian ',
		rating: 4.6,
		pricing: '9.000.000 - 21.000.000',
		partTime: false,
		image: Menantea,
	},
	{
		type: 'Minuman',
		title: 'Es Teh Poci',
		description:
			'Es Teh Poci adalah minuman es teh segar yang hits di berbagai kalangan masyarakat Indonesia dengan rasanya yang khas dan beragam varian rasa yang beragam',
		rating: 4.7,
		pricing: '4.000.000 - 12.000.000',
		partTime: true,
		image: TehPoci,
	},
	{
		type: 'Minuman',
		title: 'Kopi Janji Jiwa',
		description:
			'Kopi Janji Jiwa adalah kopi yang dibuat dari biji kopi yang berkualitas tinggi yang rasanya paling pas di lidah orang Indonesia.',
		rating: 4.6,
		pricing: '9.000.000 - 10.000.000',
		partTime: false,
		image: JanjiJiwa,
	},
	{
		type: 'Minuman',
		title: 'Kopi Kenangan',
		description:
			'Kopi Kenangan merupakan bisnis minuman unicorn pertama yang memiliki outlet di hampir seluruh wilayah Indonesia. ',
		rating: 4.7,
		pricing: '4.000.000 - 12.000.000',
		partTime: true,
		image: Kenangan,
	},
];

export default FranchiseData;
