import { useEffect, useState } from "react";
import ProductsList from "./ProductsList";
import { getProducts } from "../api";
import Header from "./Header";
import Dropdown from "./Dropdown";

function App() {

  const [order, setOrder] = useState("createdAt");
  const [items, setItems] = useState([]);
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleLoad = async (orderQuery) => {
    const { list } = await getProducts(orderQuery);
    setItems(list);
  };

  useEffect(() => {
    handleLoad(order);
  }, [order]);

  return (
    <div>
      <Header />
      <div>
        <p>베스트상품</p>
        <Dropdown />
      </div>
      <p>전체 상품</p>
      <ProductsList items={sortedItems} />
    </div>
  );
}

export default App;