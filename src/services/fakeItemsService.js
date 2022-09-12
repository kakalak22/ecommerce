import Vga from "../asset/images/vga.png";
import Cpu from "../asset/images/Cpu.png";
import Pc from "../asset/images/hero.jpg";
import Pc2 from "../asset/images/pc2.jpg";
const items = [
    {
        id: "pc01",
        name: "Geforce Galax 3070ti",
        image1: Vga,
        image2: Pc,
        price: 70,
        discountedPrice: 100,
        category: { id: "cate01", name: "PC" },
        rating: 4
    },
    {
        id: "pc02",
        name: "CPU Intel Core i9-10900K",
        image1: Cpu,
        image2: Pc2,
        price: 70,
        discountedPrice: 150,
        category:
            { id: "cate02", name: "VGA" },

    },
    {
        id: "pc03",
        name: "Geforce Galax 3070ti",
        image1: Vga,
        image2: Pc2,
        price: 70,
        discountedPrice: 250,
        category:
            { id: "cate04", name: "VGA" }

    },
    {
        id: "pc04",
        name: "CPU Intel Core i9-10900K",
        image1: Cpu,
        image2: Pc2,
        price: 70,
        discountedPrice: 350,
        category:
            { id: "cate03", name: "PSU" },

    },
    {
        id: "pc05",
        name: "Geforce Galax 3070ti",
        image1: Vga,
        image2: Pc2,
        price: 70,
        discountedPrice: 550,
        category:
            { id: "cate02", name: "Card" },

    },
    {
        id: "pc06",
        name: "CPU Intel Core i9-10900K",
        image1: Cpu,
        image2: Pc2,
        price: 70,
        discountedPrice: 450,
        category:
            { id: "cate05", name: "CPU" }

    },
    {
        id: "pc07", name: "PC", image1: Pc, image2: Pc2, price: 170, discountedPrice: 150, category:
            { id: "cate05", name: "CPU" }
    },
    {
        id: "pc08", name: "PC", image1: Pc, image2: Pc2, price: 70, discountedPrice: 250, category:
            { id: "cate05", name: "CPU" }
    },
    {
        id: "pc09", name: "PC", image1: Pc, image2: Pc2, price: 70, discountedPrice: 550, category:
            { id: "cate05", name: "CPU" }
    },
    {
        id: "pc10", name: "PC", image1: Pc, image2: Pc2, price: 70, discountedPrice: 750, category:
            { id: "cate05", name: "CPU" }
    },
    {
        id: "pc11", name: "PC", image1: Pc, image2: Pc2, price: 70, discountedPrice: 850, category:
            { id: "cate05", name: "CPU" }
    },
    {
        id: "pc12", name: "PC", image1: Pc, image2: Pc2, price: 70, discountedPrice: 550, category:
            { id: "cate05", name: "CPU" }
    },
    {
        id: "pc12", name: "PC", image1: Pc, image2: Pc2, price: 70, discountedPrice: 150, category:
            { id: "cate05", name: "CPU" }
    },
    {
        id: "pc12", name: "PC", image1: Pc, image2: Pc2, price: 70, discountedPrice: 150, category:
            { id: "cate05", name: "CPU" }
    },
    {
        id: "pc12", name: "PC", image1: Pc, image2: Pc2, price: 70, discountedPrice: 650, category:
            { id: "cate05", name: "CPU" }
    },
    {
        id: "pc12", name: "PC", image1: Pc, image2: Pc2, price: 70, discountedPrice: 50, category:
            { id: "cate05", name: "CPU" }
    },
    {
        id: "pc12", name: "PC", image1: Pc, image2: Pc2, price: 70, discountedPrice: 50, category:
            { id: "cate05", name: "CPU" }
    },
    {
        id: "pc12", name: "PC", image1: Pc, image2: Pc2, price: 70, discountedPrice: 50, category:
            { id: "cate05", name: "CPU" }
    },
    {
        id: "pc12", name: "PC", image1: Pc, image2: Pc2, price: 70, discountedPrice: 50, category:
            { id: "cate05", name: "CPU" }
    },
    {
        id: "pc12", name: "PC", image1: Pc, image2: Pc2, price: 70, discountedPrice: 50, category:
            { id: "cate05", name: "CPU" }
    },
    {
        id: "pc12", name: "PC", image1: Pc, image2: Pc2, price: 70, discountedPrice: 50, category:
            { id: "cate05", name: "CPU" }
    },
    {
        id: "pc12", name: "PC", image1: Pc, image2: Pc2, price: 70, discountedPrice: 50, category:
            { id: "cate05", name: "CPU" }
    },
    {
        id: "pc12", name: "PC", image1: Pc, image2: Pc2, price: 70, discountedPrice: 50, category:
            { id: "cate05", name: "CPU" }
    },
    {
        id: "pc12", name: "PC", image1: Pc, image2: Pc2, price: 70, discountedPrice: 50, category:
            { id: "cate05", name: "CPU" }
    },
    {
        id: "pc12", name: "PC", image1: Pc, image2: Pc2, price: 70, discountedPrice: 50, category:
            { id: "cate05", name: "CPU" }
    },
    {
        id: "pc12", name: "PC", image1: Pc, image2: Pc2, price: 70, discountedPrice: 50, category:
            { id: "cate05", name: "CPU" }
    },
    {
        id: "pc12", name: "PC", image1: Pc, image2: Pc2, price: 70, discountedPrice: 50, category:
            { id: "cate05", name: "CPU" }
    },
    {
        id: "pc12", name: "PC", image1: Pc, image2: Pc2, price: 70, discountedPrice: 50, category:
            { id: "cate05", name: "CPU" }
    },
];


export function getItems() {
    return items;
}

export function getItem(id) {
    return items.find((m) => m.id === id);
}