document.getElementById("btnWa").addEventListener("click", function () {
    let nomor = "621344309059";
    let pesan = "Halo, saya ingin pesan Kopi MAGIC COFFEE.";
    window.open(`https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`);
});



// Animasi muncul saat scroll
const items = document.querySelectorAll(".item");

function showItems() {
    items.forEach((item) => {
        const top = item.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        }
    });
}

items.forEach((item) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "0.6s";
});

window.addEventListener("scroll", showItems);
showItems();
