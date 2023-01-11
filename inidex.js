let express = require('express')
let mongoose = require('mongoose')

let app = express()


app.use(express.json());

//middlewares
app.set("views", "./src/views");
app.set("view engine", "ejs");

mongoose.set('strictQuery', true)

mongoose.connect('mongodb://localhost:27017/Social_chat', {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))


//app.get('')

app.listen(3000, () => {
    console.log('app running on port 3000...!!')
})