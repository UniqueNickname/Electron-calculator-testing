function valid(form) {
    let n   = form.enterN.value;
    let res = Factorial(n);
    ////console.log(res);

    ////var text = document.getElementById("placementNoRES");
    ////text.innerHTML = "Two";
    ////text.childNodes[0].nodeValue=res;

    ////const text = "Число перестановок: ";
    document.getElementById("placementNoRES") .innerHTML = res ;
    ////out(res,  "placementNoRES" );
    ////out(text, "placementNoTEXT");
    ////document.getElementById("placementNoTEXT").innerHTML = text;
    return res;
}

////function out(text, id) {
////    document.getElementById(id).firstChild.nodeValue = text;
////}