import multer from "multer"
import path from "path"
const storage = multer.diskStorage({
    destination: function (req,file,cb){
        cb(null,'./public/temp')
    },

    filename: function (req,file, cb){
        const uniqueSuffix = Date.now() + '-' + Math.random()*2;
        const ext = path.extname(file.originalname);
        const name = path.basename(file.originalname, ext);

        cb(null, name + "-" + uniqueSuffix + ext);
    }
})

export const upload = multer({storage:storage});