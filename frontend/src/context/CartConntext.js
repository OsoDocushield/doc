import React, { createContext, useState, useEffect } from 'react'


export const CartContext = createContext()

export function CartProvider({ children }) {
    const [cart, setCart] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        if (typeof window !== "undefined") {
            setCart(JSON.parse(localStorage.getItem('cart')) || {})
            setLoading(false)
        }
    }, []);
    function add(product) {
        cart[product.id] = product
        cart[product.id].quantity = 1
        localStorage.setItem('cart', JSON.stringify(cart))
        setCart({ ...cart })
    }

    function remove(productID) {
        let _ = cart
        delete _[productID]
        localStorage.setItem('cart', JSON.stringify(_))
        setCart({ ..._ })
    }

    function increase(productID) {
        let _ = cart
        cart[productID].quantity += 1
        localStorage.setItem('cart', JSON.stringify(_))
        setCart({ ..._ })
    }

    function decrease(productID) {
        let _ = cart
        if (cart[productID].quantity - 1 < 1) return
        cart[productID].quantity -= 1
        localStorage.setItem('cart', JSON.stringify(_))
        setCart({ ..._ })
    }

    return <CartContext.Provider value={{
        cart, add, remove, increase,
        decrease
    }}>
        {loading ? <></> : children}
    </CartContext.Provider>
}
