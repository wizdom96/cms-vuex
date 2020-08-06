export const customers = {
	restaurants: [
		{
			id: 1,
			name: "KFC",
			type: "Fast Food",
			food: ["chicken", "ice cream"],
			priceRange: "Cheap",
			img: "https://seeklogo.com/images/K/kfc-logo-542AAD59EB-seeklogo.com.png",
			desc:
				"KFC is an American fast food restaurant chain headquartered in Louisville, Kentucky, that specializes in fried chicken.",
		},
		{
			id: 2,
			name: "Burger King",
			type: "Fast Food",
			food: ["chicken", "hamburger", "ice cream"],
			priceRange: "Cheap",
			img:
				"https://media-cdn.tripadvisor.com/media/photo-s/11/0f/6d/9c/burger-king.jpg",
			desc:
				"Burger King is an American multinational chain of hamburger fast food restaurants. ",
		},
		{
			id: 3,
			name: "Pizza Hut",
			type: "Fast Food",
			food: ["pizza"],
			priceRange: "Medium",
			img:
				"https://logos-download.com/wp-content/uploads/2016/04/Pizza_Hut_logo_red.png",
			desc:
				"Pizza Hut is an American restaurant chain and international franchise which was founded in 1958 by Dan and Frank Carney. ",
		},
		{
			id: 4,
			name: "McDonalds",
			type: "Fast Food",
			food: ["chicken", "hamburger", "ice cream"],
			priceRange: "Cheap",
			img: "https://images.safe.com/logos/customers/mcdonalds.png",
			desc:
				"McDonald's Corporation is an American fast food company, founded in 1940 as a restaurant operated by Richard and Maurice McDonald.",
		},
		{
			id: 5,
			name: "Big Boy",
			type: "Fast Food",
			food: ["chicken", "pizza", "hamburger"],
			priceRange: "Medium",
			img:
				"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1380415909i/821244._SX540_.jpg",
			desc:
				"Big Boy Restaurant Group, LLC is an American restaurant chain headquartered in Warren, Michigan, in Metro Detroit.",
		},
		{
			id: 6,
			name: "Chili's",
			type: "Restaurant",
			food: ["lasagna", "salad"],
			priceRange: "Cheap",
			img:
				"https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/082017/untitled-1_33.png?itok=EMdlUnZ_",
			desc:
				"Chili's Grill & Bar is an American restaurant restaurant chain. The company was founded by Larry Lavine in Texas in 1975.",
		},
		{
			id: 7,
			name: "Chevys",
			type: "Restaurant",
			food: ["lasagna", "salad", "steak"],
			priceRange: "Medium",
			img:
				"https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/0_c8ay30o7/def_height/2700/def_width/2700/version/100012/type/1",
			desc:
				"Chevys Fresh Mex is an American chain of Mexican-style restaurant restaurants located in the United States. ",
		},
		{
			id: 8,
			name: "Red Lobster",
			type: "Restaurant",
			food: ["sea food", "salad"],
			priceRange: "Expensive",
			img:
				"https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/8c2b93a3606627b959b804ba2f55b8ce",
			desc:
				"Red Lobster Hospitality LLC is an American restaurant restaurant chain headquartered in Orlando, Florida.",
		},
		{
			id: 9,
			name: "Bonefish Grill",
			type: "Restaurant",
			food: ["sea food", "steak"],
			priceRange: "Medium",
			img:
				"https://media-cdn.tripadvisor.com/media/photo-s/0d/94/51/1b/logo-bonefish.jpg",
			desc:
				"Bonefish Grill is an American restaurant seafood restaurant chain owned and operated by Bloomin' Brands.",
		},
		{
			id: 10,
			name: "Olive Garden",
			type: "Restaurant",
			food: ["salad", "french fries"],
			priceRange: "Expensive",
			img:
				"https://pbs.twimg.com/profile_images/1228350118841266177/aXOYGOPs_400x400.jpg",
			desc:
				"Olive Garden is an American restaurant restaurant chain specializing in Italian-American cuisine.",
		},
		{
			id: 11,
			name: "Bretucci's",
			type: "Restaurant",
			food: ["salad", "french fries", "lasagna"],
			priceRange: "Medium",
			img:
				"https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0024/9256/brand.gif?itok=udtVSuTn",
			desc:
				"Bertucci's is an American chain of restaurants offering pizza and Italian food. It also offers delivery, take-out and private dining.",
		},
		{
			id: 12,
			name: "Copeland's",
			type: "Restaurant",
			food: ["steak", "sea food", "french fries", "lasagna", "salad"],
			priceRange: "Expensive",
			img:
				"https://pbs.twimg.com/profile_images/854112801840934912/wRe0lGS6_400x400.jpg",
			desc:
				"Copeland's is a restaurant chain started by New Orleans native Al Copeland in 1983.",
		},
	],
	types: ["Fast Food", "Restaurant"],
	products: [
		"steak",
		"sea food",
		"french fries",
		"lasagna",
		"salad",
		"chicken",
		"hamburger",
		"pizza",
		"ice cream",
	],
	prices: ["Cheap", "Medium", "Expensive"],
	filter: {
		search: "",
		type: "",
		price: "",
		products: [],
	},
	auth: true,
};

export default customers;
