function generate() {
    var Player = document.getElementById("to-player");
    var PlayerSelector = Player.options[Player.selectedIndex].value;
    var PlayerName = document.getElementById("to-player-name").value;

    var Items = document.getElementById("item");
    var Item = Items.options[Items.selectedIndex].value;

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

    if (PlayerSelector == "playername")
        PlayerSelector = PlayerName;

    if (PlayerSelector == "noplayer") {
        alert("Please select a player to give the item to!!!")
    } else {
        Command = document.getElementById("command");
        Command.innerHTML = "/give " + PlayerSelector + " minecraft:" + Item;
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