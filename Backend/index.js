const express=require('express');
var cors=require('cors');
const connectToMongo=require('./db')


connectToMongo();
const app = express()
const port = 4000;

app.use(cors())
app.use(express.json());

//Available routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/announcement',require('./routes/announcements'))
app.use('/api/event',require('./routes/events'))
app.use('/api/helpandsupport',require('./routes/queries'))

app.listen(port, () => {
  console.log(`MyNotebook backend listening  at http://localhost:${port}`)
})

//add this to "start" in script of package json  to run the client side
//react-scripts start & 