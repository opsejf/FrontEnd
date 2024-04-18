const formatPrice = (price) => {
    const formattedPrice = price.toString();
    return formattedPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default formatPrice;