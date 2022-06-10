const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Your Collection";
const description = "Remember to replace this description";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};


// code for dynamic access folder
const fs = require('fs')

// const dir = '/Users/flavio/folder'
const dir = './layers'
const files = fs.readdirSync(dir)

for (const file of files) {
  console.log("*******************************************************", file)
}

// end



// // code for delete folder start
// const fs2 = require('fs');

// // directory path
// const dir2 = './layers/';

// // delete directory recursively
// try {
//   fs2.rmdirSync(dir2, { recursive: true });

//   console.log(`${dir2} is deleted!`);
// } catch (err) {
//   console.error(`Error while deleting ${dir2}.`);
// }
// // end



// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 50,
    layersOrder: [
      // { name: "Background" },
      // { name: "Eyeball" },
      // { name: "Eye color" },
      // { name: "Iris" },
      // { name: "Shine" },
      // { name: "Bottom lid" },
      // { name: "Top lid" },



      // { name: "SKIN" },
      { name: files[5] },
      // { name: "HATS" },
      { name: files[2] },
      // { name: "EYES" },
      { name: files[0] },
      // { name: "GLASSES" },
      { name: files[1] },
      // { name: "MOUTH" },
      { name: files[3] },
      // { name: "SHIRTS" },
      { name: files[4] },



      // {
      //   name: "EYES", options: {
      //     blend: MODE.darken,
      //     // opacity: 0.2,
      //     displayName: "Awesome Eye Color",
      //   },
      // },



      // { name: "MOUTH", options: { blend: MODE.overlay, opacity: 0.7 } },

    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 2000,
  height: 2000,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
