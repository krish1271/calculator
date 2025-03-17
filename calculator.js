
function clearDisplay() {
    document.getElementById("display").value = "";
}


function addnumber(input) {
    document.getElementById("display").value +=input;
}


function deleteChar() {
    var last_digit=document.getElementById("display").value;
    document.getElementById("display").value = last_digit.slice(0, -1)
}

function result() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value=result;
    }
    catch {
        document.getElementById("display").value = Error;
    }


}

