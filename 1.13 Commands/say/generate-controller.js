function generate() {
    Message = document.getElementById("message").value;

    Command = document.getElementById("command");
    Command.innerHTML = "/say " + Message;
}

function copycommand() {
    Command = document.getElementById("command");

    Command.disabled = false;
    Command.select();
    document.execCommand("copy");
    Command.disabled = true;
}