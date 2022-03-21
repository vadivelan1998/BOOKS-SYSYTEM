const express=require("express")
const app=express()
const {register,login}=require("./controllers/auth.controller")
const commentController=require("./controllers/comment.controller")
const bookController=require("./controllers/book.controller")
const publicationController = require("./controllers/publication.controller");
app.use(express.json())


app.post("/register",register);
app.post("/login", login);

app.use("/comments",commentController)
app.use("/books", bookController);
app.use("/publications", publicationController);

module.exports=app