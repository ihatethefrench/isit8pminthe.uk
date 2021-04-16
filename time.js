let now = new Date();

let hour = now.getUTCHours();

if (hour == 19) {
    isit = "yes"
} else {
    isit = "no"
}

document.write(isit);
