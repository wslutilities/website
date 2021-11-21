function checkTime(i) {
    return (i < 10) ? "0" + i : i;
}

function startTime() {
    var today = new Date(),
        h = checkTime(today.getHours()),
        m = checkTime(today.getMinutes()),
        s = checkTime(today.getSeconds());
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(function () {
        startTime()
    }, 500);
}

function unix_prompt() {
    var unix_home = document.getElementsByClassName('unix_path');
    for (i = 0; i < unix_home.length; i++) {
        unix_home[i].innerHTML = '<span class="blue">you</span>@<span class="green">wslu_site</span><span class="red">$</span>';
    }
}
function nav_on_change() {
    var value = document.querySelector(".select-wslpy-doc").value;
    if (value != "") {
        location.href = value;
    }
}

function site_init() {
    startTime();
    unix_prompt();

    var d = document.querySelector(".select-wslpy-doc");
    fetch("wslpy/dir.txt").then(response => response.text()).then(text => d.innerHTML = text);
}