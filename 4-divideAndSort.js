function divideAndSort(integer) {
    if (Number.isInteger(integer) !== true) return `Tolong Masukkan Angka`;
    let stringing = String(integer).split(0);
    // console.log(stringing);
    let sorting = '';
    for (let spliting of stringing) {
        sorting += spliting.split('').sort().join('');
    }
    return Number(sorting);
}

console.log(divideAndSort(5956560159466056));
console.log(typeof divideAndSort(5956560159466056));