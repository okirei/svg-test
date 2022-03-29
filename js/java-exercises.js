
function add(asdf, y) {
    return asdf + y;
}

const speak = function () {
    alert('hehehe');
};

function checkDate() {
    var dt = new Date();
    if (dt.getMonth() >= 6) {
        console.log("pasko na!");
    } else {
        console.log("di pa pasko.");
    }
}
function getHighestValue(x, y, z) {
    if (x > y && x > z) {
        return x;
    }
    if (y > x && y > z) {
        return y;
    } else {
        return z;
    }
}
function max(x, y, z) {
    if (x > y) {
        if (x > z) {
            return x;
        }
        if (y > z) {
            return y;
        }
        return z;
    } else {
        if (y > z) {
            return y;
        }
        if (x > z) {
            return x;
        }
        return z;
    }
}
function isWeekday(str) {
    const input = str.toLowerCase();
    if (input === "monday") {
        return true;
    } else if (input === "tuesday") {
        return true;
    } else if (input === "wednesday") {
        return true;
    } else if (input === "thursday") {
        return true;
    } else if (input === "friday") {
        return true;
    } else {
        return false;
    }
}
function max2(x, y) {
    return x > y ? x : y;
}