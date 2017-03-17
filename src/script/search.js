function myFunction(){
    var input = document.getElementById("myInput");
    var filter = input.value.toUpperCase();
    var ui = document.getElementById("myUL")
    var alist = ui.getElementsByTagName("li");
    //var alist = document.getElementsByTagName("li");

    for(i = 0; i < alist.length; i++){
        var li = alist[i];
        var a = li.getElementsByTagName("a")[0];
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
            alist[i].style.display = "";
        }
        else{
            alist[i].style.display = "none";
        }
    }


}