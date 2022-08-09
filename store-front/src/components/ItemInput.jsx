import './ItemInput.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

export const ItemInput = () => {

    let date = new Date()
    const [itemName, setItemName] = useState('')
    const [itemPrice, setItemPrice] = useState('')
    const [itemDescription, setItemDescription] = useState('')
    const [itemImage, setItemImage] = useState('')

    const createNewItem = () => {
        axios.post('http://localhost:3001/createitem', 
        {
            name: itemName,
            price: itemPrice,
            description: itemDescription,
            image: itemImage,
            date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
            seller: `${localStorage.getItem("firstName")} ${localStorage.getItem("lastName")}`
        }
        )
        window.location.reload()
    }

    return (
        <>
            <div className='input-card' >
                {/* <h3 className='title'>Add a new item to the store here!</h3> */}
                <div className='inputs'>

                    <label>Name</label>
                    <input type='text' placeholder="Keyboard" onChange={ (event) => {
                        setItemName(event.target.value)
                        console.log(itemName)
                    }}> 

                    </input>
                    <label>Price</label>
                    <input
                        type='number'
                        placeholder="$9.99"
                        onChange={ (event) => {
                            setItemPrice(event.target.value)
                            console.log(itemPrice)
                        }}
                        >
                    </input>
                    <label>Description</label>
                    <input
                        type='text'
                        placeholder="Wireless Keyboard"
                        onChange={ (event) => {
                            setItemDescription(event.target.value)
                            console.log(itemDescription)
                        }}
                        maxLength='200'
                        >
                    </input>
                    <label>Image Url</label>
                    <input
                        type='text'
                        placeholder="items/keyboard.jpg"
                        onChange={ (event) => {
                            setItemImage(event.target.value)
                            console.log(itemImage)
                        }}
                        >
                    </input>
                    <button className='add-item' onClick={createNewItem} >Add</button>

                </div>
            </div>
        </>
    )
}