const paginate = (hotels) => {
  const itemsPerPage = 24;
  const numberOfPages = Math.ceil(hotels.length / itemsPerPage);

  const newHotels = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return hotels.slice(start, start + itemsPerPage);
  });
  return newHotels;
};

// const paginate = (hotels) => {
//   const obj2 = { asdf: "sadf", asdf: "sadfa" };
//   return obj2;
// };

export default paginate;

// const multiPropsFilter = (products, filters) => {
//   const filterKeys = Object.keys(filters);
//   return products.filter((product) => {
//     return filterKeys.every((key) => {
//       if (!filters[key].length) return true;
//       // Loops again if product[key] is an array (for material attribute).
//       if (Array.isArray(product[key])) {
//         return product[key].some((keyEle) => filters[key].includes(keyEle));
//       }
//       // return filters[key].includes(product[key]);
//       return filters[key].some((keyEle) => product[key].includes(keyEle));
//     });
//   });
// };
// export default multiPropsFilter;
