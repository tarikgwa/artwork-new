// aita hosce main script for new project
// const basePath = process.cwd();
// const { startCreating, buildSetup } = require(`${basePath}/src/main.js`);

// (() => {
//   buildSetup();
//   startCreating();
// })();


// adding

let express = require("express"),
  ejs = require('ejs'),
  app = express(),
  path = require('path'),
  multer = require('multer');

const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

// extra for file unzip
const decompress = require("decompress");
// const path = require("path");
// end


app.use(cors());
app.use(bodyParser.json());



app.set('view engine', 'ejs'); // code to set the ejs for rendering template



let storage = multer.diskStorage({
  destination: function (req, file, callback) {
    console.log("File: ", file);


    // if (file.fieldname === 'EYES') {
    if (file.fieldname === 'InputLayers') {
      // callback(null, './layers/EYES');
      callback(null, './InputFile');
    }

    // callback(null, './layers/Head')
  },
  filename: function (req, file, callback) {
    console.log(file)
    // callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    callback(null, file.fieldname + path.extname(file.originalname))
  }
})

app.get('/', function (req, res) {
  res.render('index')
})

app.get('/launch', function (req, res) {
  res.render('launch')
})

// app.get('/waiting', function (req, res) {
//   res.render('waiting')
// })


// extra for image load
app.use(express.static('build/images'));


app.post('/', function (req, res) {
  let upload = multer({
    storage: storage,
    fileFilter: function (req, file, callback) {
      let ext = path.extname(file.originalname)
      // if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
      if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg' && ext !== '.zip') {
        return callback(res.end('Only images are allowed'), null)
      }
      callback(null, true)
    }
    // }).single('userFile');
    // }).array('userFile', 10);
  }).fields([
    // { name: 'EYES', maxCount: 100 },
    { name: 'InputLayers', maxCount: 100000 },
    // { name: 'MOUTH', maxCount: 100 },
    // { name: 'SKIN', maxCount: 100 },
    // { name: 'HATS', maxCount: 100 },
    // { name: 'GLASSES', maxCount: 100 },
    // { name: 'SHIRTS', maxCount: 100 },
  ]);

  upload(req, res, function (err) {
    // res.end('File is uploaded')

    // extra for file unzip


    (async () => {

      try {
        const files = await decompress("./InputFile/InputLayers.zip", "./layers", {
          filter: file => path.extname(file.path) !== ".exe"
        });
        console.log(files);

        // main function for create art (start)
        const basePath = process.cwd();
        const { startCreating, buildSetup } = require("./src/main.js");

        (() => {
          buildSetup();
          startCreating();
        })();

        // main function for create art (end)

        res.render('launch')
        

      } catch (error) {
        console.log(error);
      }

    })();
    // end

    // setTimeout(() => {
    //   const { startCreating, buildSetup } = require("./src/main.js");

    // (() => {
    //   buildSetup();
    //   startCreating();
    // })();
    // }, "10000")

    // const { startCreating, buildSetup } = require("./src/main.js");

    // (() => {
    //   buildSetup();
    //   startCreating();
    // })();


    // 
    // setTimeout(() => {
    //   res.render('waiting')
    // },)

    // res.render('launch')
  })
})

let port = process.env.PORT || 5000
app.listen(port, function () {
  console.log('Node.js listening on port ' + port);
})


// main file

// const { startCreating, buildSetup } = require("./src/main.js");

// (() => {
//   buildSetup();
//   startCreating();
// })();

// setTimeout(() => {
//   const { startCreating, buildSetup } = require("./src/main.js");

// (() => {
//   buildSetup();
//   startCreating();
// })();
// }, "30000")




