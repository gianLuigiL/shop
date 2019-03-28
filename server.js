//Express and middleware
const express = require("express");
const body_parser = require("body-parser");
const compression = require("compression");
const fs = require("fs");
const multer = require("multer");
const path = require("path");
const { connect } = require("./util/connection");



const app = express();
//Heroku uses PORT but dev uses 5000
const port = 5000;

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        if (!fs.existsSync(`./client/public/assets/images/${req.body.id}`)) {
            fs.mkdirSync(`./client/public/assets/images/${req.body.id}`);
        }
        let path = `./client/public/assets/images/${req.body.id}`;
        cb(null, path);
    },
    filename: function(req, file, cb) {
        console.log(req.body)
        console.log(file)
        cb(null, req.body.id + "-" + Date.now() + file.originalname.slice(file.originalname.lastIndexOf(".")))
    }
})

const upload = multer({storage: storage});

//Apply middleware
app.use(compression());  //Compress data
app.use(body_parser.json());  //Parse body of requests
app.use(body_parser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'client/build')));  //Serve client build

connect().then(res => {
    console.log("Successfully connected", res);
    app.listen(port, () => console.log("App is listening at " + port));
})


//Serve the files in build folder
app.post('/image',upload.array("images", 5), (req, res) => {
    console.log(req.body);
    const files = req.files;
    if(!files) {
        res.status(500).send({error: "Upload failed"});
    }
    else {
        console.log(files)
        let images = {};
        let paths = [];
        files.forEach(el => {
            el.alt = req.body.alt;
        })
        fs.writeFile(files[0].destination + "/summary.json", JSON.stringify(files, null, 2), err => {
            if (err) {
                res.status(500).send({error: "Couldn't locate the folder for the file"});
            }
            res.status(200).send({ok: true, images: paths});
        })
    
        
    }
});

app.post("/add_product",upload.none(), async (req, res) => {
    try {
        const db = await connect();
        db.collection("products").insertOne(req.body).then(document => {
            res.status(200).send({success: true, msg: "Product has been inserted successfully."})
        })
        
    } catch (error) {
        console.log("There was an error inserting a product", err);
    }
})

app.get('/', (req, res) => {
    console.log("hit")
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

//POST requests


