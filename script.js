// Scrolls left or right when button is clicked
function scrollContainer(id, direction) {
  const container = document.getElementById(id);
  const cardWidth = container.clientWidth;

  const maxScroll = container.scrollWidth - cardWidth;
  const currentScroll = container.scrollLeft;

  if (direction > 0 && currentScroll >= maxScroll) {
    // If at end and going right, go back to start
    container.scrollLeft = 0;
  } else if (direction < 0 && currentScroll <= 0) {
    // If at start and going left, go to end
    container.scrollLeft = maxScroll;
  } else {
    // Normal scroll
    container.scrollBy({
      left: direction * cardWidth,
      behavior: "smooth",
    });
  }
}

// Renders a row of property cards
function renderSection(id, count = 6) {
  const container = document.getElementById(id);

  const properties = [
    {
      img: "walid.jpg",
      title: "3 Bed House in Gulshan",
      price: "৳60,000/month • Gulshan",
    },
    {
      img: "images/house2.jpg",
      title: "Studio Apartment in Dhanmondi",
      price: "৳25,000/month • Dhanmondi",
    },
    {
      img: "images/house3.jpg",
      title: "Family Flat in Uttara",
      price: "৳40,000/month • Uttara",
    },
    {
      img: "images/house4.jpg",
      title: "Cozy Room for Students",
      price: "৳15,000/month • Mirpur",
    },
    {
      img: "images/house5.jpg",
      title: "Luxurious Villa in Bashundhara",
      price: "৳1,20,000/month • Bashundhara",
    },
    {
      img: "images/house6.jpg",
      title: "Shared Flat in Farmgate",
      price: "৳10,000/month • Farmgate",
    },
    {
      img: "images/house7.jpg",
      title: "Duplex in Banani",
      price: "৳95,000/month • Banani",
    },
    {
      img: "images/house8.jpg",
      title: "1 Bed Studio in Mohammadpur",
      price: "৳20,000/month • Mohammadpur",
    },
    {
      img: "images/house9.jpg",
      title: "Office Space in Motijheel",
      price: "৳75,000/month • Motijheel",
    },
    {
      img: "images/house10.jpg",
      title: "Sublet Room in Banasree",
      price: "৳8,000/month • Banasree",
    },
    {
      img: "images/house11.jpg",
      title: "Luxury Penthouse in Gulshan 2",
      price: "৳2,00,000/month • Gulshan 2",
    },
    {
      img: "images/house12.jpg",
      title: "Small Room for Bachelor",
      price: "৳6,000/month • Tejgaon",
    },
  ];

  // Loop through the number of properties requested
  for (let i = 0; i < count && i < properties.length; i++) {
    const p = properties[i];
    const card = `
      <div class="bg-white rounded-lg shadow hover:shadow-xl transition min-w-[250px] max-w-[250px]">
        <img src="${p.img}" alt="Property" class="w-full h-40 object-cover" />
        <div class="p-4">
          <h4 class="font-bold text-sm">${p.title}</h4>
          <p class="text-sm text-gray-500">${p.price}</p>
          <button class="w-full mt-2 bg-blue-600 text-white py-2 rounded text-sm">View Details</button>
        </div>
      </div>
    `;
    container.innerHTML += card;
  }
}

// Runs after the page loads
window.onload = function () {
  renderSection("top-properties");
  renderSection("on-sale");
  renderSection("student-rentals");
  renderSection("special-offers");
  renderSection("others", 12);
};
