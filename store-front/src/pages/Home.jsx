import ResponsiveAppBar from "../components/ResponsiveAppBar"
import ImgMediaCard from "../components/ImgMediaCard"
import axios from 'axios'
import { useState, useEffect } from 'react'
import { ItemInput } from "../components/ItemInput"
import SignInSide from "./SignInSide"
import Modal from 'react-modal'
import './Home.css'
// import Button from 'react-bootstrap/Button';
// import { Button } from 'react-bootstrap';
import Button from '@mui/material/Button';

Modal.setAppElement('#root')

export const Home = () => {

    const [items, setItems] = useState([{}])
    const [modalIsOpen, setModalIsOpen] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:3001/getitems').then((response) => {
            // console.log(response);
            setItems(response.data)
        })
    }, [])

    const handleOpenModal = () => {
        setModalIsOpen(true)
    }

    const handleCloseModal = () => {
        setModalIsOpen(false)
    }

    const customStyles = {
        content: {
            top: "50%",
            left: '50%',
            right: "auto",
            bottom: "auto",
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',

        }
    }

    return (
        <>

            <ResponsiveAppBar username={localStorage.getItem("firstName")} />
            <div className="sell-button">
                {/* <Button className="add-item-button btn ">Sell your own product here!</Button> */}
                <Button variant="contained" className="add-item-button" onClick={handleOpenModal}>Add your product here!</Button>
            </div>

            <div className="inputitems">
                <div className="items">
                    {items.map((item) => {
                        return (
                            <div className="item">
                                <ImgMediaCard
                                    name={item.name}
                                    price={item.price}
                                    imageUrl={item.imageUrl}
                                    description={item.description}
                                    date={item.dateAdded}
                                    seller={item.seller}
                                />
                            </div>
                        )
                    })}
                </div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={handleCloseModal}
                    style={customStyles}
                >

                    <ItemInput />

                </Modal>
                {/* <ItemInput /> */}
                {/* <p>{SignInSide.sendUserLoginInfo.response.data.email}</p> */}
            </div>

        </>

    )
}