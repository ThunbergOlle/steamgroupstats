const request = require('request');
const convert = require('xml-to-json-promise');
exports.getstats = function(group, callback){
    if(typeof group == "string"){
        request({
            uri: '/groups/'+group+'/memberslistxml',
            baseUrl: 'https://steamcommunity.com/',
            qs: 'xml=1'
        }, function(err, res, body){
            if(err) throw err;
            convert.xmlDataToJSON(body).then(json =>{
                
                var totalmembers = json.memberList.memberCount;
                var id = json.memberList.groupID64;
                var groupdetails = json.memberList.groupDetails[0];
                var name = groupdetails.groupName;
                var headline = groupdetails.headline;
                var icon = groupdetails.avatarIcon;
                var online = groupdetails.membersOnline;
                var ingame = groupdetails.membersInGame;
                var inchat = groupdetails.membersInChat;
                data = {totalmembers: totalmembers, id: id, groupdetails: groupdetails, name: name, headline: headline, icon: icon, online: online, ingame: ingame, inchat: inchat};
                callback(null, data);
                //console.log(groupdetails);
            });
        });
    }else {
        callback("[Module] getstats. Please input the group as a string value...");
    }
}