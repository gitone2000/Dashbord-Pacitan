const channelLinks = document.querySelectorAll(".channel-link");
const channelSection = document.querySelector(".channel");
const forumSection = document.querySelector(".forum");
const forumItems = document.querySelectorAll(".forum-item");
// const backButton = document.querySelector(".back-button");

channelLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const targetChannel = this.getAttribute("data-channel");

    forumItems.forEach((item) => {
      item.style.display = "none"; // Sembunyikan semua forum-item
    });

    const targetForum = document.getElementById(targetChannel);
    if (targetForum) {
      targetForum.style.display = "block"; // Tampilkan forum yang sesuai
    }

    channelSection.style.display = "none"; // Sembunyikan channel section
    forumSection.style.display = "block"; // Tampilkan forum section
  });
});

// Tombol kembali ke daftar channel


function backButton() {
    forumSection.style.display = "none"; // Sembunyikan forum section
    channelSection.style.display = "block";
}
