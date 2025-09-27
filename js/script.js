// Function untuk mengisi nama pada pesan sambutan
function setWelcomeMessage() {
    let userName = prompt("Silakan masukkan nama Anda:");
    if (userName && userName.trim() !== "") {
        document.getElementById("welcomeMessage").textContent =
            "Hi " + userName + ", Welcome To Website";
    }
}

// Function untuk validasi dan menampilkan data form
function handleFormSubmit(event) {
    event.preventDefault(); // Mencegah form untuk refresh halaman

    const form = event.target; // form yang sedang disubmit
    const formData = new FormData(form);

    const formDataDisplay = document.getElementById("formDataDisplay");
    formDataDisplay.innerHTML = "<h3>Form Data:</h3>";

    formData.forEach((value, key) => {
        formDataDisplay.innerHTML += `<p><strong>${key}:</strong> ${value}</p>`;
    });

    // Optional: reset form setelah submit
    form.reset();
}

// Menjalankan fungsi setelah halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
    setWelcomeMessage();

    const form = document.getElementById("messageForm");
    if (form) {
        form.addEventListener("submit", handleFormSubmit);
    }
});
