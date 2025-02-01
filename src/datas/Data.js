const products = [
    { 
        pname: "PS5 Console", 
        purl: "https://gmedia.playstation.com/is/image/SIEPDC/ps5-slim-disc-console-featured-hardware-image-block-02-en-15nov23?$1200px$", 
        desc: "Experience lightning-fast load times, stunning visuals, and immersive gameplay with the PlayStation 5 console."
    },
    { 
        pname: "DualSense™ Wireless Controller", 
        purl: "https://gmedia.playstation.com/is/image/SIEPDC/dualsense-range-stacked-image-block-01-en-11feb22?$1200px$", 
        desc: "Enhance your gaming experience with haptic feedback, adaptive triggers, and a built-in microphone."
    },
    { 
        pname: "PULSE Elite™ Wireless Headset", 
        purl: "https://gmedia.playstation.com/is/image/SIEPDC/PULSE-Elite-headset-thumbnail-01-en-08sep23?$1200px$", 
        desc: "Enjoy high-fidelity audio, noise-canceling technology, and seamless connectivity with this premium headset."
    },
    { 
        pname: "PULSE Explore™ Wireless Earbuds", 
        purl: "https://gmedia.playstation.com/is/image/SIEPDC/PULSE-Explore-earbuds-image-block-01-en-08sep23?$1200px$", 
        desc: "Immerse yourself in rich sound with these wireless earbuds designed for PlayStation gaming on the go."
    },
    { 
        pname: "DualSense Edge", 
        purl: "https://gmedia.playstation.com/is/image/SIEPDC/dualsense-edge-featured-hardware-image-block-01-en-11aug23?$1200px$", 
        desc: "Take control with customizable buttons, swappable thumbsticks, and advanced gaming precision."
    },
    { 
        pname: "Access™ Controller", 
        purl: "https://gmedia.playstation.com/is/image/SIEPDC/access-controller-featured-hardware-image-block-01-en-12oct23?$1200px$", 
        desc: "A highly customizable controller designed for accessibility, offering easy and comfortable gaming for everyone."
    },
    { 
        pname: "PS5 Console Covers", 
        purl: "https://gmedia.playstation.com/is/image/SIEPDC/ps5-console-cover-range-image-block-01-en-16feb22?$1600px$", 
        desc: "Personalize your PS5 with stylish console covers available in various colors and designs."
    },
    { 
        pname: "Media Remote", 
        purl: "https://gmedia.playstation.com/is/image/SIEPDC/media-remote-featured-hardware-image-block-01-en-11aug23?$1600px$", 
        desc: "Easily navigate your PS5’s entertainment features with this sleek and intuitive media remote."
    }
];

const NewGames=[
    {gName:"ASTRO BOT",gUrl:"https://image.api.playstation.com/vulcan/ap/rnd/202406/0500/8f15268257b878597757fcc5f2c9545840867bc71fc863b1.png"},
    {gName:"Call of Duty®: Black Ops 6",gUrl:"https://image.api.playstation.com/vulcan/ap/rnd/202405/2921/4b45cf4b319a65e05f6e4f87a22c7b91d2e7e8aeb247b61f.png"},
    {gName:"Black Myth: Wukong",gUrl:"https://image.api.playstation.com/vulcan/ap/rnd/202405/2117/bd406f42e9352fdb398efcf21a4ffe575b2306ac40089d21.png"},
    {gName:"Sonic X Shadow Generations",gUrl:"https://image.api.playstation.com/vulcan/ap/rnd/202405/2308/7688393c4ec90a17fb8d0e65f7e1da403da4d3573721db92.png"},
    {gName:"Silent Hill 2",gUrl:"https://image.api.playstation.com/vulcan/ap/rnd/202210/2000/IgwsFz9BiBrFvyV7pIWpoVgd.png"},
    {gName:"Dragon Age: The Veilguard",gUrl:"https://image.api.playstation.com/vulcan/ap/rnd/202407/2513/600e374a7e7b6e26adb3ef0584314703dffd4234b52a4299.png"},
    {gName:"Metaphor: ReFantazio",gUrl:"https://image.api.playstation.com/vulcan/ap/rnd/202409/1017/cbdc71d8b4a2f354785c08bc098f0675067e3cfd953e91ce.png"},
    {gName:"Dragon Ball: Sparking! Zero",gUrl:"https://image.api.playstation.com/vulcan/ap/rnd/202405/2213/caf3b629a8afbc72a94ec15a568a898ac1845231398d77ac.png"},
    {gName:"Warhammer 40,000:",gUrl:"https://image.api.playstation.com/vulcan/ap/rnd/202212/0711/LIJFzsGFKanQzb7NbNjqd5GI.jpg"},
    {gName:"Star Wars™ Outlaws",gUrl:"https://image.api.playstation.com/vulcan/ap/rnd/202306/3020/5d272976398422e4228709c8ac02f56f816c687079af5222.jpg"},
    {gName:"Helldivers™ 2",gUrl:"https://gmedia.playstation.com/is/image/SIEPDC/helldivers-2-store-art-01-en-4march24"},
    {gName:"LEGO® Horizon Adventures™",gUrl:"https://image.api.playstation.com/vulcan/ap/rnd/202409/2013/96a84262e4562c459c213515a9dfd53d82547603b86a2c6a.png"},
  
]

