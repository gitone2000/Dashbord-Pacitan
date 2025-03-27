document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".image__slider");
  const slides = document.querySelectorAll(".image__item");
  let currentIndex = 0;
  let autoSlideInterval;
  let isDragging = false;
  let startX;
  let moveX;

  function updateSliderPosition() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSliderPosition();
    }, 3000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  slider.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;
    stopAutoSlide();
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    moveX = e.clientX - startX;
  });

  slider.addEventListener("mouseup", () => {
    if (isDragging) {
      if (moveX < -50) {
        currentIndex = (currentIndex + 1) % slides.length;
      } else if (moveX > 50) {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      }
      updateSliderPosition();
    }
    isDragging = false;
    startAutoSlide();
  });

  slider.addEventListener("touchstart", (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
    stopAutoSlide();
  });

  slider.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    moveX = e.touches[0].clientX - startX;
  });

  slider.addEventListener("touchend", () => {
    if (isDragging) {
      if (moveX < -50) {
        currentIndex = (currentIndex + 1) % slides.length;
      } else if (moveX > 50) {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      }
      updateSliderPosition();
    }
    isDragging = false;
    startAutoSlide();
  });

  startAutoSlide();
});

// Kode untuk menangani efek blur pada gambar
document.addEventListener('DOMContentLoaded', function() {
    // Ambil semua elemen content__item
    const contentItems = document.querySelectorAll('.content__item');
    const contentLists = document.querySelectorAll('.content__list');

    // Tambahkan event listener untuk setiap item
    contentItems.forEach(item => {
        item.addEventListener('click', function() {
            // Dapatkan parent content__list dari item yang diklik
            const parentList = this.closest('.content__list');
            
            // Hapus class active dari semua item dalam list yang sama
            parentList.querySelectorAll('.content__item').forEach(i => i.classList.remove('active'));
            
            // Tambahkan class active ke item yang diklik
            this.classList.add('active');
            
            // Tambahkan class has-active ke content__list
            parentList.classList.add('has-active');
        });
    });

    // Tambahkan event listener untuk menutup gambar ketika mengklik overlay
    contentLists.forEach(list => {
        list.addEventListener('click', function(e) {
            // Cek jika yang diklik adalah overlay (element dengan class has-active)
            if (e.target === this) {
                // Hapus class active dari semua item dalam list ini
                this.querySelectorAll('.content__item').forEach(item => item.classList.remove('active'));
                // Hapus class has-active dari content__list
                this.classList.remove('has-active');
            }
        });
    });
});

let ulElement = document.getElementById("content__global");

for (let i = 1; i <= 90; i++) {
  // Tambahkan item <li>
  let li = document.createElement("li");
  li.className = "content__item";
  
  // Tambahkan gambar ke dalam li
  let img = document.createElement("img");
  img.src = "assets/imgs/gambar.jpeg"; // Menggunakan satu gambar yang sama
  img.alt = "";
  
  li.appendChild(img);
  ulElement.appendChild(li);
}

let listItems = document.querySelectorAll(".content__item");
let body = document.body; // Ambil elemen <body>

listItems.forEach((item) => {
  item.addEventListener("click", function () {
    // Hapus class 'active' dari semua <li> agar hanya satu yang aktif
    listItems.forEach((li) => li.classList.remove("active"));

    // Tambahkan class 'active' pada elemen yang diklik
    this.classList.add("active");

    // Tambahkan efek filter ke body
    body.classList.add("filtered");
  });
});

// Jika ingin menghapus filter saat mengklik di luar elemen <li>
document.addEventListener("click", function (e) {
  if (!e.target.closest(".content__item")) {
    listItems.forEach((li) => li.classList.remove("active"));
    body.classList.remove("filtered"); // Hapus efek filter
  }
});

document.addEventListener("DOMContentLoaded", function () {
    let menuItems = document.querySelectorAll(".menu__item a");

    menuItems.forEach((menuItem) => {
        menuItem.addEventListener("click", function () {
            // Hapus class 'active' dari semua menu
            menuItems.forEach((item) => item.classList.remove("active"));

            // Tambahkan class 'active' pada menu yang diklik
            this.classList.add("active");
        });
    });
});


