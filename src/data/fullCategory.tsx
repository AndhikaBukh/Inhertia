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
	title: string;
	description: string;
	icon: React.ReactNode;
	color: string;
}

const categoryData: catergoryData[] = [
	{
		title: 'Makanan',
		description: 'Beragam jenis makanan yang bisa kamu beli',
		icon: <HamburgerEmoji />,
		color: '#FF5722',
	},
	{
		title: 'Minuman',
		description: 'Beragam jenis minuman segar, botol atau segelas',
		icon: <JuiceEmoji />,
		color: '#67A5DA',
	},
	{
		title: 'Jajanan',
		description: 'Pas di lidah dan namanya dikenal masyarakat',
		icon: <DonutEmoji />,
		color: '#F05454',
	},
	{
		title: 'Jasa',
		description: 'Cari orang yang tepat buat kebutuhan kamu',
		icon: <SuitcaseEmoji />,
		color: '#7928CA',
	},
	{
		title: 'Logistik',
		description: 'Kirim barang kemana aja ngga perlu ribet',
		icon: <BoxEmoji />,
		color: '#D17E31',
	},
	{
		title: 'Minimarket',
		description: 'Semua barang tersedia di satu tempat',
		icon: <CartEmoji />,
		color: '#F167E3',
	},
	{
		title: 'Otomotif',
		description: 'Solusi otomotif yang bisa dipercaya',
		icon: <ToolboxEmoji />,
		color: '#16C79A',
	},
	{
		title: 'Internasional',
		description: 'Franchise luar negeri yang bisa kamu coba',
		icon: <EarthEmoji />,
		color: '#16C60C',
	},
	{
		title: 'Part-Time',
		description: 'Cari pekerjaan sampingan yang cocok buat kamu',
		icon: <TargetEmoji />,
		color: '#FFE577',
	},
];

export default categoryData;
