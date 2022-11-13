// Import Images
import Posarang from '../assets/franchise/Posarang.png';
import Nagoya from '../assets/franchise/Nagoya.png';
import Sabana from '../assets/franchise/Sabana.png';
import Yasaka from '../assets/franchise/Yasaka.png';

interface FranchiseTypes {
	type: string;
	title: string;
	description: string;
	rating: number;
	image: string;
}

const FranchiseData: FranchiseTypes[] = [
	{
		type: 'Makanan',
		title: 'Posarang, Korean BBQ',
		description:
			'Posarang adalah sebuah franchise yang menyajikan makanan dari resep authentic Korea yang telah disesuaikan dengan cinta rasa Indonesia.',
		rating: 4.6,
		image: Posarang,
	},
	{
		type: 'Makanan',
		title: 'Nagoya',
		description:
			'Nagoya adalah singkatan dari nasi goreng goyang. Nama yang unik ini digunakan karena mesin nagoya yang unik yang digunakan untuk membuat nasi goreng goyang.',
		rating: 4.4,
		image: Nagoya,
	},
	{
		type: 'Makanan',
		title: 'Sabana Fried Chicken',
		description:
			'Sabana Fried Chicken adalah restoran yang menyajikan ayam goreng yang disajikan di restoran ini memiliki cita rasa yang khas dan unik.',
		rating: 4.8,
		image: Sabana,
	},
	{
		type: 'Makanan',
		title: 'Yasaka Fried Chicken',
		description:
			'Yasaka yang berarti kesejahteraan dalam bahasa Jepang, adalah restoran yang menyajikan ayam goreng dengan harga terjangkau yang dapat dinikmati oleh semua kalangan.',
		rating: 4.6,
		image: Yasaka,
	},
];

export default FranchiseData;
