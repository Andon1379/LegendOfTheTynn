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

class ThreadPass {

  constructor(password, destination){
    this.password = hashCode(password);
    this.destination = destination;
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

// MONDAY POSTS
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
threads[0].addChild(new Post("Neil Falk",         Date.parse("2024-04-21T08:32:00"), "<style font-style: italic;>Neil Falk has left the Tynn Society Forum.</style>"));
threads[0].addChild(new Post("Ananta Dimov",      Date.parse("2024-04-21T08:34:00"), "?"));
threads[0].addChild(new Post("Chloe Havener",     Date.parse("2024-04-21T08:35:00"), "classic neil guys"));
threads[0].addChild(new Post("Jim Tibbett",       Date.parse("2024-04-21T08:36:00"), "This seems like an accident. I certainly had no involvement in this."));
threads[0].addChild(new Post("Rajkumari Carlyle", Date.parse("2024-04-21T08:39:00"), "LMAO Neil"));
threads[0].addChild(new Post("Diedre Everly",     Date.parse("2024-04-21T08:39:00"), "Neil's new to this forum, right?"));
threads[0].addChild(new Post("Benedict Brutus",   Date.parse("2024-04-21T08:41:00"), "Think so. He's getting up there isn't he"));
threads[0].addChild(new Post("Diedre Everly",     Date.parse("2024-04-21T08:45:00"), "Yes, 32 and counting")); // you say this as if 32 is really old LOL 
threads[0].addChild(new Post("Ananta Dimov",      Date.parse("2024-04-21T08:46:00"), "He's trying his best"));
threads[0].addChild(new Post("Jim Tibbett",       Date.parse("2024-04-21T08:51:00"), "It was an accident. I'll add him back. Have a great day, everyone. And remember, the applications for new members begin tomorrow."));


// TUESDAY POSTS
threads[1] = new Thread("Rajkumari Carlyle",      Date.parse("2024-04-21T01:49:00"), "I snuck over to Clark tn. No monsters here", "", "");
threads[1].addChild(new Post("Chloe Havener",     Date.parse("2024-04-21T01:51:00"), "clark schmark that just makes it lamer"));
threads[1].addChild(new Post("Nikos Shen",        Date.parse("2024-04-21T01:52:00"), "SMART idea Rajku. I Should just transfer out of here"));
threads[1].addChild(new Post("Diedre Everly",     Date.parse("2024-04-21T01:55:00"), "I wouldn't think that, Nikos. What if it follows you?"));
threads[1].addChild(new Post("Nikos Shen",        Date.parse("2024-04-21T01:56:00"), "Ughhhh you're right. It'll just find me agiain"));
threads[1].addChild(new Post("Chloe Havener",     Date.parse("2024-04-21T01:58:00"), "i for one love our little freak and want to find him"));
threads[1].addChild(new Post("Ananta Dimov",      Date.parse("2024-04-21T02:00:00"), "Oh, same. Want to hang tomorrow to search for clues"));
threads[1].addChild(new Post("Benedict Brutus",   Date.parse("2024-04-21T02:10:00"), "Oooh… tough luck, Ananta"));
threads[1].addChild(new Post("Ananta Dimov",      Date.parse("2024-04-21T02:11:00"), "I know, thanks"));


threads[2] = new Thread("Jim Tibbett", Date.parse("2024-04-21T08:15:00"), "NEW MEMBER APPLICATIONS", `Greetings, all. Today is the first day of new member applications. Welcome to all prospective new members. Applying is simple. We are expecting a lot of interest. Simply identify the name and retailer of our New Member's Beverage and imbibe it FULLY to apply. Do note that the beverage can only be ordered between the hours of 4 and 5 PM Eastern Standard, Tuesday through Friday.
<br>
"THE TYNN SOCIETY'S ODE TO DUNKIN'"
<br>
<b>I</b>t's <b>n</b>ot <b>t</b>he <b>l</b>ightest <b>o</b>nus <b>o</b>ne <b>c</b>ould <b>b</b>ear<br>
<b>t</b>o <b>s</b>pend <b>f</b>our <b>y</b>ears <b>a</b>t <b>w</b>orcester-P-I -- <b>w</b>here<br>
---<br>
<b>t</b>he <b>n</b>ever <b>e</b>nding <b>c</b>ourse-loads <b>a</b>re <b>r</b>elentless,<br>
<b>a</b>nd <b>n</b>o <b>r</b>espite <b>a</b>ppears <b>t</b>o <b>c</b>ircumvent <b>t</b>his,<br>
---<br>
<b>a</b>nd <b>u</b>ndead <b>s</b>tudents' <b>s</b>tupors <b>l</b>ast <b>b</b>etween<br>
<b>i</b>nfrequent, <b>f</b>leeting <b>h</b>ighs <b>f</b>rom <b>i</b>ced <b>c</b>affeine --<br>
---<br>
<b>i</b>ndeed, <b>w</b>e <b>h</b>ave <b>n</b>o <b>c</b>hoice <b>b</b>ut <b>c</b>ower <b>h</b>ere<br>
<b>w</b>here <b>f</b>orces (strange <b>o</b>r <b>c</b>ommon) <b>i</b>nvoke <b>f</b>ear.<br>
---<br>
<b>T</b>hat's <b>w</b>hy, <b>w</b>hen <b>f</b>acing <b>l</b>ong <b>n</b>adirs <b>a</b>nd <b>f</b>unks,<br>
<b>o</b>ur <b>T</b>YNN <b>S</b>OCIETY <b>a</b>lways <b>s</b>tops <b>a</b>t <b>D</b>UNKS!<br>
<br>
And your hint:<br>
<br>
3<br>
4<br>
---<br>
2<br>
2<br>
---<br>
2<br>
6<br>
---<br>
8<br>
6<br>
---<br>
6<br>
1<br>
<br>
Good luck, new members!<br>
<br>
And remember: the New Member's Beverage is to be ordered and imbibed Tuesday through Friday, 4 to 5 P.M. E.S.T. ONLY. Induction can only begin if the drink is finished in front of an employee. Following instructions is a valuable skill for any prospective Tynn Society member. For your own safety, attempt to minimize the number of sips or gulps taken when consuming the New Member's Beverage. Good luck!`, "");
threads[2].addChild(new Post("Nikos Shen",        Date.parse("2024-04-21T11:12:00"), "LMAO this hangmanle makes no sense. Who wrote this???"));
threads[2].addChild(new Post("Jim Tibbett",       Date.parse("2024-04-21T11:16:00"), "Nikos, we've told you how to solve these already. Does Vigenère ring a bell to you?"));
threads[2].addChild(new Post("Ananta Dimov",      Date.parse("2024-04-21T11:20:00"), "Now that's my bread and butter. I wish I had a hangmanle like this."));
threads[2].addChild(new Post("Neil Falk",         Date.parse("2024-04-21T13:04:00"), "reminder: add vinegar to gocery list Send Message."));
threads[2].addChild(new Post("Chloe Havener",     Date.parse("2024-04-21T13:05:00"), "this isnt the notes app neil"));
threads[2].addChild(new Post("Angelina Asmodeus", Date.parse("2024-04-21T15:33:00"), "wait i think im on the wrong website"));
threads[2].addChild(new Post("Angelina Asmodeus", Date.parse("2024-04-21T15:33:00"), "<style font-style:italic;>Angelina Asmodeus left the Tynn Society Forum.</style>"));
threads[2].addChild(new Post("Diedre Everly",     Date.parse("2024-04-21T15:35:00"), "Huh. That's odd"));
threads[2].addChild(new Post("Chloe Havener",     Date.parse("2024-04-21T15:37:00"), "maybe she couldn't handle the heat"));
threads[2].addChild(new Post("Rajkumari Carlyle", Date.parse("2024-04-21T15:37:00"), "Oh definitely"));
threads[2].addChild(new Post("Jim Tibbett",       Date.parse("2024-04-21T15:38:00"), "Hmmm… whatever it is we must make sure they keep us a secret. Do your best to disseminate any leaks."));
threads[2].addChild(new Post("Benedict Brutus",   Date.parse("2024-04-21T15:40:00"), "Not the first website I'd leak"));
threads[2].addChild(new Post("Diedre Everly",     Date.parse("2024-04-21T15:41:00"), "Jim, I'll keep my ears open"));


// Wednesday posts! 
// TODO: ADD YOUTUBE LINK
// TODO: add password too
threads[3] = new Thread("Rajkumari Carlyle",      Date.parse("2024-04-21T08:15:00"), "Mornin, anything I missed?", "", "")
threads[3].addChild(new Post("Benedict Brutus",   Date.parse("2024-04-21T21:52:00"), "check this out y'all: IMG_2231.mov"));
threads[3].addChild(new Post("Ananta Dimov",      Date.parse("2024-04-21T21:52:00"), "I cant see the file"));
threads[3].addChild(new Post("Jim Tibbett",       Date.parse("2024-04-21T21:53:00"), "Benedict, what did you mean to post?"));
threads[3].addChild(new Post("Rajkumari Carlyle", Date.parse("2024-04-21T21:53:00"), "Ha, you're acting like Neil!"));
threads[3].addChild(new Post("Neil Falk",         Date.parse("2024-04-21T21:53:00"), "Hey, I've got feelings too, and I am getting better at this."));
threads[3].addChild(new Post("Benedict Brutus",   Date.parse("2024-04-21T21:53:00"), `check this out. the pw is the first name of our founder.<br>
<div id="pwd-entry" style="display: flex; flex-direction: column; justify-content: space-evenly; align-items: center; width: 70%;">
  <input id="pwd-input${1}" type="text" placeholder="Password" style="font-size: 12px;">
  <button name="button" id="pwd-submit${1}" style="font-size: 12px;">Submit</button> 
</div>`));

threads[3].addChild(new Post("Chloe Havener",     Date.parse("2024-04-21T21:54:00"), "yesss it finally happened"));
threads[3].addChild(new Post("Nikos Shen",        Date.parse("2024-04-21T21:55:00"), "WOAH is that real???"));
threads[3].addChild(new Post("Rajkumari Carlyle", Date.parse("2024-04-21T21:55:00"), "As real as ever."));
threads[3].addChild(new Post("Jim Tibbett",       Date.parse("2024-04-21T22:04:00"), "Everything is proceeding as planned. The Tynn will be satisfied with this."));
threads[3].addChild(new Post("Benedict Brutus",   Date.parse("2024-04-21T22:10:00"), "this should be enough now right? we should be done for now?"));
threads[3].addChild(new Post("Chloe Havener",     Date.parse("2024-04-21T22:12:00"), "be patient lol you said that last time"));



darkPage = { pass:"creature", destination:"dark_home.html", timeStamp:Date.parse("23 Apr 2024 15:30:00")};
// TODO: add link from fake homepage to forum 

// forum needs to be accessible monday, 
// real homepage needs to be acessible tuesday  

hangmanglePasswords = ["party","nabo","tamhlvf", "oetaqgctsqp", "sttwfjmfjzxzcbvwcye"];
postPasses = [];
postPasses[0] = new ThreadPass("ernst", "www.google.com")

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
            if (thread.passhash === 0) {tmpThread.passHash = -1;}
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

app.post('/forum/pass', (req, res) => {
  postPasses.forEach((post, index) => {
    if((post.passHash == 0 || req.body.passHash == post.passHash) && req.body.index == index) {
      res.send({index:index, destination: post.destination});
    }
  })
})


app.get('/mainPage/:pass', (req, res) => {
  if(req.pass.toLowerCase() == darkPage.pass && Date.now() - darkPage.timeStamp >= 0) {
    res.send({dest:darkPage.destination})
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
