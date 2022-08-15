const reviews = [
    { productId: "pc01", review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ", rate: 4, customerName: "John" },
    { productId: "pc01", review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ", rate: 3, customerName: "Tim" },
    { productId: "pc01", review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ", rate: 4.5, customerName: "Lewis" },
];

export const getReviewById = (id) => {
    return reviews.filter(review => review.productId === id);
}
