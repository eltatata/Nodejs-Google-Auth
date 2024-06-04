import multer, { diskStorage } from "multer";

const PATH_STORAGE = `${process.cwd()}/src/public/storage`;

const storage = diskStorage({
    destination(req, file, cb) {
        cb(null, PATH_STORAGE);
    },
    filename(req, file, cb) {
        const ext = file.originalname.split(".").pop();
        const fileNameRandom = `image-${Date.now()}.${ext}`;
        cb(null, fileNameRandom);
    },
});

const multerMiddleware = multer({
    storage,
    limits: { fileSize: 5000000 },
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) cb(null, true);
        else cb(new Error('The file is not an image'), false);
    }
});

export default multerMiddleware;