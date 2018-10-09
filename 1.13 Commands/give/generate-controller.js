function generate() {
    var Player = document.getElementById("to-player");
    var PlayerSelector = Player.options[Player.selectedIndex].value;
    var PlayerName = document.getElementById("to-player-name").value;

    var Items = document.getElementById("item");
    var Item = Items.options[Items.selectedIndex].value;

    if (PlayerSelector == "playername")
        PlayerSelector = PlayerName;

    if (PlayerSelector == "noplayer") {
        alert("Please select a player to give the item to!!!")
    } else {
        Command = document.getElementById("command");
        Command.innerHTML = "/give " + PlayerSelector + " minecraft:" + Item;
    }
}

function copycommand() {
    var Command = document.getElementById("command");

    Command.disabled = false;
    Command.select();
    document.execCommand("copy");
    Command.disabled = true;
}

function toplayerchanged() {
    var Player = document.getElementById("to-player");
    var PlayerSelector = Player.options[Player.selectedIndex].value;

    var Name = document.getElementById("to-player-name");
    if (PlayerSelector == "playername")
        Name.style.visibility = "visible";
    else
        Name.style.visibility = "hidden";
}