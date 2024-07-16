const File = require("../models/File");

// localfileupload -> handler function

exports.localFileUpload = async (req, res) => {
    try{
        // fetch filefrom request 
        const file = req.files.file;
        console.log("Got access to the file -> ", file);


        // create path where file need to be stored on server
        let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}` ;
        console.log("PATH -> ", path)
        

        // add path to the move function
        file.mv(path , (err) => {
            console.log(err);
        });
       

        // careate  a successful response 
        res.json({
            success: true,
            message: 'Local file Uploaded successfully',
        });
    }
catch (error){
    // fetch file 
         console.log(error);
      }
}