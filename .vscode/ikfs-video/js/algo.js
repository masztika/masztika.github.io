/*
KÁVÉFŐZŐ BEKAPCSOLÁSA
IF NINCS ELÉG KÁVÉ THEN
KÁVÉ HOZZÁADÁSA
ENDIF
IF NINCS ELÉG VÍZ THEN
VÍZ HOZZÁADÁSA
ENDIF
WHILE NEM MELEGEDETT FEL
    10 MP VÁRAKOZÁS
    ENDWHILE
CSÉSZE ODAHELYEZÉSE
GOMB MEGNYOMÁSA
*/
/*
ÖSSZEGZÉS ALGORITMUSA
összeg = 0
CIKLUS AMÍG van még szám, ADDIG
    szám = következő szám
    összeg = összeg + szám
CIKLUS VÉGE
*/
let numericArray = [1,3,2,5,4,7,6,9];
let osszeg = 0;
for (let i=0; i<numericArray.length; i++)
 {
    osszeg = osszeg + numericArray[i];
}
console.log("Összeg: " , osszeg);
/*
Számlálás algoritmusa
db = 0
CIKLUS AMÍG van még szám, ADDIG
    szám = következő elem
    HA igaz a feltétel a számra, AKKOR
    db = db +1
    FELTÉTEL VÉGE
CIKLUS VÉGE
*/
let db = 0;
for (let i=0; i<numericArray.length; i++)
 {
    if (numericArray[i] % 2 == 0 )
    {db++; } 
}
console.log("Páros számok darabszáma: " , db );

/*
Szélsőérték keresésének algoritmusa
legnagyobb = első elem
CIKLUS amíg van még szám, ADDIG
    szám = következő szám
    HA szám > legnagyobb, AKKOR
        legnagyobb = szám
    FELTÉTEL VÉGE
CIKLUS VÉGE
*/
let legnagyobb = numericArray[0];
for (let i=0; i<numericArray.length; i++)
 {
    if (numericArray[i] > legnagyobb )
    {legnagyobb = numericArray[i]; } 
}
console.log("Legnagyobb szám: " , legnagyobb );

/*
Eldöntés tétele
találat = false
CILKUS AMÍG van elem és NINCS találat
    szám = következő elem
    HA igaz a feltétel a számra, AKKOR
        találat = true
    FELTÉTEL VÉGE
CIKLUS VÉGE
*/
let talalat = false;
for (let i=0; i<numericArray.length && !talalat; i++)
 {
    if (numericArray[i] == 8 )
    {talalat = true;
     } 
}
console.log("A tömb tartalmazza az 8 -t", talalat );
