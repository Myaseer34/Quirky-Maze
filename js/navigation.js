let inverted = false;
const controls_status = document.querySelector(".controls-status")

// Function to toggle the control inversion
function toggleInversion() {
    inverted = !inverted;

    if (inverted) {
        controls_status.innerText = "CONTROLS ARE INVERTED";
        controls_status.style.backgroundColor = "rgb(240, 58, 82)";

        speakMessage("Controls are inverted, You can't win so easily")
    } else {
        controls_status.innerText = "CONTROLS ARE NORMAL";
        controls_status.style.backgroundColor = "rgb(58, 240, 125)";

        speakMessage("Controls are normal, well you can never win lol")
    }
}

// Set interval to toggle inversion every 10 seconds
setInterval(toggleInversion, 10000);

bu.addEventListener("click", (e) => {
    if (inverted) {
        down();
    } else {
        up();
    }
    firstMove = true;
});

bd.addEventListener("click", (e) => {
    if (inverted) {
        up();
    } else {
        down();
    }
    firstMove = true;
});

bl.addEventListener("click", (e) => {
    if (inverted) {
        right();
    } else {
        left();
    }
    firstMove = true;
});

br.addEventListener("click", (e) => {
    if (inverted) {
        left();
    } else {
        right();
    }
    firstMove = true;
});

function up() {
    if (inverted) {
        downAction();
    } else {
        upAction();
    }
}

function down() {
    if (inverted) {
        upAction();
    } else {
        downAction();
    }
}

function left() {
    if (inverted) {
        rightAction();
    } else {
        leftAction();
    }
}

function right() {
    if (inverted) {
        leftAction();
    } else {
        rightAction();
    }
}

function upAction() {
    animKeys(bu);
    if (checkYboundry("u")) {
        thingie.style.top = thingie.offsetTop - step + "px";
        updateEmo(false);
    }
}

function downAction() {
    animKeys(bd);
    if (checkYboundry("d")) {
        thingie.style.top = thingie.offsetTop + step + "px";
        updateEmo(false);
    }
}

function leftAction() {
    animKeys(bl);
    if (checkXboundry("l")) {
        thingie.style.left = thingie.offsetLeft - step + "px";
    }
    updateEmo(true);
}

function rightAction() {
    animKeys(br);
    if (checkXboundry("r")) {
        thingie.style.left = thingie.offsetLeft + step + "px";
    }
    updateEmo(true);
}