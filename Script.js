
let currentPage = 1;
const totalPages = 3;

function showPage(page) {
    for (let i = 1; i <= totalPages; i++) {
        const p = document.getElementById(`page${i}`);
        p.classList.add('hidden');
    }
    document.getElementById(`page${page}`).classList.remove('hidden');
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

function addMessage() {
    const msg = document.getElementById('message').value;
    alert(`ข้อความของคุณ: ${msg}`);
}

window.onload = function() {
    showPage(currentPage);
    document.getElementById('music').play();
};
