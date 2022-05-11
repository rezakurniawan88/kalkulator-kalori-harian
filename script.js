// When submit button clicked
const submit = document.querySelector('#submit');
submit.addEventListener('click', function() {
    const gender = setGender();
    const hasil = Math.floor(hitung(gender));
    cetakUI(hasil);
});

// Hidden result when click reset
const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', function() {
    const jumlah = document.querySelector('.jumlah');
    jumlah.classList.add('hidden');
});



// FUNCTION
function setGender() {
    const gender = document.getElementsByName('gender');
    for(i=0; i < gender.length; i++) {
        if(gender[i].checked) {
            return gender[i].value;
        }
    }
};


function hitung(gender) {
    const umur = document.querySelector('#umur');
    const tinggi = document.querySelector('#tinggi');
    const berat = document.querySelector('#berat');
    if(gender == 'laki') {
        return 88.4 + 13.4 * Number(berat.value) + 4.8 * Number(tinggi.value) - 5.68 * Number(umur.value);
    } else {
        return 447.6 + 9.25 * Number(berat.value) + 3.10 * Number(tinggi.value) - 4.33 * Number(umur.value);
    }
};


function cetakUI(hasil) {
    const jumlah = document.querySelector('.jumlah');
    jumlah.innerHTML = `<span class="text-xl text-blue-800">${hasil}</span> kalori/hari`;
    jumlah.classList.remove('hidden');
};