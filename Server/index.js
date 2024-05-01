const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://admin:test123@cluster0.gcqibol.mongodb.net/Tourism-website"
);


const UserSchema = new mongoose.Schema({
    name : String,
    email : String,
    phone : String,
    password : String
})
const User = mongoose.model("users",UserSchema);

app.post("/register", async (req, res) => {
    const {name,email,phone,password} = req.body;
    try {
        const existUser = await User.findOne({email});
        if(existUser == null){
          await User.create({
              name,email,phone,password
          });
        }
        res.send(existUser);
      } catch (error) {
        res.send("error");
      }
    });
    
    app.post("/login", async (req, res) => {
      const {email, password} = req.body;
      try {
        const response = await User.findOne({email,password});
        res.send(response);
  } catch (error) {
    res.send("Error found")
  }
})

app.listen(5001, () => {
  console.log("Server started at port : 5001");
});
