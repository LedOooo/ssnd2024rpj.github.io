function openSidebar(){
    const sidebar = document.getElementById("sidebar"); 

    sidebar.style.width = "clamp(15vw, 18vw, 20vw)";

    document.getElementById("close").style.display = "block";
    document.getElementById("base").style.marginLeft = sidebar.style.width;
 }
 
 function closeSidebar(){
     document.getElementById("sidebar").style.width = "0";
     document.getElementById("close").style.display = "none";
     document.getElementById("base").style.marginLeft = "0";
 }