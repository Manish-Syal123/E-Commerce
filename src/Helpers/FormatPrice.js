const FormatPrice = ({ price }) => {
  //directly destructuring in parameter only insted of prop in constructor(price) then destructor {price}=price;
  return Intl.NumberFormat("en-In", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2, //after . only two 0 eg: 67000.00
  }).format(price / 100);
};

export default FormatPrice;
