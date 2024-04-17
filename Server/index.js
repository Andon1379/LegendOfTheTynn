// https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events
// https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events
// https://javascript.info/server-sent-events
// https://expressjs.com/en/starter/hello-world.html
// https://www.npmjs.com/package/node-static


// const Thread = require('./classes.js').Thread;
// const Post = require("./classes.js").Post;
// import {Thread, Post} from './classes.js';
// imports weren't working 

class Thread {

  constructor(threadOwner, timeStamp, title, content, password) {
    this.threadOwner = threadOwner; 
    this.timeStamp = timeStamp;
    this.title = title;
    this.content = content;
    this.passhash = hashCode(password);
    this.destination = "/forum_template/Forum_Template.html"

    this.children = [];
  }

  addChild(post) {
    // todo: check if child has an owner already

    // post.postOwner = this;  // this causes recursion!
    this.children.push(post);
  }

}

class Post {

  constructor(postAuthor, timeStamp, content) {
    // this.postOwner;
    this.postAuthor = postAuthor;
    this.content = content;
    this.timeStamp = timeStamp;
  }

}


var hashCode = function(s) {
  var h = 0, l = s.length, i = 0;
  if ( l > 0 )
    while (i < l)
      h = (h << 5) - h + s.charCodeAt(i++) | 0;
  return h;
};


const express = require('express');
// const http = require("http");
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
// assuming we wont need websockets

port = 3000;

threads = [];
threads[0] = new Thread("ThreadOwner", Date.now()-100, "Post Title", "Post Contnet lol", "wmonp womp");
threads[0].addChild(new Post("PostOwner", Date.now()-50, "Lorum Ipsum Sit Alor fdsjfalskdjf;lks whatever the fucking thing was"))


// helper functions
const timeLog = (req, res, next) => {
    var curTime = new Date();
    let curMin = (curTime.getHours()*60)+curTime.getMinutes();
    console.log(`[${(curMin - (curMin % 60) )/ 60}:${curMin%60}]: ${req.method} at ${req.originalUrl}`);
    next()
}

app.use(timeLog)
app.use('/pages', express.static('pages'));

app.get('/', (req, res) => {
    // console.log("");
    console.log(req.params);
    toSend = [];
    threads.forEach(thread => {
        if(thread.timeStamp - Date.now() <= 0) {
            var tmpThread = new Thread(thread.threadOwner, thread.timeStamp, thread.title, thread.content, thread.password);
            thread.children.forEach(e=>{
              if(e.timeStamp - Date.now() <= 0) {tmpThread.addChild(new Post(e.postAuthor, e.timeStamp, e.content))}
            })
            toSend.push(tmpThread);
        }
    });

    res.send(JSON.stringify(toSend));
});

app.get('/verify', (req, res) => {
  threads.forEach(thread =>{
    if(req.body.passhash == thread.passhash) {
      res.send(thread.destination); 
    }
  });
   
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})