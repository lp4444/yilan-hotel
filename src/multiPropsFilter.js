const multiPropsFilter = (products, filters) => {
  const filterKeys = Object.keys(filters);
  return products.filter((product) => {
    return filterKeys.every((key) => {
      if (!filters[key].length) return true;
      // Loops again if product[key] is an array (for material attribute).
      if (Array.isArray(product[key])) {
        return product[key].some((keyEle) => filters[key].includes(keyEle));
      }
      // return filters[key].includes(product[key]);
      return filters[key].some((keyEle) => product[key].includes(keyEle));
    });
  });
};
export default multiPropsFilter;
