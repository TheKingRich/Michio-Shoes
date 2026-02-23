// Mengambil semua paragraf di dalam info produk
const cari = document.querySelectorAll('.product-info p');

for (let i = 0; i < cari.length; i++) {
    const pisahkan = cari[i].innerHTML;
    const jumlahkarakter = 200; // Dikurangi sedikit agar lebih rapi di kartu produk

    if (pisahkan.length > jumlahkarakter) {
        const treadless = pisahkan.substr(0, jumlahkarakter);
        const treadless1 = treadless.substr(0, treadless.lastIndexOf(" ") + 1);
        const readmore = pisahkan.substr(treadless1.length, pisahkan.length);
        
        // Set tampilan awal (teks terpotong)
        cari[i].innerHTML = treadless1;

        // Membuat tombol dengan class yang sudah kita buat di CSS
        const createtombol = document.createElement('button');
        createtombol.innerText = 'Read More';
        createtombol.setAttribute('class', 'read-more-btn'); 
        
        // Styling tambahan via JS agar pas di posisi teks
        createtombol.style.marginLeft = "5px";
        createtombol.style.display = "inline-block";
        
        cari[i].append(createtombol);

        createtombol.onclick = function() {
            // Jika saat ini sedang menampilkan teks pendek
            if (this.innerText === "Read More") {
                cari[i].innerHTML = treadless1 + readmore;
                this.innerText = "Read Less";
                this.classList.remove('read-more'); // Menghindari konflik logic lama
            } else {
                // Jika sedang menampilkan teks lengkap
                cari[i].innerHTML = treadless1;
                this.innerText = "Read More";
                this.classList.add('read-more');
            }
            // Tempelkan kembali tombolnya ke dalam paragraf
            cari[i].append(this);
        };
    }
}
