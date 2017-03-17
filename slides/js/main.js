var longStr = "supercallifragilisticexpiallidocious",
    myDiv = document.getElementById("myDiv"),
    intervalId;

myDiv.innerHTML = longStr;

function scrollMsg(elem) {
    intervalId = setInterval(function() {
        str = elem.innerHTML;
        if (str.length > 0) {
            elem.innerHTML = str.substring(1);
        } else {
            clearInterval(intervalId);
        }
    }, 500);
}

scrollMsg(myDiv);
