// 2 Mengubah huruf konsonan a menjadi o dalam setiap kata/string

function mengubah(str) {
    let penampung = '';
    for (i = 0; i <= str.length - 1; i++) {
        if (str[i] === 'a') {
            penampung += 'o'
        } else {
            penampung += str[i]
        }
    }
    return penampung
}

const changetext = (string) => {
    let temp = '';
    for(let str of string){
        temp += str === 'a' ? 'o' : str;
    }
    return temp;
}

console.log(mengubah('afakah'));
console.log(changetext('afakah'));