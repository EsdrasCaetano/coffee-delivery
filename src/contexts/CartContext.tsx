import { ReactNode, createContext, useState, useEffect } from "react";
import { Coffee } from "../pages/Home/components/CoffeeCard";
import { produce } from "immer";

export interface CartItem extends Coffee {
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[];
    cartQuantity: number;
    cartItemsTotal: number;
    addCoffeeToCart: (Coffee: CartItem) => void;
    changeCartItemQuantity: (cartItemId: number, type: "increase" | "decrease") => void;
    removeCartItems: (cartItemId: number) => void;
    cleanCart: () => void;
}

interface ContextProviderProps {
    children: ReactNode;
}

const COFFEE_ITEMS_STORAGE_KEY = "coffeeDelivery:cartItems";

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: ContextProviderProps ) {
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY);
        if (storedCartItems) {
            return JSON.parse(storedCartItems);
        }
        return []
    })

    const cartQuantity = cartItems.length

    const cartItemsTotal = cartItems.reduce((total, cartItem) => {
        return total + cartItem.price * cartItem.quantity 
    }, 0)

    function addCoffeeToCart(coffee: CartItem) {
        const coffeeAlreadyExistsInCart = cartItems.findIndex((cartItem) => cartItem.id === coffee.id);

        const newCart = produce(cartItems, (draft) => {
            if (coffeeAlreadyExistsInCart < 0) {
                draft.push(coffee)
            } else {
                draft[coffeeAlreadyExistsInCart].quantity =+ coffee.quantity;
            }
        });

        setCartItems(newCart)
    }
    

    function changeCartItemQuantity(cartItemId: number, type: "increase" | "decrease"){
            const newCart = produce(cartItems, (draft) => {
                const coffeeExistsInCart = cartItems.findIndex(
                    (cartItem) => cartItem.id === cartItemId 
                );

                if (coffeeExistsInCart >= 0) {
                    const item = draft[coffeeExistsInCart];
                    draft[coffeeExistsInCart].quantity = type === "increase" ? item.quantity + 1 : item.quantity - 1;
                }
            })

            setCartItems(newCart)
    }

    function removeCartItems(cartItemId: number){
        const newCart = produce(cartItems, (draft) => {
            const coffeeExistsInCart = cartItems.findIndex(
                (cartItem) => cartItem.id === cartItemId
            );

            if (coffeeExistsInCart >= 0) {
                draft.splice(coffeeExistsInCart, 1);
            } 
        })
        setCartItems(newCart)
    }

    function cleanCart(){
        setCartItems([])
    }

    useEffect(() => {
        localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems))
    } ,[cartItems])

    return (
        <CartContext.Provider value={{ 
            cartItems, 
            cartQuantity, 
            cartItemsTotal,
            addCoffeeToCart, 
            changeCartItemQuantity, 
            removeCartItems,
            cleanCart,
            }}>
            {children}
        </CartContext.Provider>
    )
}