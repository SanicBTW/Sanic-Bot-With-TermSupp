//Used to save values for the lastexecuted command for the terminal
//{ sprcmd: 'shutdown', exectimes: 0, lastusertoexec: 'user', latestexc: false}
var executedcmdslist = [
    { sprcmd: 'ping', exectimes: 0, lastusertoexec: 'user', latestexc: false},
    { sprcmd: 'changelog', exectimes: 0, lastusertoexec: 'user', latestexc: false},
    { sprcmd: 'play', exectimes: 0, lastusertoexec: 'user', latestexc: false}
];

//Really bad way to store a value but meh
//Plus doesn't really work for some reason so uh yeah
var defaultembedcolor = [
    { defaultcolor: '#0099ff', oldcolor: '#0099ff'}
];

//Gonna try to improve the channel ids system 
//The type should be normal or announcements, probably gonna work on this new sys whenever i feel like it
var channelidslist = [
    { chnlid: 0, name: ''}, //0
    { chnlid: 0, name: ''}, //1
    { chnlid: 0, name: ''}, //2
    { chnlid: 0, name: ''}, //3
    { chnlid: 0, name: ''}, //4
    { chnlid: 0, name: ''}, //5
    { chnlid: 0, name: ''}, //6
    { chnlid: 0, name: ''}, //7
    { chnlid: 0, name: ''}, //8
    { chnlid: 0, name: ''}, //9
    { chnlid: 0, name: ''}, //10
    //New slots
    { chnlid: 0, name: ''}, //11
    { chnlid: 0, name: ''}, //12
    { chnlid: 0, name: ''}, //13
    { chnlid: 0, name: ''}, //14
    { chnlid: 0, name: ''}, //15
    { chnlid: 0, name: ''}, //16
    { chnlid: 0, name: ''}, //17
    { chnlid: 0, name: ''}, //18
    { chnlid: 0, name: ''}, //19
    { chnlid: 0, name: ''}, //20
];

//I'm extremely fucking sorry for this, I don't know any other way to check if I'm playing music
var formusicstuff = [
    { curplayingmusic: true | false}
]

var quotesoptions = [

];


module.exports = {
    executedcmdslist,
    channelidslist,
    formusicstuff
}