import ResponsiveAppBar from "../components/ResponsiveAppBar"
import ImgMediaCard from "../components/ImgMediaCard"
import axios from 'axios'
import { useState, useEffect } from 'react'
import { ItemInput } from "../components/ItemInput"
import SignInSide from "./SignInSide"

export const Home = () => {

    const [items, setItems] = useState([{}])
    useEffect(() => {
        axios.get('http://localhost:3001/getitems').then((response) => {
            // console.log(response);
            setItems(response.data)
        })
    }, [])

    return (
        <>
            <ResponsiveAppBar />
            <div className="inputitems">
                <div className="items">
                    {items.map((item) => {
                        return (
                            <div className="item">
                                <ImgMediaCard
                                    name={item.name}
                                    price={item.price}
                                    imageUrl={item.imageUrl}
                                    description={item.description} />
                            </div>
                        )
                    })}
                </div>
                <ItemInput />
                {/* <p>{SignInSide.sendUserLoginInfo.response.data.email}</p> */}
            </div>

        </>

    )
}