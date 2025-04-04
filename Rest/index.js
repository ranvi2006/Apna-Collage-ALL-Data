const { v4: uuidv4 } = require('uuid');

let posts = [
  {
    id: uuidv4(),
    username: "john_doe",
    post: "Exploring JavaScript arrays is so interesting!"
  },
  {
    id: uuidv4(),
    username: "tech_guru",
    post: "Just discovered the power of closures in JavaScript!"
  },
  {
    id: uuidv4(),
    username: "coder_bae",
    post: "Finally deployed my portfolio website!"
  },
  {
    id: uuidv4(),
    username: "java_master",
    post: "Lambda expressions are a game changer in Java!"
  },
  {
    id: uuidv4(),
    username: "dev_life",
    post: "Writing clean code is an art. #CodingLife"
  },
  {
    id: uuidv4(),
    username: "frontend_pro",
    post: "CSS grid makes layouts so much easier!"
  },
  {
    id: uuidv4(),
    username: "backend_wizard",
    post: "Node.js is so fast for handling backend requests."
  },
  {
    id: uuidv4(),
    username: "data_geek",
    post: "Visualizing data with D3.js is so satisfying!"
  },
  {
    id: uuidv4(),
    username: "code_ninja",
    post: "Practicing competitive programming every day!"
  },
  {
    id: uuidv4(),
    username: "ai_enthusiast",
    post: "Exploring TensorFlow for deep learning projects."
  }
];

//   ImportatatTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

var methodOverride = require('method-override')


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'))



// ??????????????????????????????????????????

app.listen(port, () => {
  console.log("Listening to Port:", port);
  // console.log(posts);
});

app.get("/posts", (req, res) => {
  res.render("posts.ejs", { posts });
});
app.get("/posts/new", (req, res) => {
  res.render("form.ejs");
});

app.post("/posts", (req, res) => {

  let { username, post } = req.body;
  let id = uuidv4();
  posts.push({ id, username, post });
  console.log(posts);
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  console.log("-----------", id);
  for (post of posts) {
    // console.log();
    if (post.id == id) {
      res.render("show.ejs", { post }
      );
    }
  }
});

app.get("/posts/:id/edit", (req, res) => {

  let { id } = req.params;
  console.log("-----------", id);
  for (post of posts) {
    // console.log();
    if (post.id == id) {
      res.render("editForm.ejs", { post }
      );
    }
  }
});

app.patch("/posts/:id", (req, res) => {
  let { newcontent } = req.body;
  let { id } = req.params;


  for (post of posts) {

    console.log(id, "  ", post.id);
    if (post.id == id) {
      console.log(id, "==", post.id);

      post.post = newcontent;
      console.log(post);
      res.render("editForm.ejs", { post }
      );


    }
  }

});

app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  console.log("deleteed");
 posts=posts.filter((p)=>id!==p.id);
 console.log(posts);
      res.redirect("/posts");
      


  

});