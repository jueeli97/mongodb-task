// Get all the published backend courses,
// sort them by their name,
// pick only their name and author and display them.


// get all the published frontend and backend courses, sort them by thier price and descending order,
//pick only their name and author, and display them.


let mongoose = require("mongoose");

mongoose
.connect("mongodb://localhost/apk", { useNewUrlParser: true , useUnifiedTopology: true})
.then(()=>console.log("db is connected"))
.catch((error)=>console.log("something went wrong", error.message));


 let userSchema = new mongoose.Schema({
    
 });


let userModel = mongoose.model("users",userSchema);


async function fetchUser() {
    let user = await userModel
     //     .find({tags : "backend"})
     //     .sort("name")
     //     .select("name author");

         /////////////////////////////////////////////////////////////////////////////////////////
        .find({ $or: [ { tags: "frontend" }, { tags : "backend" } ] })
        .sort("-price")
        .select("name author");
   console.log(user);
    
};
  
fetchUser();