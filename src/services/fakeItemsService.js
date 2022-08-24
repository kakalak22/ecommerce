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
        discountedPrice: 50,
    },
    {
        id: "pc02",
        name: "CPU Intel Core i9-10900K",
        image1: Cpu,
        image2: Pc2,
        price: 70,
        discountedPrice: 50,
    },
    {
        id: "pc03",
        name: "Geforce Galax 3070ti",
        image1: Vga,
        image2: Pc2,
        price: 70,
        discountedPrice: 50,
    },
    {
        id: "pc04",
        name: "CPU Intel Core i9-10900K",
        image1: Cpu,
        image2: Pc2,
        price: 70,
        discountedPrice: 50,
    },
    {
        id: "pc05",
        name: "Geforce Galax 3070ti",
        image1: Vga,
        image2: Pc2,
        price: 70,
        discountedPrice: 50,
    },
    {
        id: "pc06",
        name: "CPU Intel Core i9-10900K",
        image1: Cpu,
        image2: Pc2,
        price: 70,
        discountedPrice: 50,
    },
    { id: "pc07", name: "PC", image1: Pc, image2: Pc2, price: 70, discountedPrice: 50 },
    { id: "pc08", name: "PC", image1: Pc, image2: Pc2, price: 70, discountedPrice: 50 },
    { id: "pc09", name: "PC", image1: Pc, image2: Pc2, price: 70, discountedPrice: 50 },
    { id: "pc10", name: "PC", image1: Pc, image2: Pc2, price: 70, discountedPrice: 50 },
    { id: "pc11", name: "PC", image1: Pc, image2: Pc2, price: 70, discountedPrice: 50 },
    { id: "pc12", name: "PC", image1: Pc, image2: Pc2, price: 70, discountedPrice: 50 },
    { id: "pc12", name: "PC", image1: Pc, image2: Pc2, price: 70, discountedPrice: 50 },
    { id: "pc12", name: "PC", image1: Pc, image2: Pc2, price: 70, discountedPrice: 50 },
    { id: "pc12", name: "PC", image1: Pc, image2: Pc2, price: 70, discountedPrice: 50 },
    { id: "pc12", name: "PC", image1: Pc, image2: Pc2, price: 70, discountedPrice: 50 },
    { id: "pc12", name: "PC", image1: Pc, image2: Pc2, price: 70, discountedPrice: 50 },
    { id: "pc12", name: "PC", image1: Pc, image2: Pc2, price: 70, discountedPrice: 50 },
    { id: "pc12", name: "PC", image1: Pc, image2: Pc2, price: 70, discountedPrice: 50 },
    { id: "pc12", name: "PC", image1: Pc, image2: Pc2, price: 70, discountedPrice: 50 },
    { id: "pc12", name: "PC", image1: Pc, image2: Pc2, price: 70, discountedPrice: 50 },
    { id: "pc12", name: "PC", image1: Pc, image2: Pc2, price: 70, discountedPrice: 50 },
    { id: "pc12", name: "PC", image1: Pc, image2: Pc2, price: 70, discountedPrice: 50 },
    { id: "pc12", name: "PC", image1: Pc, image2: Pc2, price: 70, discountedPrice: 50 },
    { id: "pc12", name: "PC", image1: Pc, image2: Pc2, price: 70, discountedPrice: 50 },
    { id: "pc12", name: "PC", image1: Pc, image2: Pc2, price: 70, discountedPrice: 50 },
    { id: "pc12", name: "PC", image1: Pc, image2: Pc2, price: 70, discountedPrice: 50 },
    { id: "pc12", name: "PC", image1: Pc, image2: Pc2, price: 70, discountedPrice: 50 },
];

export function getItems() {
    return items;
}

export function getItem(id) {
    return items.find((m) => m.id === id);
}