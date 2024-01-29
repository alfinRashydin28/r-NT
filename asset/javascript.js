 // Gantilah 'YOUR_BOT_TOKEN' dan 'YOUR_CHAT_ID' dengan informasi bot Telegram Anda.
 var botToken = '6441266112:AAHLvHHiJcKXrKDsifdyJVVt-RPzYu8asIY';
 var chatId = '903460372';

 function sendMessage(option) {
     // Gantilah 'https://api.telegram.org/bot' dengan URL API bot Telegram.
     var apiUrl = 'https://api.telegram.org/bot' + botToken + '/sendMessage';

     // Kumpulkan data untuk dikirim ke bot Telegram.
     var data = {
         chat_id: chatId,
         text: 'Nayla Memilih : ' + option
     };

     // Kirim permintaan POST ke API bot Telegram.
     fetch(apiUrl, {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json',
         },
         body: JSON.stringify(data),
     })
    //  .then(response => response.json())
    //  .then(data => {
    //      console.log('Sukses:', data);
    //      alert('Pesan berhasil dikirim ke Telegram!');
    //  })
    //  .catch((error) => {
    //      console.error('Error:', error);
    //      alert('Terjadi kesalahan saat mengirim pesan ke Telegram.');
    //  });
 }

document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#n-nem", {
        strings: ['Katanya hidup itu adalah pilihan,','Jadi.. Aku mau dong milih kamu','buat jadi milik aku cantikkkkk😆🤭💗' ,' ','Bowlehh ga nih? 😝💗'],
        speed: 50,
        waitUntilVisible: true,
      }).go();

    
});

document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#n-lv", {
        strings: ['yeyyyyyyyyy sekarang kamuu ','Jadi.. pacarrr akuu yahhh','🤭💗' ,' ','LOVEE YOUUU NAYLAA CAYANGG'],
        speed: 50,
        waitUntilVisible: true,
      }).go();

    
});

// Mendapatkan tanggal saat ini
var currentDate = new Date();

// Mengambil informasi tanggal, bulan, dan tahun
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1; // Ingat bahwa indeks bulan dimulai dari 0 (Januari)
var year = currentDate.getFullYear();

var monthNames = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
];

// Mendapatkan nama bulan berdasarkan indeks
var monthName = monthNames[month];

// Menampilkan tanggal dalam format yang diinginkan (DD-MM-YYYY)
var fDate = '❣️'+ day + ' ' + monthName + ' ' + year;

document.getElementById('tanggal').innerText = fDate;

 document.addEventListener('DOMContentLoaded', function () {
     // Mendapatkan waktu akses
     var currentDate = new Date();
     var formattedDate = currentDate.toLocaleString();

     // Mendapatkan informasi agen pengguna (user agent)
     var userAgent = navigator.userAgent;

     // Pesan yang akan dikirimkan
     var message = 'Halaman web diakses pada: ' + formattedDate + '\nAgen Pengguna (User Agent): \n' + userAgent;

     // Membuat URL untuk mengirim pesan menggunakan API Bot Telegram
     var apiUrl = 'https://api.telegram.org/bot' + botToken + '/sendMessage?chat_id=' + chatId + '&text=' + encodeURIComponent(message);

     // Mengirimkan pesan ke Telegram menggunakan fetch
     fetch(apiUrl)
         .then(response => response.json())
         .then(data => console.log(data))
         .catch(error => console.error('Error:', error));
 });

 function showQuestions() {
    // Menampilkan list pertanyaan dan pertanyaan pertama
    document.querySelector('.list-pertanyaan').classList.remove('hidden');
    document.querySelector('.pertanyaan-1').classList.remove('hidden');
    // Menyembunyikan sambutan
    document.querySelector('.sambutan').classList.add('hidden');
}


document.getElementById("passwordInput").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
            checkPassword();
        }
    });

    function checkPassword() {
        var enteredPassword = document.getElementById("passwordInput").value;
        var correctPassword = "naylacantik"; // Ganti dengan kata sandi yang diinginkan

        if (enteredPassword === correctPassword) {
            window.location.href = "../index.html"; // Ganti dengan halaman tujuan Anda
        } else {
            alert("Incorrect Password. Try again.");
        }

        // Mencegah perilaku default formulir (pengiriman formulir)
        event.preventDefault();
    }





function showPertanyaan1(pertanyaan, jawaban) {
    sendMessage('\n\nPERTANYAAN : \nAku Mauu Nanyaa Boleh ndakkkk hehehe? \n\n' + jawaban);

    // Semua pertanyaan disembunyikan
    document.querySelectorAll('.list-pertanyaan > div').forEach(elem => elem.classList.add('hidden'));

    // Tampilkan pertanyaan yang dipilih
    document.querySelector('.pertanyaan-' + pertanyaan).classList.remove('hidden');
}

function showPertanyaan2(pertanyaan, jawaban) {
    sendMessage('\n\nPERTANYAAN : \nKamu sayang enggak sama aku ndakkk? \n\n' + jawaban);

    // Semua pertanyaan disembunyikan
    document.querySelectorAll('.list-pertanyaan > div').forEach(elem => elem.classList.add('hidden'));

    // Tampilkan pertanyaan yang dipilih
    document.querySelector('.pertanyaan-' + pertanyaan).classList.remove('hidden');
}

function showPertanyaan3(response,jawaban) {
    sendMessage('\n\nPERTANYAAN : \nKamu mau ndakkk jadi pacarrr aku nayyyy \n\n' + jawaban);
    sendMessage('\n\n NAYLA NERIMA KAMU  \n SEKARANG KAMU RESMI JADIAN \n\n' + fDate);
    // Sembunyikan pertanyaan-3
    document.querySelector('.pertanyaan-3').classList.add('hidden');
    
    // Tampilkan luv-3
    document.querySelector('.luv-3').classList.remove('hidden');
    
    // Lakukan sesuatu dengan respons yang diterima (contoh: menampilkan pesan)
    document.querySelector('.luv-3 .bingkai p');
}

function showP1Tidak() {
    sendMessage('\n\nPERTANYAAN : \nAku Mauu Nanyaa Boleh ndakkkk hehehe? \n\nTidak');

    // Semua pertanyaan disembunyikan
    document.querySelectorAll('.list-pertanyaan').forEach(elem => elem.classList.add('hidden'));

    // Tampilkan pertanyaan p1-tidak
    document.querySelector('.p1-tidak').classList.remove('hidden');
}

function showP2Tidak() {
    sendMessage('\n\nPERTANYAAN : \nKamu sayang enggak sama aku ndakkk? \n\nTidak');

    // Semua pertanyaan disembunyikan
    document.querySelectorAll('.list-pertanyaan').forEach(elem => elem.classList.add('hidden'));

    // Tampilkan pertanyaan p2-tidak
    document.querySelector('.p2-tidak').classList.remove('hidden');
}

function openWhatsApp() {
    // Gantilah 'YOUR_PHONE_NUMBER' dengan nomor telepon Anda dan 'YOUR_MESSAGE' dengan pesan yang ingin Anda kirim
    var phoneNumber = '6289682770273';
    var message = encodeURIComponent('AKU MAU SAMA KAMU');

    // Membuat URL untuk membuka WhatsApp dengan nomor telepon dan pesan
    var whatsappUrl = 'https://wa.me/' + phoneNumber + '?text=' + message;

    // Membuka URL pada tab atau jendela baru
    window.open(whatsappUrl, '_blank');
}
