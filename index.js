const express = require('express');
const fileUpload = require('express-fileupload');


const app = express();


app.use(fileUpload())

app.post('/upload' , (req , res) => {
    if(req.file === null ){
        return res.status(400).json({msg: 'no file upload'})
    }

    const file = req.files.file;
    file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
        if(err) {
            console.log(err)
            return res.status(500).send(err)
        }

        res.json({fileName: file.name , filePath : `/upload/${file.name}`})
    })
   
})


app.listen(8080 , () => {
    console.log('server started path 8080')
})