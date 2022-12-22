import express from 'express';
import adminBookRouter from './src/routers/admin/book.router';
import authRouter from './src/routers/auth.router';
import profileRouter from './src/routers/profile.router';
import registerRouter from './src/routers/register.router';
import cookieParser from 'cookie-parser';
import checkAuthentication from './src/middlewares/checkAuthentication';
import database from './src/configs/database';
import session from 'express-session';
import flash from 'connect-flash';
const bodyParser = require('body-parser');
<<<<<<< HEAD
import userRouter from './src/routers/profile.router';
=======
// import userRouter from './src/routers/user.router';
import userRouter from './src/routers/user/dashboard.router'
>>>>>>> 27834fcd8436ccaa222a2971fe2d2d7f4fa53ee7
import userProductRouter from './src/routers/user/product.router';

const PORT = 3000;
const app = express();


app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express.static('public'));
database.connect();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
    secret:'geeksforgeeks',
    saveUninitialized: true,
    resave: true
}));

app.use(flash());
app.use('/login', authRouter);
app.use('/register', registerRouter);

app.use(checkAuthentication);

app.use('/profile', profileRouter)
app.use('/user', userRouter);
app.use('/user', userProductRouter);
app.use('/admin/book', adminBookRouter);
app.get('/admin/dashboard', (req, res) => {res.render('admin/dashboard')});


app.listen(PORT, () => {
    console.log('App running on port: ' + PORT)
})