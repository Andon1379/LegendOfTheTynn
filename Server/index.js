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
    this.destination = "/forum_template/ForumThread.html"

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
  console.log(s)
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

// this should be in a json file
// we don't care about case!
threads = [];
threads[0] = new Thread("ThreadOwner", Date.now()-200, "Post Title", "Post Contnet lol", "password");
threads[0].addChild(new Post("PostOwner", Date.now()-50, "Lorum Ipsum"))

threads[1] = new Thread("ThreadOwner2", Date.now()-200, "post title 2", "electric boogaloo", "hello");
threads[1].addChild(new Post("PostOwner1", Date.now()-50, "Child1"))
threads[1].addChild(new Post("PostOwner2", Date.now()-50, "Child2"))

threads[2] = new Thread("ThreadOwner3", Date.now()+200, "post title 2", "electric boogaloo", "hello");
threads[2].addChild(new Post("PostOwner1", Date.now()+50, "Child1"))
threads[2].addChild(new Post("PostOwner2", Date.now()+50, "Child2"))



darkPage = { pass:"creature", destination:"dark_home.html", timeStamp:Date.parse("23 Apr 2024 15:30:00")};
// TODO: add link from fake homepage to forum 

// forum needs to be accessible monday, 
// real homepage needs to be acessible tuesday  

hangmanglePasswords = ["party","nabo","tamhlvf", "oetaqgctsqp", "sttwfjmfjzxzcbvwcye"];


// helper functions
const timeLog = (req, res, next) => {
    var curTime = new Date();
    let curMin = (curTime.getHours()*60)+curTime.getMinutes();
    console.log(`[${(curMin - (curMin % 60) )/ 60}:${curMin%60}]: ${req.method} at ${req.originalUrl}`);
    console.log(`req.params: ${JSON.stringify(req.params)}`);
    next()
}



function parseDate(day) { // for hangmangle passwords. day should be in dd-mm-yyyy format (w/ or w/o leading 0s)
  day = day.split('_');
  day = Date.parse(`${day[2]}-${day[1]}-${day[0]}`) - Date.parse("22 Apr 2024") // monday
  
  // prevent players from getting past today
  today = new Date()
  today = Date.parse(`${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`)
  day = Math.min(day, today)
  day = Math.round(day / (1000 * 3600 * 24)) - 1 // normalize for index
  
  if(day < 0) {day = 0} else if (day > 4) {day = 4}
  console.log(day);
  return day  	
}



app.use(timeLog)
app.use('/pages', express.static('pages'));

app.get('/forum', (req, res) => {
    // console.log("");
    console.log(req.params);
    toSend = [];
    threads.forEach(thread => {
        if(thread.timeStamp - Date.now() <= 0) {
            var tmpThread = new Thread(thread.threadOwner, thread.timeStamp, thread.title, thread.content, "");
            thread.children.forEach(e=>{
              if(e.timeStamp - Date.now() <= 0) {tmpThread.addChild(new Post(e.postAuthor, e.timeStamp, e.content))}
            })
            toSend.push(tmpThread);
        }
    });

    res.send(JSON.stringify(toSend));
});

app.get("/forum/id/:id", (req, res)=>{
  
  var id = req.params['id'];
  console.log(id)
  if(id == null) {res.end()} 
  toSend = {};

  if(threads[id].timeStamp - Date.now() <= 0) {
    var tmpThread = new Thread(threads[id].threadOwner, threads[id].timeStamp, threads[id].title, threads[id].content, "");
    threads[id].children.forEach(e=>{
      if(e.timeStamp - Date.now() <= 0) {tmpThread.addChild(new Post(e.postAuthor, e.timeStamp, e.content))}
    })
    res.send(tmpThread);
  }
  res.end();
});

app.post('/forum/verify', (req, res) => {
  console.log(req.body)
  threads.forEach((thread, index) =>{
    if(req.body.passhash == thread.passhash && req.body.index == index) {
      
      res.send({index: index, destination: thread.destination}); 

    }
  });
   
})


app.post('/mainPage/:pass', (req, res) => {
  if(req.pass.toLowerCase() == darkPage.pass && Date.now() - darkPage.timeStamp >= 0) {
    res.send(darkPage.destination)
  } else {res.end()}
}); 


app.get('/hangmanle/positions/:key/:day', (req, res) =>{
  console.log(`key: ${req.params['key']}, day: ${req.params['day']}`); // day needs to be in the format dd-mm-year (cant use whitespaces)
  
  var key = req.params['key'].charAt(0);
  var day = req.params['day'];

  var pass = hangmanglePasswords[parseDate(day)]

  pass = pass.split("").map((ele, ind)=>{ if(ele==key){return ind} else {return -1}})
  pass = pass.filter((ele) => ele >= 0);

  console.log(`returning: ${pass}`)
  res.send({positions:pass})

});

app.get('/hangmanle/length/:day', (req, res) =>{
  var day = req.params['day'];
  //console.log(hangmanglePasswords[parseDate(day)].length);
  res.send({length:hangmanglePasswords[parseDate(day)].length});
});

app.get('/hangmanle/canNext/:day',(req, res) => {
  console.log("accessed next")
  var day = req.params["day"];
  day = day.split('_');
  day = Date.parse(`${day[2]}-${day[1]}-${day[0]}`) - Date.parse("22 Apr 2024")
  
  var today = new Date()
  today = Date.parse(`${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`)
  
  resp = {next:false, prev:false}
  
  if(day < 0 ) {resp.next = true; resp.prev = false;}  
  else if(day > today) {resp.next = false; resp.prev = true;}
  else if(day === 0) {resp.next = false; resp.prev = false;}
  res.send(resp);
  
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
