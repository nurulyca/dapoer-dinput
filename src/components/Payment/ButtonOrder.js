import React from 'react';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';

export default ({ firstName, lastName, handphone, address, city, province }) => {
    const carts = useSelector(state => state.shop.cart)
    console.log("carts", carts)
    const list = () =>  carts.map(item => {
       return item.qty + " " + item.name + "\n"
    })
    return (
        <a style={{textDecoration: "none"}} href={`https://wa.me/6281319856571?text=Saya mau order.%0A%0AIni data dan pesanannya.%0ANama: ${firstName}%0A${lastName} %0AAlamat lengkap: ${address}%0A${city}%0A${province} %0ANo. HP: ${handphone}%0AOrder:%0A${list()}%0A`}>
            <Button variant="light" style={{backgroundColor:"grey", color: "white"}}>Click here to check out.</Button></a>
    )

}