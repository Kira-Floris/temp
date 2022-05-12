function responsiveFunction(){
    var x = document.getElementById('topnav');
    console.log(x)
    if (x.className==='topnav'){
        x.className+=" responsive";
        console.log(x.className);
    }
    else{
        x.className = 'topnav';
    }
}