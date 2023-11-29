import { ShoppingCart } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText, TitleText } from "../../../../components/Typography";
import { AddCartWrapper, CardFooter, CoffeecardContainer, Description, Name, Tags } from "./styles";
import { formatMoney } from "../../../../utils/formatMoney";
import { useCart } from "../../../../hooks/useCart";
import { useState } from "react";

export interface Coffee {
    id: number;
    tags: string[];
    name: string;
    description: string;
    photo: string;
    price: number;
}

interface CoffeeProps {
    coffee: Coffee;
}

export function CoffeeCard({ coffee}: CoffeeProps) {
    const [quantity, serQuantity] = useState(1)

    function handleIncerase() {
        serQuantity((state) => state + 1)
    }
    function handleDecrease() {
        serQuantity((state) => state - 1)
    }


    const { addCoffeeToCart } = useCart()

    function handleAddToCart() {
        const coffeeToAdd = {
            ...coffee,
            quantity,
        }

        addCoffeeToCart(coffeeToAdd)
    }

    const formattedPrice = formatMoney(coffee.price);

    return (
        <CoffeecardContainer>
            <img src={`/coffees/${coffee.photo}`} />

            <Tags>
                {coffee.tags.map((tag)=> (
                    <span key={`${coffee.id}${tag}`}>{tag}</span>
                ))}
            </Tags>

            <Name>{coffee.name}</Name>
            <Description>{coffee.description}</Description>

            <CardFooter>
                <div>
                    <RegularText size="s">R$:</RegularText>
                    <TitleText size="m" color="text" as="strong">{formattedPrice}</TitleText>
                </div>

                <AddCartWrapper>
                    <QuantityInput 
                        onIncrease={handleIncerase}
                        onDecrease={handleDecrease}
                        quantity={quantity}
                    />
                    <button onClick={handleAddToCart}>
                        <ShoppingCart size={22} weight="fill"/>
                    </button>
                </AddCartWrapper>
            </CardFooter>
        </CoffeecardContainer>
    )
}