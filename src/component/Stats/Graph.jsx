import { BarChart } from "@mui/x-charts";

const Graph = ({ graph }) => {
  const { product_title, price } = graph;

  return (
    <div className="my-5 flex justify-center">
      <BarChart
        xAxis={[{ scaleType: "band", data: [product_title] }]} // x-axis is the product title
        series={[{ data: [price] }]} // y-axis is the price
        width={500}
        height={300}
      />
      <div className="text-center mt-3">
        <h3 className="text-lg font-bold">{product_title}</h3>
        <p className="text-gray-500">Price: ${price}</p>
      </div>
    </div>
  );
};

export default Graph;
