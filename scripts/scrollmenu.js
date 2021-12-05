$.getScript("./scripts/functions.js");

document.addEventListener("scroll", () => {
    let y = $(this).scrollTop();
    if(y > 20){
        getElement("menu").style.boxShadow = "0px 0px 15px var(--black)";
        getElement("menu-mobile").style.boxShadow = "0px 0px 15px var(--black)";
    }
    else{
        if(getElement("menu-mobile").style.display == "flex"){
            getElement("menu").style.boxShadow = "0px 0px 15px var(--black)";
            getElement("menu-mobile").style.boxShadow = "0px 0px 15px var(--black)";
        }
        else{
            getElement("menu").style.boxShadow = "0px 0px 15px var(--blackw)";
            getElement("menu-mobile").style.boxShadow = "0px 0px 15px var(--blackw)";
        }
    }
})