const form = document.getElementById("formkontak");

form.addEventListener("submit", function (event) {

    // Mencegah form berpindah halaman
    event.preventDefault();

    // ==================== NOMOR WHATSAPP TUJUAN ====================
    const nomorWhatsApp = "6281239760542";

    // ==================== MENGAMBIL DATA FORM ======================
    const nama = document.getElementById("Nama").value;
    const email = document.getElementById("Email").value;
    const telepon = document.getElementById("No.hp").value;
    const bidangMinat = document.getElementById("minat").value;
    const pesan = document.getElementById("pesan").value;

    // ==================== MEMBUAT ISI PESAN ========================
    const isiPesan =
`Halo, saya menghubungi melalui website CV.

Nama Lengkap : ${nama}
Email        : ${email}
No. Telepon  : ${telepon}
Bidang Minat : ${bidangMinat}

Pesan :
${pesan}`;

    // ==================== ENCODE PESAN =============================
    const pesanEncoded = encodeURIComponent(isiPesan);

    // ==================== MEMBUAT LINK WHATSAPP ====================
    const urlWhatsApp =
        `https://wa.me/${nomorWhatsApp}?text=${pesanEncoded}`;

    // ==================== MEMBUKA WHATSAPP =========================
    window.open(urlWhatsApp, "_blank");

});