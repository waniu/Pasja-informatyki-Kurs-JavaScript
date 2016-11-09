var haslo = "przez hutory w ooogniu caaałeeee snu już nie znasz step odwiedzasz nieee odnajdziesz mnie mój miły";
haslo = haslo.toUpperCase();

var dlugosc = haslo.length;

var haslo1 = "";

var ile_skuch = 0;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");
var wygrana = new Audio("fanfare.wav");
var przegrana = new Audio("fade.wav");

for (i = 0; i < dlugosc; i++)
{
    if (haslo.charAt(i)==" ") haslo1 = haslo1 + " ";
    else haslo1 = haslo1 + "-";
}

var litery = new Array(35);

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";

window.onload = start;

function wypisz_haslo()
{
    document.getElementById("plansza").innerHTML = haslo1;
}

function start()
{
    var tresc_diva ="";
    
    for(i=0; i<=34; i++)
    {
        var element = "lit"+i;
        tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz('+i+')" id="'+element+'">'+litery[i]+'</div>';
        
        if((i+1)%7==0) tresc_diva = tresc_diva + '<div style="clear:both;">';
    }
    
    document.getElementById("alfabet").innerHTML = tresc_diva;
    
    
    wypisz_haslo();
}

String.prototype.ustawZnak = function(miejsce, znak)
{
    if(miejsce > this.length - 1) return this.toString();
    else return this.substr(0,miejsce)+znak+this.substr(miejsce+1);
}

function sprawdz(nr)
{
    var trafiona = false;
    
    for(i=0; i<=dlugosc; i++)
    {
        if(haslo.charAt(i)==litery[nr])
        {
            haslo1 = haslo1.ustawZnak(i,litery[nr]);
            trafiona = true;
        }
    }
    
    if(trafiona == true)
    {
        //trafione
        yes.play();
        var element = "lit"+nr;
        document.getElementById(element).style.background = "#003300";
        document.getElementById(element).style.border = "3px solid #00C000";
        document.getElementById(element).style.color = "#00C000";
        document.getElementById(element).style.cursor = "default";
        wypisz_haslo();
    }
    else
    {
        //skucha
        no.play();
        var element = "lit"+nr;
        document.getElementById(element).style.background = "#330000";
        document.getElementById(element).style.border = "3px solid #C00000";
        document.getElementById(element).style.color = "#C00000";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick",";");
        
        ile_skuch++;
        var obraz = "img/s"+ile_skuch+".jpg";
        document.getElementById("szubienica").innerHTML = '<img src="'+obraz+'"alt=""/>';
    }
    //wygrana
    if(haslo==haslo1)
    {
        wygrana.play();
        document.getElementById("alfabet").innerHTML = "Tak jest! Podano prawidłowe hasło: "+haslo+'<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
    }
    
    //przegrana
    if(ile_skuch>=9)
    {
        przegrana.play();
        document.getElementById("alfabet").innerHTML = "Przegrana! Podano prawidłowe hasło: "+haslo+'<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
    }
}





