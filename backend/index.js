import express from "express";
import cors from "cors";
//import UserRoute from "./routes/UserRoute.js";
//import EmotionRoute from "./routes/EmosiRoute.js";
import UsersRoute from "./routes/UsersRoute.js";
import EmotionRoute from "./routes/EmotionRoute.js";
// import IntervensiRoute from "./routes/IntervensiRoute.js";
import IntervensiRoute from "./routes/PenangananRoute.js";
import fileUpload from "express-fileupload"; // Impor fileUpload
import session from "express-session";
import SequelizeStore from "connect-session-sequelize";
import db from "./config/Database.js";
import AuthRoute from "./routes/AuthRoute.js";
import dotenv from "dotenv";
dotenv.config()

const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
    db: db
});

// Sinkronisasi database dengan `alter: true` untuk menambahkan kolom baru
db.sync({ alter: true })
    .then(() => {
        console.log("All models were synchronized successfully.");
    })
    .catch((err) => {
        console.error("Failed to sync models:", err);
    });

(async () => {
    await db.sync();
})();

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto'
    }
}));

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

app.use(express.json());
app.use(fileUpload()); // Tambahkan middleware untuk menangani upload file
app.use(express.static("public"));
//app.use(UserRoute);
//app.use(EmotionRoute);
app.use(UsersRoute);
app.use(EmotionRoute);
app.use(IntervensiRoute);
app.use(AuthRoute);

store.sync();

app.listen(process.env.APP_PORT, () => {
    console.log('Server up and running...');
});

