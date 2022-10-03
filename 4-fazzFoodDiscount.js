const FazzFood = (price, voucher, distance, tax) => {
    // Validasi tiap parameter
    if (typeof price !== 'number') return 'Tolong masukkan harga dalam bentuk angka';
    if (typeof voucher !== 'string' && Boolean(voucher) !== false) return 'Tolong masukkan kode voucher dalam bentuk huruf biasa';
    if (typeof distance !== 'number') return 'Tolong masukkan jarak tempuh dalam bentuk angka';
    if (typeof tax !== 'boolean') return 'Tolong isi pajak dengan true/false';
    // Salah tulis promo
    if (price >= 25000 && price < 50000 && voucher !== 'DITRAKTIR60' && voucher !== 'FAZZFOOD50' && Boolean(voucher) !== false)
        return 'Promo tidak ditemukan, Promo yang bisa anda gunakan adalah DITRAKTIR60(tulis dengan huruf kapital';
    if (price >= 50000 && voucher !== 'DITRAKTIR60' && voucher !== 'FAZZFOOD50' && Boolean(voucher) !== false)
        return 'Promo tidak ditemukan, Promo yang bisa anda gunakan adalah DITRAKTIR60 dan FAZZFOOD50(tulis dengan huruf kapital';
    // Pembelian kurang untuk memakai voucher 
    if (price < 25000 && voucher !== 'DITRAKTIR60' && voucher !== 'FAZZFOOD50' && Boolean(voucher) !== false)
        return 'Promo tidak ditemukan, Promo yang bisa anda gunakan adalah DITRAKTIR60 dan FAZZFOOD50(tulis dengan huruf kapital';
    if (price < 25000 && voucher === 'DITRAKTIR60')
        return 'Maaf pembelian anda belum mencukupi untuk memakai promo, tambahkan pesanan untuk bisa memakai promo';
    if (price < 50000 && voucher === 'FAZZFOOD50')
        return 'Maaf pembelian anda belum mencukupi untuk memakai promo, tambahkan pesanan untuk bisa memakai promo';
    // Perhitungan tanpa voucher
    if (price < 25000 && Boolean(voucher) === false) {
        if (tax === true) {
            addPrice = 0.05 * price;
            if (distance < 2) {
                let rangePrice = 5000;
                return `Harga : ${price} \n Potongan : Tidak ada \n Biaya Antar : ${rangePrice} 
                \n Pajak : ${addPrice} \n Subtotal ${price+addPrice+rangePrice}`;
            }
            rangePrice = 5000 + (3000 * (distance - 2));
            return `Harga : ${price} \n Potongan : Tidak ada \n Biaya Antar : ${rangePrice} 
            \n Pajak : ${addPrice} \n Subtotal ${price+addPrice+rangePrice}`;
        }
        if (distance < 2) {
            let rangePrice = 5000;
            return `Harga : ${price} \n Potongan : Tidak ada \n Biaya Antar : ${rangePrice} 
            \n Pajak : Tidak ada \n Subtotal ${price+rangePrice}`;
        }
        rangePrice = 5000 + (3000 * (distance - 2));
        return `Harga : ${price} \n Potongan : Tidak ada \n Biaya Antar : ${rangePrice} 
        \n Pajak : Tidak ada \n Subtotal ${price+rangePrice}`;
    }
    if (price >= 25000 && price < 50000 && Boolean(voucher) === false) {
        if (tax === true) {
            addPrice = 0.05 * price;
            if (distance < 2) {
                let rangePrice = 5000;
                return `Harga : ${price} \n Potongan : Tidak ada \n Biaya Antar : ${rangePrice} 
                \n Pajak : ${addPrice} \n Subtotal ${price+addPrice+rangePrice}`;
            }
            rangePrice = 5000 + (3000 * (distance - 2));
            return `Harga : ${price} \n Potongan : Tidak ada \n Biaya Antar : ${rangePrice} 
            \n Pajak : ${addPrice} \n Subtotal ${price+addPrice+rangePrice}`;
        }
        if (distance < 2) {
            let rangePrice = 5000;
            return `Harga : ${price} \n Potongan : Tidak ada \n Biaya Antar : ${rangePrice} 
            \n Pajak : Tidak ada \n Subtotal ${price+rangePrice}`;
        }
        rangePrice = 5000 + (3000 * (distance - 2));
        return `Harga : ${price} \n Potongan : Tidak ada \n Biaya Antar : ${rangePrice} 
        \n Pajak : Tidak ada \n Subtotal ${price+rangePrice}`;
    }
    if (price >= 50000 && Boolean(voucher) === false) {
        if (tax === true) {
            addPrice = 0.05 * price;
            if (distance < 2) {
                let rangePrice = 5000;
                return `Harga : ${price} \n Potongan : Tidak ada \n Biaya Antar : ${rangePrice} 
                \n Pajak : ${addPrice} \n Subtotal ${price+addPrice+rangePrice}`;
            }
            rangePrice = 5000 + (3000 * (distance - 2));
            return `Harga : ${price} \n Potongan : Tidak ada \n Biaya Antar : ${rangePrice} 
            \n Pajak : ${addPrice} \n Subtotal ${price+addPrice+rangePrice}`;
        }
        if (distance < 2) {
            let rangePrice = 5000;
            return `Harga : ${price} \n Potongan : Tidak ada \n Biaya Antar : ${rangePrice} 
            \n Pajak : Tidak ada \n Subtotal ${price+rangePrice}`;
        }
        rangePrice = 5000 + (3000 * (distance - 2));
        return `Harga : ${price} \n Potongan : Tidak ada \n Biaya Antar : ${rangePrice} 
        \n Pajak : Tidak ada \n Subtotal ${price+rangePrice}`;
    }
    // Perhitungan dengan voucher DITRAKTIR60
    if (price >= 25000 && price < 50000 && Boolean(voucher) === true && voucher === 'DITRAKTIR60') {
        reducedPrice = 0.6 * price;
        if (reducedPrice <= 30000) {
            if (tax === true) {
                addPrice = 0.05 * price;
                if (distance < 2) {
                    let rangePrice = 5000;
                    return `Harga : ${price} \n Potongan : ${reducedPrice} \n Biaya Antar : ${rangePrice} 
                    \n Pajak : ${addPrice} \n Subtotal ${price-reducedPrice+addPrice+rangePrice}`;
                }
                rangePrice = 5000 + (3000 * (distance - 2));
                return `Harga : ${price} \n Potongan : ${reducedPrice} \n Biaya Antar : ${rangePrice} 
                \n Pajak : ${addPrice} \n Subtotal ${price-reducedPrice+addPrice+rangePrice}`;
            }
            if (distance < 2) {
                let rangePrice = 5000;
                return `Harga : ${price} \n Potongan : ${reducedPrice} \n Biaya Antar : ${rangePrice} 
                \n Pajak : Tidak ada \n Subtotal ${price-reducedPrice+rangePrice}`;
            }
            rangePrice = 5000 + (3000 * (distance - 2));
            return `Harga : ${price} \n Potongan : ${reducedPrice} \n Biaya Antar : ${rangePrice} 
            \n Pajak : Tidak ada \n Subtotal ${price-reducedPrice+rangePrice}`;
        } {
            reducedPrice = 30000;
            if (tax === true) {
                addPrice = 0.05 * price;
                if (distance < 2) {
                    let rangePrice = 5000;
                    return `Harga : ${price} \n Potongan : ${reducedPrice} \n Biaya Antar : ${rangePrice} 
                    \n Pajak : ${addPrice} \n Subtotal ${price-reducedPrice+addPrice+rangePrice}`;
                }
                rangePrice = 5000 + (3000 * (distance - 2));
                return `Harga : ${price} \n Potongan : ${reducedPrice} \n Biaya Antar : ${rangePrice} 
                \n Pajak : ${addPrice} \n Subtotal ${price-reducedPrice+addPrice+rangePrice}`;
            }
            if (distance < 2) {
                let rangePrice = 5000;
                return `Harga : ${price} \n Potongan : ${reducedPrice} \n Biaya Antar : ${rangePrice} 
                \n Pajak : Tidak ada \n Subtotal ${price-reducedPrice+rangePrice}`;
            }
            rangePrice = 5000 + (3000 * (distance - 2));
            return `Harga : ${price} \n Potongan : ${reducedPrice} \n Biaya Antar : ${rangePrice} 
            \n Pajak : Tidak ada \n Subtotal ${price-reducedPrice+rangePrice}`;
        }
    }
    if (price >= 50000 && Boolean(voucher) === true && voucher === 'DITRAKTIR60') {
        reducedPrice = 0.6 * price;
        if (reducedPrice <= 30000) {
            if (tax === true) {
                addPrice = 0.05 * price;
                if (distance < 2) {
                    let rangePrice = 5000;
                    return `Harga : ${price} \n Potongan : ${reducedPrice} \n Biaya Antar : ${rangePrice} 
                    \n Pajak : ${addPrice} \n Subtotal ${price-reducedPrice+addPrice+rangePrice}`;
                }
                rangePrice = 5000 + (3000 * (distance - 2));
                return `Harga : ${price} \n Potongan : ${reducedPrice} \n Biaya Antar : ${rangePrice} 
                \n Pajak : ${addPrice} \n Subtotal ${price-reducedPrice+addPrice+rangePrice}`;
            }
            if (distance < 2) {
                let rangePrice = 5000;
                return `Harga : ${price} \n Potongan : ${reducedPrice} \n Biaya Antar : ${rangePrice} 
                \n Pajak : Tidak ada \n Subtotal ${price-reducedPrice+rangePrice}`;
            }
            rangePrice = 5000 + (3000 * (distance - 2));
            return `Harga : ${price} \n Potongan : ${reducedPrice} \n Biaya Antar : ${rangePrice} 
            \n Pajak : Tidak ada \n Subtotal ${price-reducedPrice+rangePrice}`;
        } {
            reducedPrice = 30000;
            if (tax === true) {
                addPrice = 0.05 * price;
                if (distance < 2) {
                    let rangePrice = 5000;
                    return `Harga : ${price} \n Potongan : ${reducedPrice} \n Biaya Antar : ${rangePrice} 
                    \n Pajak : ${addPrice} \n Subtotal ${price-reducedPrice+addPrice+rangePrice}`;
                }
                rangePrice = 5000 + (3000 * (distance - 2));
                return `Harga : ${price} \n Potongan : ${reducedPrice} \n Biaya Antar : ${rangePrice} 
                \n Pajak : ${addPrice} \n Subtotal ${price-reducedPrice+addPrice+rangePrice}`;
            }
            if (distance < 2) {
                let rangePrice = 5000;
                return `Harga : ${price} \n Potongan : ${reducedPrice} \n Biaya Antar : ${rangePrice} 
                \n Pajak : Tidak ada \n Subtotal ${price-reducedPrice+rangePrice}`;
            }
            rangePrice = 5000 + (3000 * (distance - 2));
            return `Harga : ${price} \n Potongan : ${reducedPrice} \n Biaya Antar : ${rangePrice} 
            \n Pajak : Tidak ada \n Subtotal ${price-reducedPrice+rangePrice}`;
        }
    }
    // Perhitungan dengan voucher FAZZFOOD50
    if (price >= 50000 && Boolean(voucher) === true && voucher === 'FAZZFOOD50') {
        reducedPrice = 0.5 * price;
        if (reducedPrice <= 50000) {
            if (tax === true) {
                addPrice = 0.05 * price;
                if (distance < 2) {
                    let rangePrice = 5000;
                    return `Harga : ${price} \n Potongan : ${reducedPrice} \n Biaya Antar : ${rangePrice} 
                    \n Pajak : ${addPrice} \n Subtotal ${price-reducedPrice+addPrice+rangePrice}`;
                }
                rangePrice = 5000 + (3000 * (distance - 2));
                return `Harga : ${price} \n Potongan : ${reducedPrice} \n Biaya Antar : ${rangePrice} 
                \n Pajak : ${addPrice} \n Subtotal ${price-reducedPrice+addPrice+rangePrice}`;
            }
            if (distance < 2) {
                let rangePrice = 5000;
                return `Harga : ${price} \n Potongan : ${reducedPrice} \n Biaya Antar : ${rangePrice} 
                \n Pajak : Tidak ada \n Subtotal ${price-reducedPrice+rangePrice}`;
            }
            rangePrice = 5000 + (3000 * (distance - 2));
            return `Harga : ${price} \n Potongan : ${reducedPrice} \n Biaya Antar : ${rangePrice} 
            \n Pajak : Tidak ada \n Subtotal ${price-reducedPrice+rangePrice}`;
        } {
            reducedPrice = 50000;
            if (tax === true) {
                addPrice = 0.05 * price;
                if (distance < 2) {
                    let rangePrice = 5000;
                    return `Harga : ${price} \n Potongan : ${reducedPrice} \n Biaya Antar : ${rangePrice} 
                    \n Pajak : ${addPrice} \n Subtotal ${price-reducedPrice+addPrice+rangePrice}`;
                }
                rangePrice = 5000 + (3000 * (distance - 2));
                return `Harga : ${price} \n Potongan : ${reducedPrice} \n Biaya Antar : ${rangePrice} 
                \n Pajak : ${addPrice} \n Subtotal ${price-reducedPrice+addPrice+rangePrice}`;
            }
            if (distance < 2) {
                let rangePrice = 5000;
                return `Harga : ${price} \n Potongan : ${reducedPrice} \n Biaya Antar : ${rangePrice} 
                \n Pajak : Tidak ada \n Subtotal ${price-reducedPrice+rangePrice}`;
            }
            rangePrice = 5000 + (3000 * (distance - 2));
            return `Harga : ${price} \n Potongan : ${reducedPrice} \n Biaya Antar : ${rangePrice} 
            \n Pajak : Tidak ada \n Subtotal ${price-reducedPrice+rangePrice}`;
        }
    }
}

console.log('Kondisi dimana');

// console.log('Salah memasukkan promo');
// console.log(FazzFood(10000, 'afaitupromo', 2, true));

// console.log('Salah memasukkan harga');
// console.log(FazzFood('10000', null, 2, true));

// console.log('Salah memasukkan jarak');
// console.log(FazzFood(10000, null, '2', true));

// console.log('Salah memasukkan pajak');
// console.log(FazzFood(10000, null, 2, 'true'));

// console.log('Memakai promo tapi harga belum memenuhi');
// console.log(FazzFood(10000, 'DITRAKTIR60', 2, true));

console.log('Sukses');
console.log(FazzFood(4000, 'DITRAKTIa', 4, true));