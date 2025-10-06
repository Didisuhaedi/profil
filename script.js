document.addEventListener("DOMContentLoaded", function() {
    const btnCV = document.querySelector(".btn-green");

    btnCV.addEventListener("click", function(event) {
        event.preventDefault();
        alert("CV sedang dalam proses pembuatan. Silakan cek kembali nanti!");
    });
});
