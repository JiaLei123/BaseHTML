function changeImage(){
    element=document.getElementById("myimage")
    if(element.src.match("bulbon"))
    {
        element.src="http://www.runoob.com/images/pic_bulboff.gif";
    }
    else
    {
        element.src="http://www.runoob.com/images/pic_bulbon.gif";
    }
}