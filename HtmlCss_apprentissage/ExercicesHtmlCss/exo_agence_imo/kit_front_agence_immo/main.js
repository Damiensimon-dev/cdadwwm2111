const regex = /^[a-z]+(-[a-z]+)?$/i;
function verifySend(){
    var nomValue=document.getElementById('nom').value;
    var telValue=document.getElementById('telephone').value;
    var mailValue=document.getElementById('email').value;

    if(regex.test(nomValue) && tel != "" && emai !=""){return true;}
    else{return false;}
}
function createCookie(nomCookie, valueCookie){
    if(verifySend==true){
        let date=new Date()
        let expire=new Date(datejour.getFullYear(), datejour.getMonth(), (datejour.getDate() + 1));
        expire=expire.toGMTString();
        document.cookie=nomCookie+"="+valueCookie+"; expires="+dateExpire+";SameSite=Strict";
    }
}
document.querySelector("#envoi").addEventListener("click", function() {
    createCookie("nom", document.querySelector("#nom").value);
})

function displayMessage(){
    if(document.cookie.indexOf(nom+'=')!=-1){
        document.createElement('<div style="width:300px; height:300px background-color:grey;"><p>Bonjour,</p>'+nom.value+"<p>votre message nous a bien été envoyé. Nous vous contacterons dans les meilleurs délais. </p> </div>»");
    }
}
