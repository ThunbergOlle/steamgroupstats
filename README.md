# Steam-groups
This is an easy to use module that gets all the members from a steamgroup and outputs them as an object.
This module was made and published by [OlleThunberg](https://github.com/ThunbergOlle).
If you are looking for only getting the steamids of the members then check out [this](https://www.npmjs.com/package/node-steam-group) module.

**Contribute:**[Github](https://github.com/ThunbergOlle/steamgroupstats)



**Install**
```js
npm install steam-group-stats --save
```
**Import**
```js
const steamgroup = require('steam-group-stats');
```

## Methods
```js
steamgroup.getstats("unturnedgametrade", function(err, callback){});
```
- callback.id: Gets the id of the group.
- callback.totalmembers: Gets the total amount of members of the group.
- callback.name: Gets the name of the steamgroup. (Not the URL)
- callback.headline: Gets the headline of the steamgroup.
- callback.icon: Gets the avatar icon URL of the steamgroup.
- callback.online: Gets the current amount of members that's online.
- callback.ingame: Gets the current amount of members that's in game.
- callback.inchat: Gets the current amount of members that's in chat.
#### Example in JS format
```js
steamgroup.getstats("unturnedgametrade", function(err, callback){
    console.log(callback.id);
    console.log(callback.name);
    console.log(callback.headline);
    //And so on. 
});
```


## Examples
**You can copy and paste these!**

### Get all info about group
```js
steamgroup.getstats("unturnedgametrade", function(err, group){
    if(err) throw err;
    console.log(group);
});
```

**Output**
```
{ totalmembers: [ '22' ],
  id: [ '103582791460358474' ],
  groupdetails:
   { groupName: [ 'UnturnedGame.com' ],
     groupURL: [ 'unturnedgametrade' ],
     headline: [ ' Giveaways and Community Group!' ],
     summary: [ '<a class="bb_link" href="htt...........
```

### Get the id of the group
```js
steamgroup.getstats("unturnedgametrade", function(err, group){
    if(err) throw err;
    console.log(group.id);
});
```
**Output**
```
[ '103582791460358474' ]
```

### Get the amount of online members
```js
steamgroup.getstats("unturnedgametrade", function(err, group){
    if(err) throw err;
    console.log(group.online);
});
```
**Output**
```
[ '4' ]
```
### Get the icon of the steamgroup
```js
steamgroup.getstats("unturnedgametrade", function(err, group){
    if(err) throw err;
    console.log(group.icon);
});
```
**Output**
```
[ 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/ce/ce99ef9c0cf05071aef380294f0cd9aefd431256.jpg' ]
```

### More info
I'm really **happy** if you'd like to share this module or use this in your upcomming bot or script or whatever you are going to use this for. If you feel like there is anything missing then please open an issue on the [Github](https://github.com/ThunbergOlle/steamgroupstats) page. I will fix it as soon as possible.

## License
MIT License

Copyright (c) 2018 Olle Thunberg

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
