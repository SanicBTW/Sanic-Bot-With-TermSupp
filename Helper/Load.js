//Redo the detection system lol
//The commands detection system is really fucking dumb

const { channelidslist, loaderstuff, commands, } = require('./Lists');
const { optionlist } = require('../Commands/Settings');
const TerminalSettings = require('../Config/TerminalSettings.json');
const Log = require('./Log');
//const { debuglogs } = require('../Config/TerminalSettings.json');
const Commands = require('./Commands.json');

/**
 * 
 * @param {String} wtload - Currently available: ChannelIDS, Settings, Commands
 */
module.exports = (wtload) => {
    var LoadedIDSCount = 0;
    var LoadedSettingsCount = 0;
    var LoadedCommandsCount = 0;

    var SettingsLoaded = false; //Kind of dumb ngl

    if(loaderstuff[0].saidloaded == false){
        //Dumb fix but it works
        Log("Trying to load stuff...", 0);
        loaderstuff[0].saidloaded = true;
    }

    if(wtload == "Channel IDS")
    {
        Log("Loading Channel IDS...", 0);
        const channelidsstuff = require('./ChannelIDS.json');

        channelidslist[0].name = channelidsstuff.fstchnlid.name;
        channelidslist[0].chnlid = channelidsstuff.fstchnlid.chnlid;

        //do a setting to made debug stuff visible or smth

        if(channelidsstuff.fstchnlid.chnlid.length == 18){
            LoadedIDSCount ++;
        }
    
        channelidslist[1].name = channelidsstuff.scndchnlid.name;
        channelidslist[1].chnlid = channelidsstuff.scndchnlid.chnlid;

        if(channelidsstuff.scndchnlid.chnlid.length == 18){
            LoadedIDSCount ++;
        }
    
        channelidslist[2].name = channelidsstuff.thrdchnlid.name;
        channelidslist[2].chnlid = channelidsstuff.thrdchnlid.chnlid;

        if(channelidsstuff.thrdchnlid.chnlid.length == 18){
            LoadedIDSCount ++;
        }
    
        channelidslist[3].name = channelidsstuff.fthchnlid.name;
        channelidslist[3].chnlid = channelidsstuff.fthchnlid.chnlid;
    
        if(channelidsstuff.fthchnlid.chnlid.length == 18){
            LoadedIDSCount ++;
        }

        channelidslist[4].name = channelidsstuff.fifthchlid.name;
        channelidslist[4].chnlid = channelidsstuff.fifthchlid.chnlid;

        if(channelidsstuff.fifthchlid.chnlid.length == 18){
            LoadedIDSCount ++;
        }
    
        channelidslist[5].name = channelidsstuff.sixthchnlid.name;
        channelidslist[5].chnlid = channelidsstuff.sixthchnlid.chnlid;
    
        if(channelidsstuff.sixthchnlid.chnlid.length == 18){
            LoadedIDSCount ++;
        }

        channelidslist[6].name = channelidsstuff.svnthchnlid.name;
        channelidslist[6].chnlid = channelidsstuff.svnthchnlid.chnlid;

        if(channelidsstuff.svnthchnlid.chnlid.length == 18){
            LoadedIDSCount ++;
        }
    
        channelidslist[7].name = channelidsstuff.eigthchnlid.name;
        channelidslist[7].chnlid = channelidsstuff.eigthchnlid.chnlid;

        if(channelidsstuff.eigthchnlid.chnlid.length == 18){
            LoadedIDSCount ++;
        }
    
        channelidslist[8].name = channelidsstuff.nnthchnlid.name;
        channelidslist[8].chnlid = channelidsstuff.nnthchnlid.chnlid;

        if(channelidsstuff.nnthchnlid.chnlid.length == 18){
            LoadedIDSCount ++;
        }
    
        channelidslist[9].name = channelidsstuff.tnthchnlid.name;
        channelidslist[9].chnlid = channelidsstuff.tnthchnlid.chnlid;

        if(channelidsstuff.tnthchnlid.chnlid.length == 18){
            LoadedIDSCount ++;
        }
    
        channelidslist[10].name = channelidsstuff.elvnthchnlid.name;
        channelidslist[10].chnlid = channelidsstuff.elvnthchnlid.chnlid;

        if(channelidsstuff.elvnthchnlid.chnlid.length == 18){
            LoadedIDSCount ++;
        }
        
        channelidslist[11].name = channelidsstuff.twlvchnlid.name;
        channelidslist[11].chnlid = channelidsstuff.twlvchnlid.chnlid;

        if(channelidsstuff.twlvchnlid.chnlid.length == 18){
            LoadedIDSCount ++;
        }
    
        channelidslist[12].name = channelidsstuff.thrtnchnlid.name;
        channelidslist[12].chnlid = channelidsstuff.thrtnchnlid.chnlid;

        if(channelidsstuff.thrtnchnlid.chnlid.length == 18){
            LoadedIDSCount ++;
        }
    
        channelidslist[13].name = channelidsstuff.frtnchnlid.name;
        channelidslist[13].chnlid = channelidsstuff.frtnchnlid.chnlid;

        if(channelidsstuff.frtnchnlid.chnlid.length == 18){
            LoadedIDSCount ++;
        }
    
        channelidslist[14].name = channelidsstuff.ftennchnlid.name;
        channelidslist[14].chnlid = channelidsstuff.ftennchnlid.chnlid;

        if(channelidsstuff.ftennchnlid.chnlid.length == 18){
            LoadedIDSCount ++;
        }
        
        channelidslist[15].name = channelidsstuff.sxtennchnlid.name;
        channelidslist[15].chnlid = channelidsstuff.sxtennchnlid.chnlid;

        if(channelidsstuff.sxtennchnlid.chnlid.length == 18){
            LoadedIDSCount ++;
        }
    
        channelidslist[16].name = channelidsstuff.svtnchnlid.name;
        channelidslist[16].chnlid = channelidsstuff.svtnchnlid.chnlid;

        if(channelidsstuff.svtnchnlid.chnlid.length == 18){
            LoadedIDSCount ++;
        }
    
        channelidslist[17].name = channelidsstuff.eitnchnlid.name;
        channelidslist[17].chnlid = channelidsstuff.eitnchnlid.chnlid;

        if(channelidsstuff.eitnchnlid.chnlid.length == 18){
            LoadedIDSCount ++;
        }
    
        channelidslist[18].name = channelidsstuff.nnthchnlid.name;
        channelidslist[18].chnlid = channelidsstuff.nnthchnlid.chnlid;

        if(channelidsstuff.nnthchnlid.chnlid.length == 18){
            LoadedIDSCount ++;
        }
    
        channelidslist[19].name = channelidsstuff.twntchnlid.name;
        channelidslist[19].chnlid = channelidsstuff.twntchnlid.chnlid;

        if(channelidsstuff.twntchnlid.chnlid.length == 18){
            LoadedIDSCount ++;
        }
    
        channelidslist[20].name = channelidsstuff.twntochnlid.name;
        channelidslist[20].chnlid = channelidsstuff.twntochnlid.chnlid;

        if(channelidsstuff.twntochnlid.chnlid.length == 18){
            LoadedIDSCount ++;
        }
        
        if(LoadedIDSCount == 0){
            Log(`Couldn't find any Channel ID`, 3);
        } else if (LoadedIDSCount == 1) {
            Log(`Finished loading ${LoadedIDSCount} Channel ID`, 1); //real dumb 
        } else {
            Log(`Finished loading ${LoadedIDSCount} Channel IDS`, 1);
        }
    }
    else if (wtload == "Options")
    {
        Log("Loading Settings...", 0);

        optionlist[0].state = TerminalSettings.clearconsoleoptions.state;

        if(TerminalSettings.clearconsoleoptions.state.length > 1){
            LoadedSettingsCount ++;
        }

        optionlist[1].value = TerminalSettings.consoletitleoption.value;

        if(TerminalSettings.consoletitleoption.value.length > 1){
            LoadedSettingsCount ++;
        }

        optionlist[2].state = TerminalSettings.displaytermveroption.state;

        if(TerminalSettings.displaytermveroption.state.length > 1){
            LoadedSettingsCount ++;
        }

        //Real fucking dumb
        optionlist[3].state = TerminalSettings.useconsole.state;

        if(TerminalSettings.useconsole.state.length > 1){
            LoadedSettingsCount ++;
        }

        optionlist[4].state = TerminalSettings.debuglogs.state;

        if(TerminalSettings.debuglogs.state.length > 1){
            LoadedSettingsCount ++;
        }

        //cant be impossible to have 0 settings loaded lol
        Log(`Finished loading ${LoadedSettingsCount} Settings`, 1);
        //SettingsLoaded = true;
    }
    else if (wtload == "Commands")
    {
        //Order should be = name, argX (if it exists), argtip (if it exists)
        Log("Loading commands...", 0);

        commands[0].name = Commands.PrimerCMD.name;
        
        if(commands[0].name == Commands.PrimerCMD.name){
            LoadedCommandsCount ++;
        }

        commands[1].name = Commands.SegundoCMD.name;
        commands[1].argtip = Commands.SegundoCMD.argtip;
        
        if(commands[1].name == Commands.SegundoCMD.name){
            LoadedCommandsCount ++;
        }

        commands[2].name = Commands.TercerCMD.name;

        if(commands[2].name == Commands.TercerCMD.name){
            LoadedCommandsCount ++;
        }

        commands[3].name = Commands.CuartoCMD.name;
        commands[3].arg1 = Commands.CuartoCMD.arg1;
        commands[3].arg2 = Commands.CuartoCMD.arg2;
        commands[3].arg3 = Commands.CuartoCMD.arg3;

        if(commands[3].name == Commands.CuartoCMD.name){
            LoadedCommandsCount ++;
        }

        commands[4].name = Commands.QuintoCMD.name;
        commands[4].arg1 = Commands.QuintoCMD.arg1;

        if(commands[4].name == Commands.QuintoCMD.name){
            LoadedCommandsCount ++;
        }

        commands[5].name = Commands.SextoCMD.name;
        commands[5].arg1 = Commands.SextoCMD.arg1;

        if(commands[5].name == Commands.SextoCMD.name){
            LoadedCommandsCount ++;
        }

        commands[6].name = Commands.SeptimoCMD.name;
        commands[6].argtip = Commands.SeptimoCMD.argtip;

        if(commands[6].name == Commands.SeptimoCMD.name){
            LoadedCommandsCount ++;
        }

        commands[7].name = Commands.OctavoCMD.name;
        commands[7].arg1 = Commands.OctavoCMD.arg1;
        commands[7].argtip = Commands.OctavoCMD.argtip;

        if(commands[7].name == Commands.OctavoCMD.name){
            LoadedCommandsCount ++;
        }

        commands[8].name = Commands.NovenoCMD.name;
        commands[8].arg1 = Commands.NovenoCMD.arg1;
        commands[8].arg2 = Commands.NovenoCMD.arg2;
        commands[8].argtip = Commands.NovenoCMD.argtip;

        if(commands[8].name == Commands.NovenoCMD.name){
            LoadedCommandsCount ++;
        }

        commands[9].name = Commands.DecimoCMD.name;

        if(commands[9].name == Commands.DecimoCMD.name){
            LoadedCommandsCount ++;
        }

        Log(`Finished loading ${LoadedCommandsCount} Commands`, 1);
    }
}