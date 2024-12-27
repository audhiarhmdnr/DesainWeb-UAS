document.getElementById("submitDonasi").addEventListener("click", function () {
    const donasi = parseInt(document.getElementById("donasi").value);
    
    if (!isNaN(donasi) && donasi > 0) {
      let currentDonasi = 25000000; 
      let targetDonasi = 50000000; 
      let newDonasi = currentDonasi + donasi;
      let progress = (newDonasi / targetDonasi) * 100;
      const progressBar = document.getElementById("donasiProgress");
      progressBar.style.width = progress + "%";
      progressBar.textContent = "Rp" + newDonasi.toLocaleString();
      const modal = new bootstrap.Modal(document.getElementById('myModal'));
      modal.show();
      document.getElementById("donasi").value = '';
    } else {
      alert("Masukkan nominal donasi yang valid.");
    }
  });
  
