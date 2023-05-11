  
  var target=document.getElementById("btn");
  target.addEventListener("click",function(){
    var mat=document.getElementById("mat").value;
    var eng=document.getElementById("eng").value;
    var phy=document.getElementById("phy").value;
    var che=document.getElementById("che").value;

    var total=Number(mat)+Number(eng)+Number(phy)+Number(che);
    var per=(total*182)/400;
   
    document.getElementById("para").innerHTML="your jamb score is " + (total);
    
 })
    