const endpoint = "http://192.168.230.88";

// Fungsi untuk mengatur status lampu dan menyimpannya di localStorage
function setLampu1(on) {
    console.log(`Turning Lampu 1 ${on ? 'ON' : 'OFF'}`);
    fetch(`${endpoint}/25/${on ? 'on' : 'off'}`)
        .then(response => {
            if (response.ok) {
                console.log(`Lampu 1 ${on ? 'ON' : 'OFF'} success`);
                lampu1image.src = on ? "./led-on.png" : "./led-off.png";
                localStorage.setItem('lampu1Status', on); // Simpan status di localStorage
            } else {
                console.error('Response error:', response.status);
            }
        })
        .catch(error => console.error('Error:', error));
}

function setLampu2(on) {
    console.log(`Turning Lampu 2 ${on ? 'ON' : 'OFF'}`);
    fetch(`${endpoint}/26/${on ? 'on' : 'off'}`)
        .then(response => {
            if (response.ok) {
                console.log(`Lampu 2 ${on ? 'ON' : 'OFF'} success`);
                lampu2image.src = on ? "./led-on.png" : "./led-off.png";
                localStorage.setItem('lampu2Status', on); // Simpan status di localStorage
            } else {
                console.error('Response error:', response.status);
            }
        })
        .catch(error => console.error('Error:', error));
}

// Fungsi untuk mengatur status lampu saat halaman dimuat
function loadLampuStatus() {
    const lampu1Status = localStorage.getItem('lampu1Status') === 'true'; // Baca status lampu 1
    const lampu2Status = localStorage.getItem('lampu2Status') === 'true'; // Baca status lampu 2

    // Atur gambar sesuai dengan status yang disimpan
    lampu1image.src = lampu1Status ? "./led-on.png" : "./led-off.png";
    lampu2image.src = lampu2Status ? "./led-on.png" : "./led-off.png";
}

// Panggil fungsi untuk memuat status lampu saat halaman dimuat
window.onload = loadLampuStatus;

// Contoh pemanggilan fungsi untuk menyalakan/mematikan lampu
// setLampu1(true); // Untuk menyalakan lampu 1
// setLampu2(false); // Untuk mematikan lampu 2


function setLampu3() {
    lampu3.style.backgroundColor = "red";
    lampu3image.src = "./led-on.png";
}

function setLampu4() {
    lampu4.style.backgroundColor = "red";
    lampu4image.src = "./led-on.png";
}
