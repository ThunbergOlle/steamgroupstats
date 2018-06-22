const steamgroup = require('./index.js');

steamgroup.getstats("unturnedgametrade", function(err, group){
    if(err) throw err;
    console.log(group.icon);
});