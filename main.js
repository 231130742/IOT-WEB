// const endpoint = "http://192.168.1.12";

// // Fungsi untuk mengatur status lampu dan menyimpannya di localStorage
// function setLampu1(on) {
//     console.log(`Turning Lampu 1 ${on ? 'ON' : 'OFF'}`);
//     fetch(`${endpoint}/25/${on ? 'on' : 'off'}`)
//         .then(response => {
//             if (response.ok) {
//                 console.log(`Lampu 1 ${on ? 'ON' : 'OFF'} success`);
//                 lampu1image.src = on ? "./assets/led-on.png" : "./assets/led-off.png";
//                 localStorage.setItem('lampu1Status', on); // Simpan status di localStorage
//             } else {
//                 console.error('Response error:', response.status);
//             }
//         })
//         .catch(error => console.error('Error:', error));
// }

// function setLampu2(on) {
//     console.log(`Turning Lampu 2 ${on ? 'ON' : 'OFF'}`);
//     fetch(`${endpoint}/26/${on ? 'on' : 'off'}`)
//         .then(response => {
//             if (response.ok) {
//                 console.log(`Lampu 2 ${on ? 'ON' : 'OFF'} success`);
//                 lampu2image.src = on ? "./assets/led-on.png" : "./assets/led-off.png";
//                 localStorage.setItem('lampu2Status', on); // Simpan status di localStorage
//             } else {
//                 console.error('Response error:', response.status);
//             }
//         })
//         .catch(error => console.error('Error:', error));
// }

// // Fungsi untuk mengatur status lampu saat halaman dimuat
// function loadLampuStatus() {
//     const lampu1Status = localStorage.getItem('lampu1Status') === 'true'; // Baca status lampu 1
//     const lampu2Status = localStorage.getItem('lampu2Status') === 'true'; // Baca status lampu 2

//     // Atur gambar sesuai dengan status yang disimpan
//     lampu1image.src = lampu1Status ? "./assets/led-on.png" : "./assets/led-off.png";
//     lampu2image.src = lampu2Status ? "./assets/led-on.png" : "./assets/led-off.png";
// }

// // Panggil fungsi untuk memuat status lampu saat halaman dimuat
// window.onload = loadLampuStatus;

// // Contoh pemanggilan fungsi untuk menyalakan/mematikan lampu
// setLampu1(false); // Untuk menyalakan lampu 1
// setLampu2(false); // Untuk mematikan lampu 2


// function setLampu3() {
//     lampu3.style.backgroundColor = "red";
//     lampu3image.src = "./assets/led-on.png";
// }

// function setLampu4() {
//     lampu4.style.backgroundColor = "red";
//     lampu4image.src = "./assets/led-on.png";
// }

const BLYNK_AUTH_TOKEN = "2BI4LBNNumG-Wy1wkLjvuXcmFQGBn7QM"; // Token kamu

// Fungsi untuk mengubah status lampu via Blynk API
async function setLampu(virtualPin, state) {
    const url = `https://blynk.cloud/external/api/update?token=${BLYNK_AUTH_TOKEN}&${virtualPin}=${state ? 1 : 0}`;

    try {
        let response = await fetch(url);
        if (response.ok) {
            console.log(`Lampu ${virtualPin} berhasil diubah ke ${state ? "ON" : "OFF"}`);
        } else {
            console.error("Gagal mengubah status lampu.");
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

// Event listener untuk kontrol lampu 1
document.getElementById("lampu1on").addEventListener("click", () => setLampu("V0", true));
document.getElementById("lampu1off").addEventListener("click", () => setLampu("V0", false));

// Event listener untuk kontrol lampu 2
document.getElementById("lampu2on").addEventListener("click", () => setLampu("V1", true));
document.getElementById("lampu2off").addEventListener("click", () => setLampu("V1", false));