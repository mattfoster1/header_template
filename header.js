var n = 0;
var heightPost = 0;


var ham_Expand = function() {
    
    var ham = document.getElementById("hbgr");
    var menuCont = document.getElementById("menuCont");
    var body = document.body;

    if (ham.className =="") { //opening
        ham.className = "openHam";
        menuCont.className = "openMenu"
        menuCont.onclick = function() {ham_Expand();}
        // body.style.overflow = "hidden"; //blocks scrolling
        menuCont.style.zIndex = 1001;
        
        console.log("no classname");

    } else if (ham.className === "openHam") { //closing
        ham.className = "";
        menuCont.className = "closedMenu";
        menuCont.onclick = "";
        body.style.overflow = "scroll";
        setTimeout(function(){ if (ham.className =="") {menuCont.style.zIndex = -1; }}, 1500); //fix for delay causing issues for rapid clicks
        console.log("classname was openHam");

    } else {
        // alert ("nope");
    }
    console.log("ham_Expand");
}

function changeLayout(description){
    console.log("changeLayout_bloop");
}

function getBrowserWidth() {
    if (window.innerWidth) {
        console.log("innerwidth");
        return window.innerWidth;
    }  
    else if (document.documentElement && document.documentElement.clientWidth != 0){
        console.log("innerwidth");
        return document.documentElement.clientWidth;
    }
    else if (document.body){
        console.log("innerwidth");
        return document.body.clientWidth;
    }      
        console.log("innerwidth");
        return 0;
}

function getBrowserHeight() {
    // console.log("GBH");
    if (window.innerHeight) {
        return window.innerHeight;
    }  
    else if (document.documentElement && document.documentElement.clientHeight != 0){
        return document.documentElement.clientHeight;   
    }
    else if (document.body){return document.body.clientHeight;}      
        return 0;
}

var headerHider = function() { //tucks header out of way if user is scrolling down. Brings if back if scroll up
    var heightPre = heightPost;
    heightPost = window.pageYOffset;
    if (heightPre <= heightPost) { //check direction of scroll
        var scrollDir = "down";
    } else if (heightPre >= heightPost) {
        var scrollDir = "up";
    }
    
    if (window.pageYOffset >= 200 && scrollDir == "down" && heightPre > 0 && document.getElementById("hbgr").className !="openHam") { //decides if to hide or show header
        document.getElementById("headerCont").className = "hdrHide";
    } if (scrollDir == "up") { //shows header
        document.getElementById("headerCont").className = "hdrShow";
    } else if (heightPost <= 200) {
        document.getElementById("headerCont").className = "hdrShow";
    }
}

// var abtCont_Expand = function() {
    // var aboutCopy = document.getElementsByClassName("abtCopy_closed");
    // var aboutCont = document.getElementById("aboutCont");
    // var aboutCopy = document.getElementById("abtCopy");
    // var aboutContArr = document.getElementById("abtCont_Arr_Cont");
    

    // if (aboutCont.className === "abtCont_closed") {//when opening
    //     // aboutCont.style.height="1000px !important";
    //     aboutCont.className = "abtCont_open";
    //     aboutCopy.className = "abtCopy_open";
    //     // document.getElementById("abtCont_Arr_Cont").style.display="none";
    //     document.getElementById("abtCont_Arr").innerHTML="minimise content";
    //     document.getElementById("abtCont_Arr").className="abtCont_shrunk";

    //     // window.scroll(0,130);

    // } else if (aboutCont.className === "abtCont_open") { //when closing
    //     aboutCont.className = "abtCont_closed";
    //     aboutCopy.className = "abtCopy_closed";
    //     document.getElementById("abtCont_Arr_Cont").style.display="flex";
    //     document.getElementById("abtCont_Arr").innerHTML="Expand";
    //     document.getElementById("abtCont_Arr").className="abtCont_expded";
    //     window.scroll(0,0);

    // } else {
    //     console.log("AboutCont resizing failure");
    //     alert("nope");
    // }
// }
