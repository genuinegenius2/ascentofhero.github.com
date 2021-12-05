$.getScript("./scripts/functions.js");

document.addEventListener("DOMContentLoaded", () => {
    var body = document.body,
        html = document.documentElement;

    var width = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);

    if(width < 685){
        getElement("get-started").style.display = "none";
        getElement("marketplace").style.display = "none";
        getElement("whitepaper").style.display = "none";
        getElement("connect").style.display = "none";

        getElement("menu-collapse").style.display = "flex";
        getElement("menu-close").style.display = "none";
        getElement("connect-mobile").style.display = "flex";

        //switch between column and row view for the 2 infos
        getElement("more-info-container").style.flexDirection = "column";
        getElement("info-1").style.width = "100%";
        getElement("info-2").style.width = "100%";
        getElement("info-1").style.margin = "0 0 10px 0";
        getElement("info-2").style.margin = "0";
        getElement("info-about").style.width = "calc(90% - 20px)";
        getElement("more-info-container").style.width = "90%";
        getElement("footer").style.width = "calc(90% - 20px)";
    }
    else{
        getElement("get-started").style.display = "flex";
        getElement("marketplace").style.display = "flex";
        getElement("whitepaper").style.display = "flex";
        getElement("connect").style.display = "flex";

        getElement("menu-collapse").style.display = "none";
        getElement("menu-close").style.display = "none";
        getElement("connect-mobile").style.display = "none";

        //switch between column and row view for the 2 infos
        getElement("more-info-container").style.flexDirection = "row";
        getElement("info-1").style.width = "47.5%";
        getElement("info-2").style.width = "47.5%";
        getElement("info-1").style.margin = "0 2.5% 0 0";
        getElement("info-2").style.margin = "0 0 0 2.5%";
        getElement("info-about").style.width = "60%";
        getElement("more-info-container").style.width = "calc(60% + 20px)";
        getElement("footer").style.width = "60%";
    }
    
    let y = $(this).scrollTop();
    
    if(y > 20){
        getElement("menu").style.boxShadow = "0px 0px 15px var(--black)";
        getElement("menu-mobile").style.boxShadow = "0px 0px 15px var(--black)";
    }
    else{
        getElement("menu").style.boxShadow = "0px 0px 15px var(--blackw)";
        getElement("menu-mobile").style.boxShadow = "0px 0px 15px var(--blackw)";
    }
})
