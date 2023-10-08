// if else
var jam = 19
if (jam > 19) {
    console.log("Selamat Malam");
}else{
    console.log("Selamat Siang");
}

//switch case
switch (Nilai) {
    case "A":
        bobot = 4
        break;
    case "B":
        bobot = 3
        break;
    case "C":
        bobot = 2.5
        break;
    default:
        break;
}

//for statement
for (let i = 2; i < 10; i++) {
    console.log(i);
}

//do while
let a=2;
const c=20;

do {
    console.log(a);
    a++;
} while (a<c);

//function
function perkalian(a , b) {
    HasilPerkalian = a*b;
    console.log("Hasil Perkalian dari a*b= " +HasilPerkalian);
}
