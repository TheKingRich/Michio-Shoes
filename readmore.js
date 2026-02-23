// Mengambil semua paragraf di dalam class .sepatua
const paragraphs = document.querySelectorAll('.sepatua p');

paragraphs.forEach((p) => {
  const fullText = p.innerHTML;
  const charLimit = 200; // Kita perpendek limitnya agar tampilan kartu tetap rapi

  if (fullText.length > charLimit) {
    // Memotong teks pada spasi terakhir sebelum limit agar kata tidak terputus
    const shortText = fullText.substring(0, fullText.lastIndexOf(' ', charLimit));
    const hiddenText = fullText.substring(shortText.length);

    // Set tampilan awal
    p.innerHTML = `${shortText}<span class="dots">...</span><span class="more-text" style="display:none">${hiddenText}</span>`;

    // Membuat tombol secara dinamis
    const btn = document.createElement('button');
    btn.innerHTML = 'Read More';
    btn.className = 'read-more'; // Class ini sudah kita desain di style.css tadi
    btn.style.marginTop = '15px';
    btn.style.display = 'block';

    p.after(btn); // Menaruh tombol setelah paragraf agar tidak mengganggu teks

    btn.onclick = function() {
      const moreText = p.querySelector('.more-text');
      const dots = p.querySelector('.dots');

      if (moreText.style.display === 'none') {
        moreText.style.display = 'inline';
        dots.style.display = 'none';
        this.innerHTML = 'Read Less';
      } else {
        moreText.style.display = 'none';
        dots.style.display = 'inline';
        this.innerHTML = 'Read More';
      }
    };
  }
});
