
const items = [
    {
        id: "vga01",
        name: "PNY GeForce GTX 1650 4GB GDDR6 – Single Fan",
        image2: "https://tandoanh.vn/wp-content/uploads/2022/09/PNY-GeForce-GTX-1650-4GB-GDDR6-Single-Fan-H2-600x600.jpg",
        image1: "https://tandoanh.vn/wp-content/uploads/2022/09/PNY-GeForce-GTX-1650-4GB-GDDR6-Single-Fan-H7-600x600.jpg",
        price: 3390000,
        discountedPrice: 3390000,
        category: { id: "vga", name: "VGA" },
        rating: 4
    },
    {
        id: "vga02",
        name: "ZOTAC GAMING GeForce GTX 1650 AMP Core GDDR6",
        image1: "https://tandoanh.vn/wp-content/uploads/2022/09/ZOTAC-GAMING-GeForce-GTX-1650-AMP-Core-GDDR6-H1-600x600.jpg",
        image2: "https://tandoanh.vn/wp-content/uploads/2022/09/ZOTAC-GAMING-GeForce-GTX-1650-AMP-Core-GDDR6-H2-600x600.jpg",
        price: 3800000,
        discountedPrice: 3650000,
        category: { id: "vga", name: "VGA" },
        rating: 5
    },
    {
        id: "vga03",
        name: "Galax GeForce® GTX 1660 SUPER™ (1-Click OC)",
        image1: "https://tandoanh.vn/wp-content/uploads/2022/06/Galax-GeForce%C2%AE-GTX-1660-SUPER%E2%84%A2-1-Click-OC-H1.jpeg",
        image2: "https://tandoanh.vn/wp-content/uploads/2022/06/Galax-GeForce%C2%AE-GTX-1660-SUPER%E2%84%A2-1-Click-OC-H2.jpeg",
        price: 3800000,
        discountedPrice: 3650000,
        category: { id: "vga", name: "VGA" },
        rating: 4
    },
    {
        id: "vga04",
        name: "Gigabyte GeForce RTX™ 3090 Ti GAMING 24G – 24GB GDDR6X",
        image1: "https://tandoanh.vn/wp-content/uploads/2022/08/Gigabyte-GeForce-RTX%E2%84%A2-3090-Ti-GAMING-24G-H1.jpg",
        image2: "https://tandoanh.vn/wp-content/uploads/2022/08/Gigabyte-GeForce-RTX%E2%84%A2-3090-Ti-GAMING-24G-H2.jpg",
        price: 40000000,
        discountedPrice: 40000000,
        category: { id: "vga", name: "VGA" },
        rating: 4
    },
    {
        id: "cpu01",
        name: "Intel Pentium Gold G6505 (4.2GHz, 2 nhân 4 luồng, 4MB Cache)",
        image1: "https://tandoanh.vn/wp-content/uploads/2021/10/Intel-Pentium-Gold-G6405-4.1GHz-2-nhan-4-luong-4MB-Cache-600x600.jpeg",
        image2: "https://cdn11.bigcommerce.com/s-6bkt1ygjlf/images/stencil/608x608/products/860328/932524/SRH3Z-lg__87142.1636117699.jpg?c=2",
        price: 1550000,
        discountedPrice: 1550000,
        category: { id: "cpu", name: "CPU" },
        rating: 4
    },
    {
        id: "cpu02",
        name: "CPU INTEL Core i3-10105F (4C/8T, 3.70 GHz - 4.40 GHz, 6MB) - 1200",
        image1: "https://lh3.googleusercontent.com/qfS_Ni5r_G5iOPHPDNrkb0ojm_Or8odflaAkSlPhe9z2lZ_O_K3-nLaG_FYEN3PqYEOHK6FQDHLm0BBFbKHNDwLjsKSFGIo=w500-rw",
        image2: "https://lh3.googleusercontent.com/YSZhTYcLlujE_FJtmM9yq7T-5VOELGMJy1T1OE9eFxEiDI-X4hpdQ7wEbkCABI7DfH-ookKu-0z_7pIUjH6SDu3JGuA7Fdw=w500-rw",
        price: 2109000,
        discountedPrice: 1890000,
        category: { id: "cpu", name: "CPU" },
        rating: 4
    },
    {
        id: "cpu03",
        name: "CPU Intel Core I5-7600 (3.5GHz - 4.1GHz",
        image1: "https://lh3.googleusercontent.com/qfS_Ni5r_G5iOPHPDNrkb0ojm_Or8odflaAkSlPhe9z2lZ_O_K3-nLaG_FYEN3PqYEOHK6FQDHLm0BBFbKHNDwLjsKSFGIo=w500-rw",
        image2: "https://lh3.googleusercontent.com/YSZhTYcLlujE_FJtmM9yq7T-5VOELGMJy1T1OE9eFxEiDI-X4hpdQ7wEbkCABI7DfH-ookKu-0z_7pIUjH6SDu3JGuA7Fdw=w500-rw",
        price: 6230000,
        discountedPrice: 4690000,
        category: { id: "cpu", name: "CPU" },
        rating: 5
    },
    {
        id: "cpu04",
        name: "CPU Intel Core I7-7700K (4.2GHz)",
        image1: "https://lh3.googleusercontent.com/8q0S82MOhvu6xX8ghbLE-uerd4hI5l6-FIBQ6Xf29UiEQMOPs8X08GsQbTTJ3WHi_ydwNlvT-wUMSl-_kJCk=rw",
        image2: "https://lh3.googleusercontent.com/nHFZ63610HwDgFA839zfH3AjOtYZkrZ3lM9p84zXv_K_JnhnTOPfVlfwovaFp9H5pbsv86ICh6MpHlaUhQ=rw",
        price: 9300000,
        discountedPrice: 9300000,
        category: { id: "cpu", name: "CPU" },
        rating: 5
    },
    {
        id: "monitor01",
        name: "LG 34GL750-B UltraWide – 34 inch FHD IPS / 144Hz ",
        image1: "https://tandoanh.vn/wp-content/uploads/2019/11/LG-34GL750-B-UltraWide-3422-144Hz-G-Sync-Gaming-Monitor-600x600.jpg",
        image2: "https://tandoanh.vn/wp-content/uploads/2019/11/LG-34GL750-B-UltraWide-34%E2%80%B3-144Hz-G-Sync-%E2%80%93-Gaming-Monitor-H1-600x600.jpg",
        price: 13600000,
        discountedPrice: 12390000,
        category: { id: "monitor", name: "Monitor" },
        rating: 5
    },
    {
        id: "monitor02",
        name: "MSI Optix G273QF – 27 inch WQHD Rapid IPS / 165Hz ",
        image1: "https://tandoanh.vn/wp-content/uploads/2022/05/MSI-Optix-G273QF-27-inch-WQHD-Rapid-IPS-165Hz-1ms-G-Sync-Compatible-Chuyen-game-H1-600x599.jpeg",
        image2: "https://tandoanh.vn/wp-content/uploads/2022/05/MSI-Optix-G273QF-27-inch-WQHD-Rapid-IPS-165Hz-1ms-G-Sync-Compatible-Chuyen-game-H2-600x600.jpeg",
        price: 9590000,
        discountedPrice: 9590000,
        category: { id: "monitor", name: "Monitor" },
        rating: 5
    },
    {
        id: "psu01",
        name: "SilverStone Essentinal ET650-B 650W – 80 Plus Bronze PSU ",
        image1: "https://tandoanh.vn/wp-content/uploads/2022/08/SilverStone-ET650-B-H1-600x600.jpg",
        image2: "https://tandoanh.vn/wp-content/uploads/2022/08/SilverStone-ET650-B-H2-600x600.jpg",
        price: 1290000,
        discountedPrice: 1290000,
        category: { id: "psu", name: "PSU" },
        rating: 5
    },
    {
        id: "psu02",
        name: "EVGA SuperNOVA 850 GT – 80+ GOLD 850W – Fully Modular – Eco Mode  ",
        image1: "https://tandoanh.vn/wp-content/uploads/2022/05/EVGA-SuperNOVA-850-GT-80-GOLD-850W-Fully-Modular-H1-600x600.jpg",
        image2: "https://tandoanh.vn/wp-content/uploads/2022/05/EVGA-SuperNOVA-850-GT-80-GOLD-850W-Fully-Modular-H2-600x600.jpg",
        price: 3290000,
        discountedPrice: 3290000,
        category: { id: "psu", name: "PSU" },
        rating: 5
    },
    {
        id: "pc01",
        name: "MSI Gaming MidEnd Level (i5-12600K, B660M, 16GB DDR4, RTX 3060Ti, SSD 250GB)",
        image1: "https://tandoanh.vn/wp-content/uploads/2021/10/ASUS-TD-01-600x600.jpg",
        image2: "https://tandoanh.vn/wp-content/uploads/2021/10/Infinity-Soko-M-ATX-Case.jpeg",
        price: 70,
        discountedPrice: 100,
        category: { id: "pc", name: "PC" },
        rating: 4
    },
    {
        id: "pc02",
        name: "MSI Content Creator P50 11th (I5-11400, 16GB DDR4, GTX 1660 Super 6GB, SSD 512GB)",
        image1: "https://tandoanh.vn/wp-content/uploads/2022/06/MSI-Content-Creator-P50-11th-H1-600x600.jpeg",
        image2: "https://tandoanh.vn/wp-content/uploads/2022/06/MSI-Content-Creator-P50-11th-H2-600x600.jpegf",
        price: 27000000,
        discountedPrice: 27000000,
        category:
            { id: "pc", name: "PC" },

    },
    {
        id: "pc03",
        name: "DeskMini X300 Series – (AM4 Socket CPU, 2 Slot RAM Up to 3200Mhz, Dual M.2 NVMe, Wifi, USB 3.2 Gen1 TypeC)",
        image1: "https://tandoanh.vn/wp-content/uploads/2021/03/DeskMini-X300-Series-H1-600x600.jpg",
        image2: "https://tandoanh.vn/wp-content/uploads/2021/03/DeskMini-X300-Series-H2-600x600.jpg",
        price: 3490000,
        discountedPrice: 3490000,
        category:
            { id: "pc", name: "PC" }

    },
];


export function getItems() {
    return items;
}

export function getItem(id) {
    return items.find((m) => m.id === id);
}