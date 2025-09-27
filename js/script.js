// Function untuk mengisi nama pada pesan sambutan
function setWelcomeMessage() {
    // Anda bisa mendapatkan nama dari input form atau cara lain
    // Sebagai contoh, kita gunakan prompt
    let userName = prompt("Silakan masukkan nama Anda:");
    if (userName) {
        document.getElementById("welcomeMessage").textContent = "Hi " + userName + ", Welcome To Website";
    }
}

// Function untuk validasi dan menampilkan data form
function handleFormSubmit(event) {
    event.preventDefault(); // Mencegah form untuk refresh halaman

    const form = document.getElementById("messageForm");
    const formData = new FormData(form);

    const formDataDisplay = document.getElementById("formDataDisplay");
    formDataDisplay.innerHTML = "<h3>Form Data:</h3>";

    for (let [key, value] of formData.entries()) {
        formDataDisplay.innerHTML += `<p><strong>${key}:</strong> ${value}</p>`;
    }
}

// Menjalankan fungsi setWelcomeMessage saat halaman pertama kali dimuat
document.addEventListener("DOMContentLoaded", function() {
    setWelcomeMessage();

    // Menambahkan event listener ke form
    const form = document.getElementById("messageForm");
    if (form) {
        form.addEventListener("submit", handleFormSubmit);
    }
});