import React, { useEffect, useState } from 'react'
import Card from './Card';
import NewCard from './NewCard';

const NewBody = () => {
    const [data, setData] = useState([]);

    const [color, setColor] = useState();

    const buttonClicked = () => {
        console.log("Button is Clicked");
        setColor(color == "black" ? "white" : "black")
    }

    const fetchData = async () => {

        const dataFetch = await fetch("https://api.github.com/users/Deepanker200")
        const json = await dataFetch.json();
        // console.log("Fetched JSON:", json); // ✅ check this

        setData(json)
    }

    // console.log("Previous:", data);

    useEffect(() => {
        fetchData()
    }, [])

    let listOfRestaurantsJS = [
        {
            info: {
                id: "385829",
                name: "The Belgian Waffle Co.",
                cloudinaryImageId:
                    "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/a38d20d7-bbb7-4b67-8bdd-7740e85cd4af_385824.JPG",
                locality: "Sinchai Colony",
                areaName: "Mohan Nagar",
                costForTwo: "₹200 for two",
                cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
                avgRating: 3.8,
                veg: true,
                parentId: "2233",
                avgRatingString: "4.7",
                totalRatingsString: "310",
                sla: {
                    deliveryTime: "50"
                }
            }
        },
        {
            info: {
                id: "385822",
                name: "Havmor",
                cloudinaryImageId:
                    "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/a38d20d7-bbb7-4b67-8bdd-7740e85cd4af_385824.JPG",
                locality: "Sinchai Colony",
                areaName: "Mohan Nagar",
                costForTwo: "₹200 for two",
                cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
                avgRating: 4.7,
                veg: true,
                parentId: "2233",
                avgRatingString: "4.7",
                totalRatingsString: "310",
                sla: {
                    deliveryTime: "50"
                }
            }
        },
        {
            info: {
                id: "385826",
                name: "MCD",
                cloudinaryImageId:
                    "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/a38d20d7-bbb7-4b67-8bdd-7740e85cd4af_385824.JPG",
                locality: "Sinchai Colony",
                areaName: "Mohan Nagar",
                costForTwo: "₹200 for two",
                cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
                avgRating: 4.1,
                veg: true,
                parentId: "2233",
                avgRatingString: "4.7",
                totalRatingsString: "310",
                sla: {
                    deliveryTime: "50"
                }
            }
        }
    ];

    if (!data || Object.keys(data).length === 0) return <p>Loading...</p>;

    return (
        <div>
            <div style={{ backgroundColor: color }}>

                {console.log("Hello, Friends")}   {/* it will print on console */}
                <h1 className="text-3xl text-red-500">Hello React</h1>
                <Card id="1" name="new card" />
                <button className="bg-slate-200 rounded p-1" onClick={buttonClicked}>Click Here!</button>
            </div>

            {listOfRestaurantsJS.map((i, index) => <NewCard key={index} resData={i} />)}
            {/* <NewCard resData={data} /> */}
        </div>
    )
}

export default NewBody