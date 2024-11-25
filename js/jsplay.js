function valid(){
    var pays1=document.play.country1;
    var pays2=document.play.country2;
    var pays3=document.play.country3;
    var pays4=document.play.country4;
    var pays5=document.play.country5;
    var pays6=document.play.country6;
    var pays7=document.play.country7;
    var selects = document.getElementsByTagName("select");
    var bonne=0;
    for(var i = 0; i<=selects.length/8; i++){
        if(pays1.selectedIndex==2) {pays1.style.background="lime";bonne++;} else{pays1.style.background="red";}
        if(pays2.selectedIndex==6) {pays2.style.background="lime";bonne++;} else{pays2.style.background="red";}
        if(pays3.selectedIndex==7) {pays3.style.background="lime";bonne++;} else{pays3.style.background="red";}
        if(pays4.selectedIndex==1) {pays4.style.background="lime";bonne++;} else{pays4.style.background="red";}
        if(pays5.selectedIndex==4) {pays5.style.background="lime";bonne++;} else{pays5.style.background="red";}
        if(pays6.selectedIndex==5) {pays6.style.background="lime";bonne++;} else{pays6.style.background="red";}
        if(pays7.selectedIndex==3) {pays7.style.background="lime";bonne++;} else{pays7.style.background="red";}
        if(bonne==7){document.getElementById("result").innerHTML = "Bravo, vous avez trouvé toutes les réponses !";}
        else{document.getElementById("result").innerHTML = "vous avez trouvez " + bonne  +  "reponse vrai";
        }
        
       }
}
function disableOptionInSelects(select) {
    var optionvalue = select.value;
    var options = document.getElementsByTagName('option');
    for (var i = 0; i < options.length; i++) {
      if (options[i].value == optionvalue) {
        // Vérification si l'option trouvée a été sélectionnée dans un autre select
        for (var j = 0; j < select.form.length; j++) {
          var otherSelect = select.form[j];
          if (otherSelect != select && otherSelect.value == optionvalue) {
            // Désélection de l'option trouvée dans l'autre select
            otherSelect.value = '....';
          }
        }
      }
    }
  }


function rejouer(){
    var pays1=document.play.country1;
    var pays2=document.play.country2;
    var pays3=document.play.country3;
    var pays4=document.play.country4;
    var pays5=document.play.country5;
    var pays6=document.play.country6;
    var pays7=document.play.country7;
    
    pays1.value="....";
    pays1.style.background="white";
    pays2.value="....";
    pays2.style.background="white";
    pays3.value="....";
    pays3.style.background="white";
    pays4.value="....";
    pays4.style.background="white";
    pays5.value="....";
    pays5.style.background="white";
    pays6.value="....";
    pays6.style.background="white";
    pays7.value="....";
    pays7.style.background="white";
    document.getElementById("result").innerHTML = "";
    
}


