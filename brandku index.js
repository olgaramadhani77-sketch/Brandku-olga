const btnMulai = document.querySelector('#btnmulai');
const txtUnderBtn = document.querySelector('#p-btn');

let counter = 0;

btnMulai.addEventListener('click', () => {
    counter++;

    if (counter === 1) {
            console.log('Tombol diklik');
            txtUnderBtn.textContent = 'Tombol Berhasil DiKlik';
    } else if (counter === 2) {
            console.log('change text color');
            txtUnderBtn.classList.add('text-gray-500');
    } else if (counter === 3) {
            console.log('off');
            btnMulai.classList.add('hidden');
            txtUnderBtn.classList.add('hidden');
    }
});