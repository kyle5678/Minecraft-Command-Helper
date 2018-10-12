function generate() {
    var Player = document.getElementById("to-player");
    var PlayerSelector = Player.options[Player.selectedIndex].value;
    var PlayerName = document.getElementById("to-player-name").value;

    var XCoords = document.getElementById("x-coords").value;
    var YCoords = document.getElementById("y-coords").value;
    var ZCoords = document.getElementById("z-coords").value;

    var XRel = document.getElementById("x-relative");
    var YRel = document.getElementById("y-relative");
    var ZRel = document.getElementById("z-relative");

    if (PlayerSelector == "playername")
        PlayerSelector = PlayerName;

    if (PlayerSelector == "noplayer") {
        alert("Please select a player to teleport!!!")
    } else {
        Command = document.getElementById("command");
        Command.innerHTML = "/tp " + PlayerSelector + " ";

        if (XRel.classList.contains("check"))
            Command.innerHTML = Command.innerHTML + "~";
        Command.innerHTML = Command.innerHTML + XCoords + " ";

        if (YRel.classList.contains("check"))
            Command.innerHTML = Command.innerHTML + "~";
        Command.innerHTML = Command.innerHTML + YCoords + " ";

        if (ZRel.classList.contains("check"))
            Command.innerHTML = Command.innerHTML + "~";
        Command.innerHTML = Command.innerHTML + ZCoords;
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

function checkbox(box_id) {
    var Checkbox = document.getElementById(box_id);
    if (Checkbox.classList.contains("check")) {
        Checkbox.classList.replace("check", "uncheck")
    } else {
        Checkbox.classList.replace("uncheck", "check")
    }
}