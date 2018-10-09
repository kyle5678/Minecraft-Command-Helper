function generate() {
    var Message = document.getElementById("message").value;

    var Player = document.getElementById("to-player");
    var PlayerSelector = Player.options[Player.selectedIndex].value;
    var PlayerName = document.getElementById("to-player-name").value;

    if (PlayerSelector == "playername")
        PlayerSelector = PlayerName;

    if (PlayerSelector == "noplayer") {
        alert("Please select a player to send the message to!!!")
    } else {
        Command = document.getElementById("command");
        Command.innerHTML = "/msg " + PlayerSelector + " " + Message;
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