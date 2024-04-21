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
// threads[0] = new Thread("ThreadOwner", Date.now()-200, "Post Title", "Post Contnet lol", "password");
// threads[0].addChild(new Post("PostOwner", Date.now()-50, "Lorum Ipsum"))

// threads[1] = new Thread("ThreadOwner2", Date.now()-200, "post title 2", "electric boogaloo", "hello");
// threads[1].addChild(new Post("PostOwner1", Date.now()-50, "Child1"))
// threads[1].addChild(new Post("PostOwner2", Date.now()-50, "Child2"))

// threads[2] = new Thread("ThreadOwner3", Date.now()+200, "post title 2", "electric boogaloo", "hello");
// threads[2].addChild(new Post("PostOwner1", Date.now()+50, "Child1"))
// threads[2].addChild(new Post("PostOwner2", Date.now()+50, "Child2"))

threads[0] = new Thread("Ananta Dimov",           Date.parse("2024-04-21T00:13:00"), "ANy results of tonight's search??", "", ""); 
threads[0].addChild(new Post("Jim Tibbett",       Date.parse("2024-04-21T00:13:00"), "Nothing out of the ordinary."));
threads[0].addChild(new Post("Chloe Havener",     Date.parse("2024-04-21T00:14:00"), "oh really? alden halls suspicious to me"));
threads[0].addChild(new Post("Nikos Shen",        Date.parse("2024-04-21T00:14:00"), "But I was just there. it can't be!"));
threads[0].addChild(new Post("Rajkumari Carlyle", Date.parse("2024-04-21T00:16:00"), "Niko, love, it could be anywhere."));
threads[0].addChild(new Post("Jim Tibbett",       Date.parse("2024-04-21T00:18:00"), "Enough. The Tynn is at bay for now."));
threads[0].addChild(new Post("Benedict Brutus",   Date.parse("2024-04-21T00:19:00"), "for now?"));
threads[0].addChild(new Post("Diedre Everly",     Date.parse("2024-04-21T00:19:00"), "Yes. You guys worry too much"));
threads[0].addChild(new Post("Rajkumari Carlyle", Date.parse("2024-04-21T02:32:00"), "Is someone screaming outside???"));
threads[0].addChild(new Post("Ananta Dimov",      Date.parse("2024-04-21T02:33:00"), "Heard it too. Tynn is back?"));
threads[0].addChild(new Post("Chloe Havener",     Date.parse("2024-04-21T02:33:00"), "it's nikos"));
threads[0].addChild(new Post("Nikos Shen",        Date.parse("2024-04-21T02:34:00"), "GUYS")); // is bro pulling a 'boy who cried wolf?'
threads[0].addChild(new Post("Chloe Havener",     Date.parse("2024-04-21T02:35:00"), "yep"));
threads[0].addChild(new Post("Jim Tibbett",       Date.parse("2024-04-21T02:36:00"), "Nikos, cease your screaming. You'll attract attention. What's the matter?"));
threads[0].addChild(new Post("Nikos Shen",        Date.parse("2024-04-21T02:36:00"), "I SAW IT AT ALDEN"));
threads[0].addChild(new Post("Ananta Dimov",      Date.parse("2024-04-21T02:38:00"), "Ill add to the sightings map"));
threads[0].addChild(new Post("Rajkumari Carlyle", Date.parse("2024-04-21T02:40:00"), "Sure you saw it."));
threads[0].addChild(new Post("Benedict Brutus",   Date.parse("2024-04-21T02:41:00"), "did last weeks work go to waste?"));
threads[0].addChild(new Post("Jim Tibbett",       Date.parse("2024-04-21T02:43:00"), "Do not fear. We have everything under control."));
threads[0].addChild(new Post("Diedre Everly",     Date.parse("2024-04-21T02:44:00"), "Nikos, are you safe?"));
threads[0].addChild(new Post("Nikos Shen",        Date.parse("2024-04-21T02:47:00"), "I'm fine. I'm back at my dorm."));
threads[0].addChild(new Post("Jim Tibbett",       Date.parse("2024-04-21T02:49:00"), "Good. Nikos, are you certain you saw the Tynn?"));
threads[0].addChild(new Post("Nikos Shen",        Date.parse("2024-04-21T02:50:00"), "Yes. I didn't get a good look though."));
threads[0].addChild(new Post("Chloe Havener",     Date.parse("2024-04-21T02:51:00"), "sounds like you're jumping the gun again. how many times have you said that?"));
threads[0].addChild(new Post("Benedict Brutus",   Date.parse("2024-04-21T02:52:00"), "Well what if it is real? what then?"));
threads[0].addChild(new Post("Jim Tibbett",       Date.parse("2024-04-21T02:55:00"), "I'll report this as an official incident just in case. Everyone, I need you to stay vigilant throughout the next couple of days. The Tynn may not be satisfied with us."));
threads[0].addChild(new Post("Ananta Dimov",      Date.parse("2024-04-21T02:57:00"), "Noted"));
threads[0].addChild(new Post("Nikos Shen",        Date.parse("2024-04-21T02:58:00"), "Ok. I'll decompress"));
threads[0].addChild(new Post("Diedre Everly",     Date.parse("2024-04-21T03:01:00"), "Y'all should go to bed"));
threads[0].addChild(new Post("Rajkumari Carlyle", Date.parse("2024-04-21T03:02:00"), "Nah"));
threads[0].addChild(new Post("Neil Falk",         Date.parse("2024-04-21T08:30:00"), "Greetings, everyone. Bit of a rough night, eh?"));
threads[0].addChild(new Post("Ananta Dimov ",     Date.parse("2024-04-21T08:32:00"), "You could say that again. Tynn's at it again. If you believe Nikos, that is"));
threads[0].addChild(new Post("Neil Falk",         Date.parse("2024-04-21T08:32:00"), "Neil Falk has left the Tynn Society Forum."));
threads[0].addChild(new Post("Ananta Dimov",      Date.parse("2024-04-21T08:34:00"), "?"));
threads[0].addChild(new Post("Chloe Havener",     Date.parse("2024-04-21T08:35:00"), "classic neil guys"));
threads[0].addChild(new Post("Jim Tibbett",       Date.parse("2024-04-21T08:36:00"), "This seems like an accident. I certainly had no involvement in this."));
threads[0].addChild(new Post("Rajkumari Carlyle", Date.parse("2024-04-21T08:39:00"), "LMAO Neil"));
threads[0].addChild(new Post("Diedre Everly",     Date.parse("2024-04-21T08:39:00"), "Neil's new to this forum, right?"));
threads[0].addChild(new Post("Benedict Brutus",   Date.parse("2024-04-21T08:41:00"), "Think so. He's getting up there isn't he"));
threads[0].addChild(new Post("Diedre Everly",     Date.parse("2024-04-21T08:45:00"), "Yes, 32 and counting")); // you say this as if 32 is really old LOL 
threads[0].addChild(new Post("Ananta Dimov",      Date.parse("2024-04-21T08:46:00"), "He's trying his best"));
threads[0].addChild(new Post("Jim Tibbett",       Date.parse("2024-04-21T08:51:00"), "It was an accident. I'll add him back. Have a great day, everyone. And remember, the applications for new members begin tomorrow."));



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
    if((thread.passhash == 0 || req.body.passhash == thread.passhash) && req.body.index == index) {
      
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
