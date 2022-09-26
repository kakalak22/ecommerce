const categories = [
    { id: "pc", name: "PC" },
    { id: "psu", name: "PSU" },
    { id: "vga", name: "VGA" },
    { id: "cpu", name: "CPU" },
    { id: "monitor", name: "Monitor" }
];

export function getCategories() {
    return categories;
}

export function getcategory(id) {
    return categories.filter(cate => cate.id === id);
}