/*eslint-disable*/
import { Link } from "react-router-dom"
import Button from "../Elements/Button/Button"

const CardProduct = (props) => {
    const {children} = props

    return ( 
        <div className="w-full max-w-sm bg-gray-900 border rounded-lg shadow mx-2 my-2 flex flex-col justify-between">
             {children}
        </div>
    )
}

const Header = (props) => {
    const{image, id} = props

    return (
        <Link to={`/product/${id}`}>
            <img src={image} alt="product" className="p-8 rounded-t-lg h-60 w-full object-cover" />

        </Link>
    )
}

const Body = (props) => {
    const{children,name} = props

    return (
        <div className="px-5 pb-5 h-full">
        <a href="a">
            <h5 
            className="text-xl font-semibold tracking-tight text-white pb-1">
                {name.substring(0,20)}...
            </h5>
            <p className="text-m text-white">
                {children.substring(0,100)}...
            </p>
        </a>
        
    </div>
    )

}

const Footer = (props) => {
    const{price,children, handleAddToCart, id } = props

    return (
        <div className="flex justify-between items-center px-5 pb-5">
            <span className=" text-xl font-bold text-white ">
            {price.toLocaleString('id-ID',{style:'currency',currency:'USD' })}</span>
            <Button className="bg-blue-600 " onClick={() => handleAddToCart(id)} > {children}</Button>
        </div>

    )
}

CardProduct.Header = Header
CardProduct.Body = Body
CardProduct.Footer = Footer

export default CardProduct