import express from 'express';
import mongoose from 'mongoose';
import router from './Router.js';
import fileUpload from 'express-fileupload';

const PORT = 5000;
const DB_URL =
  'mongodb+srv://admin:admin@cluster0.pzz8y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const app = express();

app.use(express.json());
app.use(express.static('static')); //for will send static file
app.use(fileUpload({}));
app.use('/api', router);

async function startApp() {
  try {
    await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true });
    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
  } catch (err) {
    console.error(err);
  }
}

startApp();