const comingSoonGames=[
    {gName:'Ghost of Yōtei',gUrl:'https://image.api.playstation.com/vulcan/ap/rnd/202410/2119/a0733a9c0d2c1e2ba31ba4c805d31b4c9d1f82febdc51c57.png '},
    {gName:'Like a Dragon: Pirate Yakuza',gUrl:'https://image.api.playstation.com/vulcan/ap/rnd/202408/1401/5cbfb4502807fef739169f7e9bdd0cd615d7a86ce4e6af82.png'},
    {gName:'Mafia: The Old Country',gUrl:'https://image.api.playstation.com/vulcan/ap/rnd/202412/1217/f3f450a68a7dc77fd1b78a675354558cee2375a38e349b42.png'},
    {gName:'Monster Hunter Wilds',gUrl:'https://www.monsterhunter.com/wilds/assets/img/product/MHWilds_deluxe.png'},
    {gName:'DOOM: The Dark Ages',gUrl:'https://image.api.playstation.com/vulcan/ap/rnd/202406/0622/3147111e85139fa3be30e19ae737c5df739220bbcd412a1f.jpg'},
    {gName:'Death Stranding 2: On the Beach',gUrl:'https://upload.wikimedia.org/wikipedia/en/4/49/Death_Stranding_2_On_The_Beach_Poster.jpg'},
    {gName:'Little Nightmares III',gUrl:'https://upload.wikimedia.org/wikipedia/en/2/2e/Little_Nightmares_III_cover_art.jpg'},
    {gName:'Sid Meiers Civilization® VII',gUrl:'https://image.api.playstation.com/vulcan/ap/rnd/202408/1323/17da9a134effa01060636fa3463344f97d144791d6516ebe.jpg'},
    {gName:'Borderlands 4',gUrl:'https://image.api.playstation.com/vulcan/ap/rnd/202412/1218/96738fb8041b189e2a270a63050b764d2c538be962d028e9.png'},
    {gName:'Hell is Us',gUrl:'https://image.api.playstation.com/vulcan/ap/rnd/202310/1708/690e4287d7bf6a84059c162774b7ce7ee71b48f589e9213a.jpg'},
    {gName:'Assassins Creed Shadows',gUrl:'https://image.api.playstation.com/vulcan/ap/rnd/202404/1815/898047ecfdb7ee9d5cb511b9f293e1ad1f7df0793626b4a6.jpg '},
    {gName:'Indiana Jones and the Great Circle',gUrl:'https://image.api.playstation.com/vulcan/ap/rnd/202408/1520/76248a273eb9e5f940cb4793256b30c165536acafe602483.png'}
]


const productsImages=[
    {pName:'PlayStation™™™ Heritage Zip Up Hoodie',pUrl:'https://gmedia.playstation.com/is/image/SIEPDC/ps-gear-ps-heritage-zipup-hoodie-image-block-01-en-08dec23?$1600px--t$'},
    {pName:'PlayStation™™™ Logo Tee',pUrl:'https://gmedia.playstation.com/is/image/SIEPDC/ps-gear-ps-logo-tshirt-image-block-01-en-08dec23?$1600px--t$'},
    {pName:'PlayStation™™™ Brand Hat',pUrl:'https://gmedia.playstation.com/is/image/SIEPDC/ps-gear-ps-brand-hat-image-block-01-en-08dec23?$1600px--t$'},
    {pName:'PlayStation™™™ Heritage Mug',pUrl:'https://gmedia.playstation.com/is/image/SIEPDC/ps-gear-ps-heritage-mug-image-block-01-en-08dec23?$1600px--t$'},
]


export {products,NewGames,comingSoonGames,productsImages}




