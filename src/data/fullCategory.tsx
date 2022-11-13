import Categories from '../components/categories';
import {
	HamburgerEmoji,
	JuiceEmoji,
	DonutEmoji,
	SuitcaseEmoji,
	BoxEmoji,
	CartEmoji,
	ToolboxEmoji,
	EarthEmoji,
	TargetEmoji,
} from '../components/emojiMicrosoft';

interface catergoryData {
	id: number;
	title: string;
	description: string;
	icon: React.ReactNode;
	color: string;
}

const categoryData: catergoryData[] = [
	{
		id: 1,
		title: 'Makanan',
		description: 'Beragam jenis makanan yang menarik buat konsumen',
		icon: <HamburgerEmoji />,
		color: '#FF5722',
	},
	{
		id: 2,
		title: 'Minuman',
		description: 'Beragam jenis minuman segar, botol atau segelas',
		icon: <JuiceEmoji />,
		color: '#67A5DA',
	},
	{
		id: 3,
		title: 'Jajanan',
		description: 'Pas di lidah dan namanya dikenal masyarakat',
		icon: <DonutEmoji />,
		color: '#F05454',
	},
	{
		id: 4,
		title: 'Jasa',
		description: 'Cari orang yang tepat buat kebutuhan kamu',
		icon: <SuitcaseEmoji />,
		color: '#7928CA',
	},
	{
		id: 5,
		title: 'Logistik',
		description: 'Kirim barang kemana aja ngga perlu ribet',
		icon: <BoxEmoji />,
		color: '#D17E31',
	},
	{
		id: 6,
		title: 'Minimarket',
		description: 'Semua barang tersedia di satu tempat',
		icon: <CartEmoji />,
		color: '#F167E3',
	},
	{
		id: 7,
		title: 'Otomotif',
		description: 'Solusi otomotif yang bisa dipercaya',
		icon: <ToolboxEmoji />,
		color: '#16C79A',
	},
	{
		id: 8,
		title: 'Internasional',
		description: 'Franchise luar negeri yang bawa hal-hal unik pastinya',
		icon: <EarthEmoji />,
		color: '##16C60C',
	},
	{
		id: 9,
		title: 'Part-Time',
		description: 'Cari pekerjaan sampingan yang cocok buat kamu',
		icon: <TargetEmoji />,
		color: '#FFE577',
	},
];

export default categoryData;
