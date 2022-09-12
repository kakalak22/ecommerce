const categories = [
    { id: "cate01", name: "PC" },
    { id: "cate02", name: "Card" },
    { id: "cate03", name: "PSU" },
    { id: "cate04", name: "VGA" },
    { id: "cate05", name: "CPU" }
];

export function getCategories() {
    return categories;
}

export function getcategory(id) {
    return categories.filter(cate => cate.id === id);
}