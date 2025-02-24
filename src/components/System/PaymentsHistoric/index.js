import { Subtitle } from "../../Global/Subtitle";
import { SectionContainer } from "../SectionContainer";

const PaymentsHistoric = () => {
    return (
        <main>
            <SectionContainer>

                <Subtitle
                    $color="var(--color-white)"
                    $align="left"
                    $margin="0"
                    $padding="0"

                >
                    Histórico de Pagamentos
                </Subtitle>
            </SectionContainer>
            <br />
        </main>
    )
}

export default PaymentsHistoric;