dineroCofla = prompt("cuanto dinero tiene cofla?");
dineroRoberto = prompt("cuanto dinero tiene roberto");
dineroPedro = prompt("cuanto dinero tiene pedro");

dineroCofla = parseInt(dineroCofla); 

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("comprate el helado dee agua");
    alert("y te sobra"+ (dineroCofla -0.6));
}

else if (dineroCofla >= 1 && dineroCofla <1.6) {
    alert("comprate el helado dee crema");
    alert("y te sobra"+ (dineroCofla -1));
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("comprate el helado dee heladix");
    alert("y te sobra"+ (dineroCofla -1.6));

}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert("comprate el helado dee heladovich");
    alert("y te sobra"+ (dineroCofla -1.7));

}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert("comprate el helado dee helardor")
    alert("y te sobra"+ (dineroCofla -1.8));

}

else if (dineroCofla >= 2.9) {
    alert("helado con confites o el pote de 1/4kg")
    alert("y te sobra"+ (dineroCofla -2.9));

 
}else {
        alert("lo siento, no tienes dinero SUFICIENTE")
    }



    if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
        alert("comprate el helado dee agua")
    }
    
    else if (dineroRoberto >= 1 && dineroRoberto <1.6) {
        alert("comprate el helado dee crema")
    }
    else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
        alert("comprate el helado dee heladix")
    }
    else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
        alert("comprate el helado dee heladovich")
    }
    else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
        alert("comprate el helado dee helardor")
    }
    
    else if (dineroRoberto >= 2.9) {
        alert("helado con confites o el pote de 1/4kg")
    
    }else {
            alert("lo siento, no tienes dinero SUFICIENTE")
        }


        if (dineroPedro >= 0.6 && dineroPedro < 1) {
            alert("comprate el helado dee agua")
        }
        
        else if (dineroPedro >= 1 && dineroPedro <1.6) {
            alert("comprate el helado dee crema")
        }
        else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
            alert("comprate el helado dee heladix")
        }
        else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
            alert("comprate el helado dee heladovich")
        }
        else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
            alert("comprate el helado dee helardor")
        }
        
        else if (dineroPedro >= 2.9) {
            alert("helado con confites o el pote de 1/4kg")
        
        }else {
                alert("lo siento, no tienes dinero SUFICIENTE")
            }