function showAlert(){
    window.alert("alert message");
    console.log("show alert message")
}

function showAlert1(){
    window.alert(5+6);
}

function ChangedInner(){
    var a = document.getElementById("mes1").value
    var b = document.getElementById("mes2").value
    changeInnerHTML(a, b)
}

function changeInnerHTML(a, b){
    document.getElementById("mess1").innerHTML="Changed Message" + a +b
    console.log("modify the inner innerHTML")
}

function writeDocument() {
    document.write(Date());
    console.log("overwrite the whole page")
}