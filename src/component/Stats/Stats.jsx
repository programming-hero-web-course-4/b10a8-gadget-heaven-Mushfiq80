import { useLoaderData } from "react-router-dom";
import { BarChart } from "@mui/x-charts";

const Stats = () => {
    const data = useLoaderData(); // Ensure the data format is an array of objects with product_title and price.

    // Extract product titles and prices for the chart
    const productTitles = data.map((item) => item.product_title);
    const prices = data.map((item) => item.price);

    return (
        <div>
            <div className="bg-violet-500 text-white text-center py-20 space-y-5">
                <h1 className="text-xl md:text-2xl font-bold">Statistics</h1>
                <p className="text-sm md:text-xs lg:text-lg w-2/3 mx-auto text-gray-100">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
            </div>
            <div className="flex justify-center mt-10">
                <BarChart
                    xAxis={[{ scaleType: "band", data: productTitles }]} // All product titles on the x-axis
                    series={[{ data: prices, label: "Price ($)" }]} // All prices as bars
                    width={800}
                    height={400}
                />
            </div>
        </div>
    );
};

export default Stats;