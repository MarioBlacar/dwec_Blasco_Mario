let ano = prompt("escriba el año de su nacimiento");
;
if(ano>1994 && ano<2010){
    datos =  ("Generación Z");
}else if(ano>1981  && ano<1993){
    datos =  ("Generación Millenial");
}else if(ano>1969  && ano<1980){
    datos =  ("Generación X");
}else if(ano>1949  && ano<1968){
    datos =  ("Baby Boomer");
}else{
    datos = ("se ha salido del rango");
}


alert(datos);