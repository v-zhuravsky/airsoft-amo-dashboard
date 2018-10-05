import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

let initialState = {
	products: [
		{
			productId: 1,
			productName: "M16A3 Katana System [WE]",
			category: "rifles",
			productPrice: "606",
			productDescription: "M16A3 Rifle is the variant of the M16A2 which comes in Fully Automatic instead of the 3-round burst mode, equipped with removable carrying handle like M4A1 Carbine and full length handguard like M16A2. It has been used by US Navy & SEALS Team. WE KATANA M4A1 AEG is the new tactical rifle in WE AEG Series which comes in a new designed KATANA Split gear box system. The KATANA AEG system comes with a changeable cylinder unit and the new designed gear box in the lower frame. It will comes with 3 types of cylinder unit (300 / 400 / 450 FPS) and the 400 FPS cylinder is the standard eqippment with the KATANA AEG. Although the gear box is special made, it can compatible with most of the parts of  ver 2 gear box (gear set, selector plate and motor). When user need to change the cylinder unit, please ensure the selector is in “Safe” before changing. Also, the hop up system and inner barrel is compatible with TM M4 AEG standard, and it also comes with the same function already on their M4 AEG: When user turns to “Safe”, it will release the spring in the gear box back to normal state.",
			amountLeft: "135",
			imgUrl: "https://airsoft.hitman.com.ua/image/cache/catalog/products_2018/23150_16_large-max-800.jpg",
			rating: 3,
			comments: [
				{
					commentId: 1,
					firstName: 'Alex',
					commentText: 'As most of WE proucts quality is not as good as I want for this price. But it works great.',
					commentDate: '01/10/2018'
				},
				{
					commentId: 2,
					firstName: 'Bob',
					commentText: 'Nice one. Really want to order it.',
					commentDate: '02/10/2018'
				}
			]
		},
		{
			productId: 2,
			productName: "AKC-74M E&L Gen2",
			category: "rifles",
			productPrice: "407",
			productDescription: "E&L Airsoft is a new quality on the airsoft market. The manufacturer has set himself the task of creating replicas with the highest possible quality of materials and perfect fitting, resembling the real steels as close as possible and went in this direction as far as he could - by starting production at the same factory, which produced a firearm! Therefore E&L's products are made with use of steel, hand finished wood components and high-quality composite and definitely can compete with the best brands on the market - also in price. The quality and performance allow it to be both a beautiful wall decoration as well as very effective skirmish gun. Also, some parts of the exterior are the same as in the original weapon and come off the same production line! Externally, the maximum possible number of elements was made ​as ​a 1:1 copy of the original, fully according to military specifications. This means you can exchange elements between the replica and the real steel! This applies to items such as the front bed, gas pipe, iron sights and cleaning rod. Hardly any other manufacturer offers that. Steel components have been oxidized, which makes them look even more realistic. Also, the attrition process which takes place over time makes oxidized surfaces look much better than it happens by painted or varnished guns. Also in terms of weight  ​​all was made to ensure realism. The replica is heavy, and a full steel outer barrel ensures proper balance. A notable feature is certainly the possibility of a partial field-stripping of the replica, like it takes place with the a real steel - with no tools required. Everything is based on pins and levers. The manufacturer paid attention to even of the smallest of details to make their product as close a resemblence to the real steel as possible.",
			amountLeft: "120",
			imgUrl: "https://airsoft.hitman.com.ua/image/cache/catalog/E_L/1152202731_11-max-800.jpg",
			rating: 5,
			comments: []
		},
		{
			productId: 3,
			productName: "Steyr AUG Sniper [Jing Gong]",
			category: "sniper",
			productPrice: "319",
			productDescription: "Armee-Universal-Gewehr (Universal Army Rifle) or AUG is a futuristic assault rifle developed during the 1960s in Austria to replace the aging 7.62mm FAL automatic rifles in service at the time. Often considered as the first successful bullpup rifle, the AUG was indeed well ahead of its time as far as concept and design; it was highly advanced when it first went into service in the late 1970s. Its bullpup design which moves the core of the rifles action behind the trigger allows for the use of a full length rifle barrel in a weapon with the ergonomics of a sub-machine gun. Some other significant features include fully ambidextrous controls and reversible charging handle and shell ejection port allowing the rifle to be configured for both left and right handed shooters. The unique two stage trigger allows the user to fire in semi-auto and full-auto without needing to manipulate a selector switch; for semi-automatic fire, the operator will just pull the trigger half way and if fully-automatic fire was necessary, the operator needs to only pull the trigger all the way back. Chambered in the 5.56x45mm NATO cartridge for its ease of use and handling, the futuristic family of rifles in the AUG line can be quickly adapted to accommodate a wide variety of roles in the ever changing battlefield with just a quick swap of the barrel. The AUG is definitely a well-rounded combat weapon with a proven track record that can stand its own even with todays modern combat rifles.",
			amountLeft: "120",
			imgUrl: "https://airsoft.hitman.com.ua/image/cache/catalog/products_2018/0446A_1_-max-800.jpg",
			rating: 0,
			comments: []
		},
		{
			productId: 4,
			productName: "TM Colt 1911 Night Warrior",
			category: "pistols",
			productPrice: "139",
			productDescription: "One for 1911 lovers (or those who appreciate a nice gun) - the Tokyo Marui Night Warrior is essentially an M.E.U. with different externals. As you can probably tell, it differs from your bog-standard 1911 government pistol, with a trouser-stirring appearance thanks to the stunning grip, skeletoned trigger, hammer, bottom rail and unusual sights. The detailing is as good as any other Marui gun and it will surely have thoroughly solid performance as per-usual for a Tokyo Marui gun.",
			amountLeft: "100",
			imgUrl: "http://img-cdn.redwolfairsoft.com/upload/product/img/TM-GBB-NWAR-1L.jpg",
			rating: 5,
			comments: []
		},
		{
			productId: 5,
			productName: "10 functional holster for Colt 1911",
			category: "gear",
			productPrice: "110",
			productDescription: "Made of high quality plastic. Can be hold either on leg or belt. Includes: holster, tactical holster platform, high ride duty belt loop, CQC Paddle Platform.",
			amountLeft: "100",
			imgUrl: "https://hitman.com.ua/image/cache/catalog/products_2018/M51617043_TAN_1911_1_-max-800.jpg",
			rating: 5,
			comments: []
		}
	]
};

// if (localStorage['redux-dashboard']) {
// 	initialState = JSON.parse(localStorage['redux-dashboard']);
// }

const middleware = [thunk];

const store = createStore(
	rootReducer,
	initialState,
	compose(
		applyMiddleware(...middleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

// store.subscribe(() => {
// 	localStorage['redux-dashboard'] = JSON.stringify(store.getState());
// });

export default store;