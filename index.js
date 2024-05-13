// Bir hərfin neçə dəfə işləndiyini tapma


let mətn = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, pariatur?";

let hərf = prompt("Bir hərf daxil edin");

let nəticə = tap(hərf);
alert("Hərf Sayı : " + nəticə);

function tap(hərf) {
    let cəm = 0;
    for (let i = 0; i < mətn.length; i++) {
        if (mətn.charAt(i).toLowerCase() === hərf.toLowerCase()) {
            cəm += 1;
        }
    }
    return cəm;
}