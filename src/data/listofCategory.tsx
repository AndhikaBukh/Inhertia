import {
	BoxEmoji,
	CartEmoji,
	DonutEmoji,
	EarthEmoji,
	HamburgerEmoji,
	JuiceEmoji,
	SuitcaseEmoji,
	TargetEmoji,
	ToolboxEmoji,
} from '../components/emojiMicrosoft';

interface listofCategories {
	name: string;
	icon: React.ReactNode;
	color: string;
}

const categoriesData: listofCategories[] = [
	{
		name: 'makanan',
		icon: <HamburgerEmoji />,
		color: '#FF5722',
	},
	{
		name: 'minuman',
		icon: <JuiceEmoji />,
		color: '#67A5DA',
	},
	{
		name: 'jajanan',
		icon: <DonutEmoji />,
		color: '#F05454',
	},
	{
		name: 'jasa',
		icon: <SuitcaseEmoji />,
		color: '#7928CA',
	},
	{
		name: 'logistik',
		icon: <BoxEmoji />,
		color: '#D17E31',
	},
	{
		name: 'otomotif',
		icon: <ToolboxEmoji />,
		color: '#16C79A',
	},
	{
		name: 'part-time',
		icon: <TargetEmoji />,
		color: '#FFE577',
	},
	{
		name: 'minimarket',
		icon: <CartEmoji />,
		color: '#F167E3',
	},
	{
		name: 'internasional',
		icon: <EarthEmoji />,
		color: '#16C60C',
	},
];

export default categoriesData;
