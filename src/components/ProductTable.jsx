import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';

const ProductTable = ({ products, filterText, inStockOnly }) => {
  const rows = [];
  let lastCategory = null;

  const filterWords = (word, letters) => {
    if (word.toLowerCase().indexOf(letters.toLowerCase()) === -1) {
      return false;
    } else {
      return true;
    }
  };

  products.forEach((product) => {
    // Check if there is such product
    if (!filterWords(product.name, filterText)) {
      return;
    }
    // Check if product is in stock
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default ProductTable;
