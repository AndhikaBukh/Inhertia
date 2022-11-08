import Categories from '../components/categories';

interface catergoryData {
	id: number;
	icon: React.ReactNode;
	title: string;
	description: string;
}

const categoryData: catergoryData[] = [
	{
		id: 1,
		icon: <Categories name="makanan" />,
		title: 'Makanan',
		description: 'Beragam jenis makanan yang menarik buat konsumen',
	},
	{
		id: 2,
		icon: <Categories name="minuman" />,
		title: 'Minuman',
		description: 'Beragam jenis minuman segar, botol atau segelas',
	},
	{
		id: 3,
		icon: <Categories name="jajanan" />,
		title: 'Jajanan',
		description: 'Pas di lidah dan namanya dikenal masyarakat',
	},
	{
		id: 4,
		icon: <Categories name="jasa" />,
		title: 'Jasa',
		description: 'Cari orang yang tepat buat kebutuhan kamu',
	},
	{
		id: 5,
		icon: <Categories name="logistik" />,
		title: 'Logistik',
		description: 'Kirim barang kemana aja ngga perlu ribet',
	},
	{
		id: 6,
		icon: <Categories name="minimarket" />,
		title: 'Minimarket',
		description: 'Semua barang tersedia di satu tempat',
	},
	{
		id: 7,
		icon: <Categories name="otomotif" />,
		title: 'Otomotif',
		description: 'Solusi otomotif yang bisa dipercaya',
	},
	{
		id: 8,
		icon: <Categories name="internasional" />,
		title: 'Internasional',
		description: 'Franchise luar negeri yang bawa hal-hal unik pastinya',
	},
];

export default categoryData;
