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

    var XCoords = document.getElementById("x-coords1").value;
    var YCoords = document.getElementById("y-coords1").value;
    var ZCoords = document.getElementById("z-coords1").value;

    var XRel = document.getElementById("x-relative1");
    var YRel = document.getElementById("y-relative1");
    var ZRel = document.getElementById("z-relative1");

    var XCoords2 = document.getElementById("x-coords2").value;
    var YCoords2 = document.getElementById("y-coords2").value;
    var ZCoords2 = document.getElementById("z-coords2").value;

    var XRel2 = document.getElementById("x-relative2");
    var YRel2 = document.getElementById("y-relative2");
    var ZRel2 = document.getElementById("z-relative2");

    // Generate
    Command = document.getElementById("command");
    Command.innerHTML = "/fill ";

    if (XRel.classList.contains("check"))
        Command.innerHTML = Command.innerHTML + "~";
    Command.innerHTML = Command.innerHTML + XCoords + " ";

    if (YRel.classList.contains("check"))
        Command.innerHTML = Command.innerHTML + "~";
    Command.innerHTML = Command.innerHTML + YCoords + " ";

    if (ZRel.classList.contains("check"))
        Command.innerHTML = Command.innerHTML + "~";
    Command.innerHTML = Command.innerHTML + ZCoords + " ";

    ////////////
    if (XRel2.classList.contains("check"))
        Command.innerHTML = Command.innerHTML + "~";
    Command.innerHTML = Command.innerHTML + XCoords2 + " ";

    if (YRel2.classList.contains("check"))
        Command.innerHTML = Command.innerHTML + "~";
    Command.innerHTML = Command.innerHTML + YCoords2 + " ";

    if (ZRel2.classList.contains("check"))
        Command.innerHTML = Command.innerHTML + "~";
    Command.innerHTML = Command.innerHTML + ZCoords2 + " minecraft:" + Block;

    ////////////
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