const express =('express')
const mongoose =('mongoose')


const app = express()

mongoose.connect('mongodb://localhost:27017/Product-list')
const userSchema = new mongoose.userSchema({
  list: String,
  count: Number
})

const userModel = mongoose.model("users", userSchema)
app.get("/getUsers", (req, res) =>{
  userModel.find({}).then(function(users){
    res.json(users)
  }).catch(function(err){
    console.log(err)
  })

})


app.listen(3000, () =>{
  console.log('server is running')
})