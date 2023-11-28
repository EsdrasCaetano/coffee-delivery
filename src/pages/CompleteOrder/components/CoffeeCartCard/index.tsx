import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";

export function CoffeeCartCard() {
    return (
        <CoffeeCartCardContainer>
            <div>
                <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1702252800&Signature=NNgDjFxUI9DJcuotZtIcOrJnZ5vx6kwxkWqOODjEYVW9zcnkVjkz-btLZ~sgzFF~8QPnqwZ8ZbAUMtt~zJPrJvXq-IMjO1rYanquQm01YxqhDCxPW52rcsOcsfA71TBGmLuwwd9BzJS8J2F~M87lz1WRoj3U7IiVpNuqSNQuKKPuHaTdcF0p1ZpYqjUjHldlT6wAN~tQVpQ4G4GX-KGbj7Wx1LvvJuWJuxtzJHGML-lxlahbyAtbYIgArRGh9b8XK5ONFA5taSWCW9p9v8l0lo8jnQ7CXGzbfR7uxX~kcwaY2YMlLxMVVIZb67DPssqh-ToxVyGeFMnooom0mQ8jjQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />

                <div>
                    <RegularText color="subtitle">Expresso Tradicional</RegularText>
                    <ActionsContainer>
                        <QuantityInput size="small"/>
                        <RemoveButton>
                            <Trash size={16} />
                            REMOVER
                        </RemoveButton>
                    </ActionsContainer>
                </div>
            </div>

            <p>R$: 9,90</p>
        </CoffeeCartCardContainer>
    )
}