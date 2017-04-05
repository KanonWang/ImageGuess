/**
 * Created by kanon on 2017/4/5.
 */
window.onload = init;
/*function init() {
 var image=document.getElementById("zero");
 image.onclick=showAnswer;
 }
 function showAnswer(){
 var image=document.getElementById("zero");
 image.src="ignore/zero.jpg";
 }*/

function init() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = showAnswer;
    }
}

function showAnswer(eventObj) {
    var image =eventObj.target ;
    var name=image.id;
    name="ignore/"+name+".jpg"
    image.src=name;
}
