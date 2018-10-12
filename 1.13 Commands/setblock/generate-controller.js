function generate() {
    var Blocks = document.getElementById("block");
    var Block = Blocks.options[Blocks.selectedIndex].value;

    var ItemName = document.getElementById("item-name").value;
    var HasName;
    if (ItemName == "")
        HasName = false;
    else
        HasName = true;

    var ItemLore = document.getElementById("item-lore").value;
    var HasLore;
    if (ItemLore == "")
        HasLore = false;
    else
        HasLore = true;

    var XCoords = document.getElementById("x-coords").value;
    var YCoords = document.getElementById("y-coords").value;
    var ZCoords = document.getElementById("z-coords").value;

    var XRel = document.getElementById("x-relative");
    var YRel = document.getElementById("y-relative");
    var ZRel = document.getElementById("z-relative");

    // Generate
    Command = document.getElementById("command");
    Command.innerHTML = "/setblock ";

    if (XRel.classList.contains("check"))
        Command.innerHTML = Command.innerHTML + "~";
    Command.innerHTML = Command.innerHTML + XCoords + " ";

    if (YRel.classList.contains("check"))
        Command.innerHTML = Command.innerHTML + "~";
    Command.innerHTML = Command.innerHTML + YCoords + " ";

    if (ZRel.classList.contains("check"))
        Command.innerHTML = Command.innerHTML + "~";
    Command.innerHTML = Command.innerHTML + ZCoords + " minecraft:" + Block;

    if (HasName == true || HasLore == true) {
        Command.innerHTML = Command.innerHTML + "{display:{";

        if (HasName == true) {
            Command.innerHTML = Command.innerHTML + 'Name:"\\"' + ItemName + '\\""';
            if (HasLore == true) {
                Command.innerHTML = Command.innerHTML + ',';
            }
        }

        if (HasLore == true) {
            Command.innerHTML = Command.innerHTML + 'Lore:["' + ItemLore + '"]';
        }

        Command.innerHTML = Command.innerHTML + "}}";
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

function showhideitemdisplay() {
    var Contents = document.getElementById("item-display-contents");
    var Button = document.getElementById("item-display-show");

    if (Button.innerHTML == "SHOW") {
        Button.innerHTML = "HIDE";
        Button.classList.remove("btn-success");
        Button.classList.add("btn-danger");

        Contents.style.display = "block";
    } else {
        Button.innerHTML = "SHOW";
        Button.classList.remove("btn-danger");
        Button.classList.add("btn-success");

        Contents.style.display = "none";
    }
}