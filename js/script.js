let userName = prompt("Masukkan nama Anda:");
if (userName === '' || userName === null) {
        userName = "Guest";
    }
document.getElementById("welcomeText").innerText = "Hi " + userName + ", Welcome To Rispad Company Website";

document.getElementById("messageForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let birthdate = document.getElementById("birthdate").value;
    let gender = document.querySelector("input[name='gender']:checked").value;
    let message = document.getElementById("messageInput").value;

    let currentTime = new Date();

    document.getElementById("resultBox").innerHTML = `
        <p><b>Current time :</b> ${currentTime}</p>
        <p><b>Nama :</b> ${name}</p>
        <p><b>Tanggal Lahir :</b> ${birthdate}</p>
        <p><b>Jenis Kelamin :</b> ${gender}</p>
        <p><b>Pesan :</b> ${message}</p>
    `;

    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');


    if (menuBtn) {
    menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    });
    }
});
