// 1. Cek apakah sebuah kata merupakan palindrom atau bukan
// Asumsi bahwa ingput merupakan string huruf kecil

let cekPalindrom = (input) => {
    let temp = '';
    for (i = input.length - 1; i >= 0; i--) {
        temp += input[i];
    }
    if (temp === input) {
        return `bilangan ini adalah polindrom`
    }
    return `bilangan ini bukan polindrom`
}

console.log(cekPalindrom('amaaama'));