document.getElementById("submitDonasi").addEventListener("click", function () {
    // Mengambil nilai nominal donasi yang diinputkan
    const donasi = parseInt(document.getElementById("donasi").value);
    
    if (!isNaN(donasi) && donasi > 0) {
      // Update progress bar
      let currentDonasi = 25000000; // Nilai donasi saat ini (Rp25.000.000)
      let targetDonasi = 50000000; // Target donasi (Rp50.000.000)
      
      // Menambahkan donasi baru ke progress bar
      let newDonasi = currentDonasi + donasi;
      
      // Menghitung persentase baru
      let progress = (newDonasi / targetDonasi) * 100;
      
      // Update elemen progress bar
      const progressBar = document.getElementById("donasiProgress");
      progressBar.style.width = progress + "%";
      progressBar.textContent = "Rp" + newDonasi.toLocaleString();
  
      // Menampilkan modal sukses
      const modal = new bootstrap.Modal(document.getElementById('myModal'));
      modal.show();
      
      // Reset input donasi setelah modal ditutup
      document.getElementById("donasi").value = '';
    } else {
      alert("Masukkan nominal donasi yang valid.");
    }
  });
  