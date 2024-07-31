/*eslint-disable*/
import { Fragment, useEffect, useRef, useState } from "react"
import Button from "../components/Elements/Button/Button"
import CardProduct from "../components/Fragment/CardProduct"
import Counter from "../components/Fragment/Counter"
import { getProducts } from "../services/product.service"

// const products = [
//     {
//         id: 1,
//         name: "Matematika", 
//         price: 50000,
//         image: "/images/image1.jpg",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
//     },
//     {
//         id: 2,
//         name: "Bahasa Indonesia", 
//         price: 100000,
//         image: "/images/image1.jpg",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
//     },
//     {
//         id: 3,
//         name: "Biologi", 
//         price: 50000,
//         image: "/images/image1.jpg",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     },
//     {
//         id: 4,
//         name: "Fisika", 
//         price: 50000,
//         image: "/images/image1.jpg",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     },
//     // {
//     //     id: 5,
//     //     name: "Fisika", 
//     //     price: 50000,
//     //     image: "/images/image1.jpg",
//     //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     // },
//     // {
//     //     id: 5,
//     //     name: "Fisika", 
//     //     price: 50000,
//     //     image: "/images/image1.jpg",
//     //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     // },
//     // {
//     //     id: 5,
//     //     name: "Fisika", 
//     //     price: 50000,
//     //     image: "/images/image1.jpg",
//     //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     // },
// ]

const email = localStorage.getItem("email")

const ProductPage = () => {
    const [cart,setCart] = useState([
        // {
        //     id: 1,
        //     qty: 1,
        // }
       
    ])
    const [totalPrice, setTotalPrice] = useState(0)
    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("cart")) || [])
    },[])

    const [products,setProducts] = useState([])

    useEffect(() => {
        getProducts((data) => {
            setProducts(data)
        })
    },[])

    useEffect(() => {
       if (products.length > 0 && cart.length > 0) {
        const total = cart.reduce((acc, item) => {
            return acc + item.qty * products.find((product) => product.id === item.id).price
        }, 0)
        setTotalPrice(total)
        localStorage.setItem("cart",JSON.stringify(cart))
       }
    },[cart, products])

    const handleLogout = () => {
        localStorage.removeItem("email")
        localStorage.removeItem("password")
        window.location.href = "/login"
    }

    const handleAddToCart = (id) => {
        setCart([...cart,
            {
                id,
                qty: 1,
            }
        ])
    }

    //useRef
    const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || [])

    const handleAddToCartRef = (id) => {
        cartRef.current = [...cartRef.current, {id, qty:1}]
        localStorage.setItem("cart",JSON.stringify(cartRef.current))
    }
    
    const totalPriceRef =useRef(null)

    document.getElementById
    console.log(totalPriceRef)

    useEffect(() => {
        if (cart.length > 0) {
            totalPriceRef.current.style.display = "table-row"
        } else {
            totalPriceRef.current.style.display = "none"
        }
    },[cart])

    return (
        <>
            <div className="flex justify-center  items-center ">
            <div className="w-5/6 flex justify-between h-40  bg bg-blue-900 text-white px-20 items-center">
            <div>
                <h1 className="text-xl">Easy Learning</h1>
            </div>
            <div>
                <h1 className="text-3xl font-bold">Class Shop</h1>
            </div>
                <div>
                {email}
                <Button className="ml-5 bg-red-600" onClick={handleLogout}>Logout</Button></div>
            
                </div>
               </div>
            
                <div className=" w-full flex justify-center flex-wrap item-center py-10">
                {products.length > 0 && products.map((product) =>(
                    <CardProduct key={product.id}>
                    <CardProduct.Header image={product.image}></CardProduct.Header>
                    <CardProduct.Body name={product.title}>{product.description}</CardProduct.Body>
                    <CardProduct.Footer price={product.price} 
                    id ={product.id} handleAddToCart={handleAddToCart}>Add to cart</CardProduct.Footer>
                    </CardProduct>
                )
                )}
                </div>
                <div className="w-full flex justify-center item-center py-10">
                    <h1 className="text-3xl font-bold text-blue-900 ml-9 mb-2">Cart</h1>
                   
                    <table className="text-left table-auto border-separate border-spacing-x-10 border-spacing-y-2">
                        <thead>
                        <tr>
                            {/* <th>id</th> */}
                            <th>Name</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                        </tr>
                        </thead>
                        <tbody>
                            {products.length > 0 && cart.map((item) =>{
                                const product = products.find((product) => product.id === item.id)
                                return (
                                    <tr key={item.id}>
                                        {/* <td>{item.id}</td> */}
                                        <td>{product.title.substring(0,20)}...</td>
                                        <td>{product.price.toLocaleString('id-ID',{style:'currency',currency:'USD'})}</td>
                                        <td>{item.qty}</td>
                                        <td>{(product.price * item.qty).toLocaleString('id-ID',{style:'currency',currency:'USD'})}</td>
                                    </tr>
                                )
                            })}
                            <tr ref={totalPriceRef} className="t font-bold">
                                <td colSpan={3}>Total Price</td>
                                <td> {(totalPrice).toLocaleString('id-ID',{style:'currency',currency:'USD'})}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            {/* <div className="mt-5 flex justify-center">
                <Counter></Counter>
            </div> */}
                    
            
        </>
    )
}


export default ProductPage