// Menü verisi
const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "./img/id-1.jpg",
    desc: "Spicy rice cakes, serving with fish cake.",
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "./img/id-2.jpg",
    desc: "Chicken noodle soup, serving with vegetables such as soy bean, green onion.",
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "./img/id-3.jpg",
    desc: "Boiling vegetables, serving with special hot sauce",
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "./img/id-4.jpg",
    desc: "Dan dan noodle, serving with green onion",
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "./img/id-5.jpg",
    desc: "Yangzhou style fried rice, serving with bean and pickles",
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "./img/id-6.jpg",
    desc: "Rice Sandwich, serving with soy sauce",
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "./img/id-7.jpg",
    desc: "Black bean sauce noodle, serving with green onion",
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "./img/id-8.jpg",
    desc: "Hot pepper sauce noodle, serving with soy bean and onion",
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "./img/id-9.jpg",
    desc: "Red bean paste dessert, serving with honey.",
  },
];

// Butonları ve menü kapsayıcılarını seç
const btnContainer = document.getElementById("btn-container");
const menuContainer = document.getElementById("menu-items-div");

// Kategorileri diziye atayarak al. All tüm kategorileri kapsayacak
const categories = ["All", ...new Set(menu.map((item) => item.category))];
// new Set, Kategorileri tekrarsız hale getiriyor 

// Butonları oluştur
categories.forEach((category) => {
  // yeni buton oluştur
  const button = document.createElement("button");
  // buton içine kategoi isimleri yazılır.
  button.textContent = category;
  // butona class eklenir
  button.classList.add("btn-item");
  // butona tıklayınca filterMenu() fonksiyonu gelsin.
  button.onclick = () => filterMenu(category);
  // Butonu html ye ekle.
  btnContainer.appendChild(button);
});

// Menü elemanlarını listeleme fonksiyonu
function displayMenu(menuItems) {
  menuContainer.innerHTML = ""; // Önce içeriği temizle her yeni filtre uygulandığında

  // menüdeki her yemek için html elemanı oluşturur. menuItems menu dizisininin parametre karşılığıdır.
  menuItems.forEach((item) => {
    // menüitem için kapsayıcı div oluştur
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-items", "col-lg-6", "col-sm-12");
    
    // her menüitem içerisine dizilerden gelen verileri yazdır
    menuItem.innerHTML = `
      <img class="photo" src="${item.img}" alt="${item.title}">
      <div class="menu-info">
        <div class="menu-title">
          <h4>${item.title}</h4>
          <h4 class="price">$${item.price}</h4>
        </div>
        <div class="menu-text">${item.desc}</div>
      </div>
    `;

    // menüitem kapsayıcı divini HTML ekle.
    menuContainer.appendChild(menuItem);
  });
}

// Filtreleme fonksiyonu
function filterMenu(category) {
  // Eğer kategori all ise hepsini yazdır.
  if (category === "All") {
    displayMenu(menu);
  }
  // değilse kategoriye göre filtrelenmiş ürünleri getir.
  else {
    const filteredMenu = menu.filter((item) => item.category === category);
    displayMenu(filteredMenu);
  }
}

// Sayfa yüklendiğinde tüm menüyü göster
window.addEventListener("DOMContentLoaded", () => displayMenu(menu));
