
const galleryData = {
    mountains: [
        { id: "m1", name: "K2 (Godwin-Austen)", category: "mountain", image: "https://images.unsplash.com/photo-1627896157734-4d7d4388f28b?w=600&auto=format&fit=crop&q=60" },
        { id: "m2", name: "Nanga Parbat", category: "mountain", image: "https://images.unsplash.com/photo-1684925092698-9f69ba626b1c?w=600&auto=format&fit=crop&q=60" },
        { id: "m3", name: "Tirich Mir", category: "mountain", image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600&auto=format&fit=crop&q=60" },
        { id: "m4", name: "Rakaposhi", category: "mountain", image: "https://images.unsplash.com/photo-1744977223726-f4a44dbacc8a?w=600&auto=format&fit=crop&q=60" },
        { id: "m5", name: "Broad Peak", category: "mountain", image:"https://media.istockphoto.com/id/628662654/photo/broadpeak-view-along-the-way-to-ali-camp-k2-trek.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZUpD7eSexDuBx8byK6OQITwdJR1UIO791sSSLNOwAx4=" },
        { id: "m6", name: "Gasherbrum I", category: "mountain", image: "https://media.istockphoto.com/id/1162414836/photo/k2-mountain-peak-k2-trekking-pakistan-asia.webp?a=1&b=1&s=612x612&w=0&k=20&c=bQo_0Zk6euMOVAO3kemYky_J1egAdhiWAx_w3QgTZKw=" },
        { id: "m7", name: "Diran Peak", category: "mountain", image: "https://media.istockphoto.com/id/1280844497/photo/aerial-landscape-photos-of-karakorum-range.webp?a=1&b=1&s=612x612&w=0&k=20&c=mg3ipyaLqhgHWerX6Ib6pkyhnTskoL8GLU5b3fWvUig=" },
        { id: "m8", name: "Passu Cones", category: "mountain", image: "https://plus.unsplash.com/premium_photo-1675713797384-663933b28da9?w=600&auto=format&fit=crop&q=60" }
    ],
    valleys: [
        { id: "v1", name: "Hunza Valley", category: "valley", image: "https://plus.unsplash.com/premium_photo-1698098206457-edeff536c019?w=600&auto=format&fit=crop&q=60" },
        { id: "v2", name: "Neelum Valley", category: "valley", image: "https://images.unsplash.com/photo-1651135135875-a6d458a9462d?w=600&auto=format&fit=crop&q=60" },
        { id: "v3", name: "Swat Valley", category: "valley", image: "https://images.unsplash.com/photo-1550586678-f7225f03c44b?w=600&auto=format&fit=crop&q=60" },
        { id: "v4", name: "Kaghan Valley", category: "valley", image: "https://images.unsplash.com/photo-1668061867899-02b4cfa34747?w=600&auto=format&fit=crop&q=60" },
        { id: "v5", name: "Skardu Valley", category: "valley", image: "https://images.unsplash.com/photo-1679951124125-50cc4029d727?w=600&auto=format&fit=crop&q=60" },
        { id: "v6", name: "Kumrat Valley", category: "valley", image: "https://plus.unsplash.com/premium_photo-1722867183518-8e8029f9b05f?w=600&auto=format&fit=crop&q=60" },
        { id: "v7", name: "Kalash Valley", category: "valley", image: "https://tse2.mm.bing.net/th/id/OIP.BVQUgW0VA-2PSL8CZ79WkAHaEx?pid=Api&h=220&P=0" },
        { id: "v8", name: "Naltar Valley", category: "valley", image: "https://tse3.mm.bing.net/th/id/OIP.xdO9PqEEvkkVkOC9BJW88gHaEQ?pid=Api&h=220&P=0" },
        { id: "v9", name: "Chitral Valley", category: "valley", image: "https://plus.unsplash.com/premium_photo-1698098206457-edeff536c019?w=600&auto=format&fit=crop&q=60" },
        { id: "v10", name: "Naran Valley", category: "valley", image: "https://tse4.mm.bing.net/th/id/OIP.IROH1lquYC8vIeYA_nmCiAHaFj?pid=Api&h=220&P=0" }
    ],
    cities: [
        { id: "c1", name: "Lahore", category: "city", image: "https://images.unsplash.com/photo-1622546758596-f1f06ba11f58?w=600&auto=format&fit=crop&q=60" },
        { id: "c2", name: "Islamabad", category: "city", image: "https://images.unsplash.com/photo-1646514323937-e49758815da7?w=600&auto=format&fit=crop&q=60" },
        { id: "c3", name: "Karachi", category: "city", image: "https://media.istockphoto.com/id/1146033666/photo/karachi-from-above.webp?a=1&b=1&s=612x612&w=0&k=20&c=SQb6J_fWXI7NpmH0DEbp5dfYv0r9cFjWj0a2W8rtWlk=" },
        { id: "c4", name: "Peshawar", category: "city", image: "https://media.istockphoto.com/id/1849027360/photo/bala-hissar-the-ancient-fort-in-peshawar-pakistan.webp?a=1&b=1&s=612x612&w=0&k=20&c=ScOzsX2YWR6PTs0kq7i0S2gvSE8o2l0goV-U9LETub4=" },
        { id: "c5", name: "Quetta", category: "city", image: "https://plus.unsplash.com/premium_photo-1697729576092-3f0abf41aa1c?w=600&auto=format&fit=crop&q=60" },
        { id: "c6", name: "Multan", category: "city", image: "https://images.unsplash.com/photo-1598461814968-639d9321f483?w=600&auto=format&fit=crop&q=60" }
    ],
    ports: [
        { id: "p1", name: "Gwadar Port", category: "port", image: "https://tse1.mm.bing.net/th/id/OIP.NxgY1Cs3GbdknNWMYlMJmAHaD-?pid=Api&h=220&P=0" },
        { id: "p2", name: "Karachi Port", category: "port", image: "https://tse3.mm.bing.net/th/id/OIP.RU6ieqsKp3Rw52K39s-PZgHaFj?pid=Api&h=220&P=0" },
        { id: "p3", name: "Port Qasim", category: "port", image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&auto=format&fit=crop&q=60" },
        { id: "p4", name: "Lahore Dry Port", category: "port", image: "https://tse3.mm.bing.net/th/id/OIP.nYqgD_2ADQeg-qqP4ipzRQHaEG?pid=Api&h=220&P=0" },
        { id: "p5", name: "Sialkot Dry Port", category: "port", image: "https://tse2.mm.bing.net/th/id/OIP.eMgA_I_Q9mmQvMu4UNk8QAHaEK?pid=Api&h=220&P=0" }
    ]
};

// Elements Selectors
const galleryGrid = document.getElementById('galleryGrid');
const menuItems = document.querySelectorAll('#galleryMenu p');
const lightbox = document.getElementById('customLightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');


let filteredGalleryData = []; 
let currentImgIndex = 0;


function displayGallery(filter = 'all') {
    let htmlContent = "";
    filteredGalleryData = []; 

    for (let category in galleryData) {
        galleryData[category].forEach(item => {
            if (filter === 'all' || item.category === filter) {
                filteredGalleryData.push(item);

                htmlContent += `
                    <div class="img-card" onclick="openLightbox('${item.id}')">
                        <div class="card-image-wrapper">
                            <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/400x300?text=${item.name}'">
                            <div class="card-info">
                                <h3>${item.name}</h3>
                                <p>${item.category.toUpperCase()}</p>
                            </div>
                        </div>
                    </div>
                `;
            }
        });
    }
    galleryGrid.innerHTML = htmlContent;
}


function openLightbox(imgId) {

    currentImgIndex = filteredGalleryData.findIndex(img => img.id === imgId);

    if (currentImgIndex !== -1) {
        updateLightboxUI();
        lightbox.style.display = 'flex';
        document.body.classList.add('modal-open');
    }
}

function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.classList.remove('modal-open');
}

function changeImage(direction) {
    currentImgIndex += direction;


    if (currentImgIndex >= filteredGalleryData.length) {
        currentImgIndex = 0; // Start lines to reset
    } else if (currentImgIndex < 0) {
        currentImgIndex = filteredGalleryData.length - 1; // End loop track
    }

    updateLightboxUI();
}

function updateLightboxUI() {
    const currentItem = filteredGalleryData[currentImgIndex];
    

    lightboxImg.style.opacity = '0';
    
    setTimeout(() => {
        lightboxImg.src = currentItem.image;
        lightboxImg.alt = currentItem.name;
        lightboxCaption.innerText = currentItem.name;
        lightboxImg.style.opacity = '1';
    }, 150);
}

menuItems.forEach(button => {
    button.addEventListener('click', () => {
        menuItems.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const selectedFilter = button.getAttribute('data-target');
        displayGallery(selectedFilter); 
    });
});


document.getElementById('closeBtn').addEventListener('click', closeLightbox);
document.getElementById('nextBtn').addEventListener('click', () => changeImage(1));
document.getElementById('prevBtn').addEventListener('click', () => changeImage(-1));


lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});


document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'flex') {
        if (e.key === 'ArrowRight') changeImage(1);
        if (e.key === 'ArrowLeft') changeImage(-1);
        if (e.key === 'Escape') closeLightbox();
    }
});


displayGallery('all');
function openLightbox(imgId) {
    currentImgIndex = filteredGalleryData.findIndex(img => img.id === imgId);

    if (currentImgIndex !== -1) {
        updateLightboxUI();
        lightbox.style.display = 'flex';
        
    }
}

function closeLightbox() {
    lightbox.style.display = 'none';
}