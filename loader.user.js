// ==UserScript==
// @name         Simple TP
// @namespace    http://tampermonkey.net/
// @version      2023-12-15
// @description  Allows user to teleport around beta maps(may not work with full release version of maps)
// @author       Sara597
// @match        https://www.bondageprojects.elementfx.com/R98/798410981042/
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

CommandCombine([
    {
        Tag: 'tp',
        Description: ': teleports user to given coordinates(sample input: "/tp 10 23").',

        Action: args => {
            let _arr = args.split(" ");
            if(_arr.length != 2) return;
            let _x = parseInt(_arr[0]);
            let _y = parseInt(_arr[1]);
            if((_x > 39)||(_x < 0)||(_y > 39)||(_y < 0)) return;
            console.log(_arr[0]);
            console.log(_arr[1]);
            setTimeout(function() {
            SimpleTP(_x, _y);
        }, 1*100);
        }
    }
]);

function SimpleTP(_x, _y){
    Player.MapData = {"X": _x, "Y": _y};
    ServerSend("ChatRoomCharacterUpdate", {"MapData": Player.MapData});
    ChatRoomCharacterUpdate(Player);
}
