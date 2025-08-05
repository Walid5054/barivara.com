function scrollContainer(id, direction) {
  const container = document.getElementById(id);
  const cardWidth = 280; // fixed card width + margin approx

  const maxScroll = container.scrollWidth - container.clientWidth;
  const currentScroll = container.scrollLeft;

  if (direction > 0 && currentScroll >= maxScroll) {
    container.scrollLeft = 0;
  } else if (direction < 0 && currentScroll <= 0) {
    container.scrollLeft = maxScroll;
  } else {
    container.scrollBy({
      left: direction * cardWidth,
      behavior: "smooth",
    });
  }
}

function renderSection(id) {
  const container = document.getElementById(id);
  container.innerHTML = ""; // Clear previous cards

  const propertiesData = {
    "top-properties": [
      {
        img: "https://images.unsplash.com/photo-1572120360610-d971b9b63939?auto=format&fit=crop&w=400&q=80",
        title: "Modern Apartment in Gulshan",
        price: "৳1,20,000/month • Gulshan",
        beds: 3,
        baths: 2,
        size: 1500,
      },
      {
        img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=400&q=80",
        title: "Cozy Family House in Dhanmondi",
        price: "৳90,000/month • Dhanmondi",
        beds: 4,
        baths: 3,
        size: 1800,
      },
      {
        img: "https://images.unsplash.com/photo-1598928506311-2a9d7dd152f2?auto=format&fit=crop&w=400&q=80",
        title: "Luxury Villa in Banani",
        price: "৳2,50,000/month • Banani",
        beds: 5,
        baths: 4,
        size: 3500,
      },
      {
        img: "https://images.unsplash.com/photo-1560448099-60559d07c99c?auto=format&fit=crop&w=400&q=80",
        title: "Family Bungalow in Bashundhara",
        price: "৳1,75,000/month • Bashundhara",
        beds: 4,
        baths: 3,
        size: 2800,
      },
      {
        img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80",
        title: "Modern Flat in Mirpur",
        price: "৳70,000/month • Mirpur",
        beds: 2,
        baths: 2,
        size: 1200,
      },
      {
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
        title: "Compact Studio in Farmgate",
        price: "৳50,000/month • Farmgate",
        beds: 1,
        baths: 1,
        size: 600,
      },
    ],
    "on-sale": [
      {
        img: "https://images.unsplash.com/photo-1501183638714-8f0aed9a36b1?auto=format&fit=crop&w=400&q=80",
        title: "Modern Duplex in Dhanmondi",
        location: "Dhanmondi, Dhaka",
        beds: 3,
        baths: 2,
        size: 1500,
        price: "৳85,00,000",
        badges: ["For Sale", "Hot Deal"],
      },
      {
        img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=400&q=80",
        title: "Contemporary House in Gulshan",
        location: "Gulshan, Dhaka",
        beds: 4,
        baths: 3,
        size: 2200,
        price: "৳1,20,00,000",
        badges: ["For Sale"],
      },
      {
        img: "https://images.unsplash.com/photo-1560448071-c9e76ef38852?auto=format&fit=crop&w=400&q=80",
        title: "Luxury Penthouse in Banani",
        location: "Banani, Dhaka",
        beds: 5,
        baths: 4,
        size: 3200,
        price: "৳3,00,00,000",
        badges: ["For Sale", "New"],
      },
      {
        img: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80",
        title: "Classic Villa in Bashundhara",
        location: "Bashundhara, Dhaka",
        beds: 4,
        baths: 3,
        size: 2700,
        price: "৳1,80,00,000",
        badges: ["For Sale"],
      },
      {
        img: "https://images.unsplash.com/photo-1472220625704-91e1462799b2?auto=format&fit=crop&w=400&q=80",
        title: "Beachfront Property in Cox's Bazar",
        location: "Cox's Bazar",
        beds: 3,
        baths: 3,
        size: 2500,
        price: "৳2,50,00,000",
        badges: ["For Sale", "Hot Deal"],
      },
      {
        img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=400&q=80",
        title: "Suburban House in Uttara",
        location: "Uttara, Dhaka",
        beds: 4,
        baths: 3,
        size: 2300,
        price: "৳1,00,00,000",
        badges: ["For Sale"],
      },
    ],
    "student-rentals": [
      {
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
        title: "Cozy Student Room in Mirpur",
        price: "৳12,000/month • Mirpur",
        beds: 1,
        baths: 1,
        size: 500,
      },
      {
        img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=400&q=80",
        title: "Shared Apartment near University",
        price: "৳15,000/month • Dhanmondi",
        beds: 2,
        baths: 1,
        size: 700,
      },
      {
        img: "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=400&q=80",
        title: "Affordable Studio in Uttara",
        price: "৳10,000/month • Uttara",
        beds: 1,
        baths: 1,
        size: 600,
      },
      {
        img: "https://images.unsplash.com/photo-1505691723518-36a0fd6b7b44?auto=format&fit=crop&w=400&q=80",
        title: "Single Room in Dhanmondi",
        price: "৳8,000/month • Dhanmondi",
        beds: 1,
        baths: 1,
        size: 450,
      },
      {
        img: "https://images.unsplash.com/photo-1501183638714-8f0aed9a36b1?auto=format&fit=crop&w=400&q=80",
        title: "Economical Flat in Mohammadpur",
        price: "৳12,500/month • Mohammadpur",
        beds: 2,
        baths: 1,
        size: 700,
      },
      {
        img: "https://images.unsplash.com/photo-1560448071-c9e76ef38852?auto=format&fit=crop&w=400&q=80",
        title: "Shared Dormitory in Farmgate",
        price: "৳7,000/month • Farmgate",
        beds: 1,
        baths: 1,
        size: 400,
      },
    ],
    "special-offers": [
      {
        img: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=400&q=80",
        title: "Discounted Flat in Motijheel",
        price: "৳25,000/month • Motijheel",
        beds: 2,
        baths: 2,
        size: 1100,
        offer: "20% off for the first month!",
      },
      {
        img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=400&q=80",
        title: "Special Price Villa in Bashundhara",
        price: "৳95,000/month • Bashundhara",
        beds: 4,
        baths: 3,
        size: 2800,
        offer: "First month free utility services!",
      },
      {
        img: "https://images.unsplash.com/photo-1501183638714-8f0aed9a36b1?auto=format&fit=crop&w=400&q=80",
        title: "Limited Time Offer Duplex in Banani",
        price: "৳1,10,000/month • Banani",
        beds: 5,
        baths: 4,
        size: 3200,
        offer: "৳10,000 cashback on booking!",
      },
      {
        img: "https://images.unsplash.com/photo-1472220625704-91e1462799b2?auto=format&fit=crop&w=400&q=80",
        title: "Special Offer Penthouse in Gulshan",
        price: "৳2,00,000/month • Gulshan",
        beds: 4,
        baths: 3,
        size: 2700,
        offer: "10% discount on 6-month advance rent!",
      },
      {
        img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=400&q=80",
        title: "Discounted Family Home in Banasree",
        price: "৳35,000/month • Banasree",
        beds: 3,
        baths: 2,
        size: 1400,
        offer: "Free internet for 3 months!",
      },
      {
        img: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=400&q=80",
        title: "Special Price Apartment in Mohammadpur",
        price: "৳40,000/month • Mohammadpur",
        beds: 2,
        baths: 2,
        size: 1100,
        offer: "৳5,000 off on first rent payment!",
      },
    ],

    others: [
      {
        img: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=400&q=80",
        title: "Compact Studio in Tejgaon",
        price: "৳8,000/month • Tejgaon",
        beds: 1,
        baths: 1,
        size: 400,
      },
      {
        img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=400&q=80",
        title: "Family Home in Banasree",
        price: "৳35,000/month • Banasree",
        beds: 3,
        baths: 2,
        size: 1400,
      },
      {
        img: "https://images.unsplash.com/photo-1501183638714-8f0aed9a36b1?auto=format&fit=crop&w=400&q=80",
        title: "Modern Apartment in Mohammadpur",
        price: "৳40,000/month • Mohammadpur",
        beds: 2,
        baths: 2,
        size: 1100,
      },
      {
        img: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=400&q=80",
        title: "Cozy Room in Mirpur",
        price: "৳10,000/month • Mirpur",
        beds: 1,
        baths: 1,
        size: 450,
      },
      {
        img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=400&q=80",
        title: "Spacious Villa in Banani",
        price: "৳1,50,000/month • Banani",
        beds: 4,
        baths: 3,
        size: 2800,
      },
      {
        img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80",
        title: "Penthouse in Gulshan",
        price: "৳2,00,000/month • Gulshan",
        beds: 5,
        baths: 4,
        size: 3500,
      },
      {
        img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=400&q=80",
        title: "Duplex in Uttara",
        price: "৳95,000/month • Uttara",
        beds: 4,
        baths: 3,
        size: 2700,
      },
      {
        img: "https://images.unsplash.com/photo-1560448071-c9e76ef38852?auto=format&fit=crop&w=400&q=80",
        title: "Cozy Cottage in Farmgate",
        price: "৳55,000/month • Farmgate",
        beds: 3,
        baths: 2,
        size: 1600,
      },
      {
        img: "https://images.unsplash.com/photo-1505691723518-36a0fd6b7b44?auto=format&fit=crop&w=400&q=80",
        title: "Small Apartment in Motijheel",
        price: "৳45,000/month • Motijheel",
        beds: 2,
        baths: 1,
        size: 900,
      },
      {
        img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=400&q=80",
        title: "Economical Studio in Tejgaon",
        price: "৳12,000/month • Tejgaon",
        beds: 1,
        baths: 1,
        size: 550,
      },
      {
        img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=400&q=80",
        title: "Large Family Home in Banasree",
        price: "৳45,000/month • Banasree",
        beds: 5,
        baths: 3,
        size: 3200,
      },
      {
        img: "https://images.unsplash.com/photo-1501183638714-8f0aed9a36b1?auto=format&fit=crop&w=400&q=80",
        title: "Affordable Apartment in Mirpur",
        price: "৳20,000/month • Mirpur",
        beds: 2,
        baths: 2,
        size: 1100,
      },
      {
        img: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=400&q=80",
        title: "Shared Flat in Mohammadpur",
        price: "৳10,000/month • Mohammadpur",
        beds: 2,
        baths: 1,
        size: 900,
      },
      {
        img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=400&q=80",
        title: "Studio Flat in Banani",
        price: "৳25,000/month • Banani",
        beds: 1,
        baths: 1,
        size: 600,
      },
    ],
  };

  const properties = propertiesData[id];
  if (!properties) return;

  properties.forEach((p) => {
    let cardHtml;

    if (id === "on-sale") {
      const badgesHtml = p.badges
        .map(
          (b) =>
            `<span class="absolute top-2 ${
              b === "For Sale"
                ? "left-2 bg-red-600 text-white"
                : "right-2 bg-yellow-400 text-black"
            } text-xs px-2 py-1 rounded">${b}</span>`
        )
        .join("");

      cardHtml = `
      <div class="bg-white rounded-xl shadow-md w-[270px] shrink-0 overflow-hidden relative hover:shadow-xl transition flex flex-col">
        <div class="relative">
          <img src="${p.img}" alt="${
        p.title
      }" class="w-full h-48 object-cover" />
          ${badgesHtml}
        </div>
        <div class="p-4 space-y-2 flex flex-col flex-grow">
          <h4 class="text-lg font-semibold text-gray-800">${p.title}</h4>
          <p class="text-sm text-gray-500">📍 ${p.location || ""}</p>
          <div class="flex items-center justify-between text-xs text-gray-600 mt-2">
            <span>🛏 ${p.beds} Beds</span>
            <span>🛁 ${p.baths} Baths</span>
            <span>📐 ${p.size} sqft</span>
          </div>
          <p class="text-blue-600 font-bold text-xl mt-2">${p.price}</p>
          <a href="#" class="inline-block mt-auto bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition text-center">View Details</a>
        </div>
      </div>
    `;
    } else if (id === "special-offers") {
      cardHtml = `
    <div class="bg-white rounded-lg shadow hover:shadow-xl transition min-w-[270px] max-w-[270px] flex flex-col">
      <img src="${p.img}" alt="${p.title}" class="w-full h-40 object-cover" />
      <div class="p-4 flex flex-col flex-grow">
        <h4 class="font-bold text-sm">${p.title}</h4>
        <p class="text-sm text-gray-500">${p.price}</p>
        <p class="text-xs text-green-600 mt-1 italic">${
          p.offer || "Limited time offer!"
        }</p>
        <button class="mt-auto w-full bg-blue-600 text-white py-2 rounded text-sm">View Details</button>
      </div>
    </div>
  `;
    } else {
      cardHtml = `
      <div class="bg-white rounded-lg shadow hover:shadow-xl transition min-w-[270px] max-w-[270px] flex flex-col">
        <img src="${p.img}" alt="${p.title}" class="w-full h-40 object-cover" />
        <div class="p-4 flex flex-col flex-grow">
          <h4 class="font-bold text-sm">${p.title}</h4>
          <p class="text-sm text-gray-500">${p.price}</p>
          <button class="mt-auto w-full bg-blue-600 text-white py-2 rounded text-sm">View Details</button>
        </div>
      </div>
    `;
    }
    container.innerHTML += cardHtml;
  });
}

window.onload = function () {
  renderSection("top-properties");
  renderSection("on-sale");
  renderSection("student-rentals");
  renderSection("special-offers");
  renderSection("others");
};
