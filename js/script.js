function showSearch() {
    var open =  document.getElementById('open');
    var search = document.getElementById('search');
    var close = document.getElementById("close");
    open.style.display = 'none';
    search.style.display = "block";
    close.style.display = "block";
}
function closeSearch() {
    var open =  document.getElementById('open');
    var search = document.getElementById('search');
    var close = document.getElementById("close");
    open.style.display = 'block';
    search.style.display = "none";
    close.style.display = "none";
}
function dark() {
    var nav = document.getElementById('nav-stylesheet');
    var status = nav.getAttribute('href');
    if (status == '/css/nav.css') {
        nav.setAttribute('href', '/css/nav-dark.css');
        document.getElementsByTagName('body')[0].style.background = "black";
        document.getElementsByTagName('body')[0].style.color = "white";
    }
    else{
        nav.setAttribute('href', '/css/nav.css');
        document.getElementsByTagName('body')[0].style.background = "white";
        document.getElementsByTagName('body')[0].style.color = "black";
    }
}
function showMenu() {
    var x = document.getElementById("menu");
    var x2 = document.getElementById("openMenu");
    var x3 = document.getElementById("closeMenu");
    x.style.display = "block";
    x2.style.display = "none";
    x3.style.display = "block";
}
function closeMenu() {
    var x = document.getElementById("menu");
    var x2 = document.getElementById("openMenu");
    var x3 = document.getElementById("closeMenu");
    x.style.display = "none";
    x2.style.display = "block";
    x3.style.display = "none";
}