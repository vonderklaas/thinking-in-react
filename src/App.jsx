import PRODUCTS_FROM_API from './data';

import FilterableProductTable from './components/FilterableProductTable';

const App = () => {
  return <FilterableProductTable products={PRODUCTS_FROM_API} />;
};

export default App;
