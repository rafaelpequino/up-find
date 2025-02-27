import styled from "styled-components";
import ItemPlans from "../ItemPlans";
import { StyledSpan, Title } from "../../Global/Title";
import { Subtitle } from "../../Global/Subtitle";
import { Button } from "../../Global/Button"

const PlansContainer = styled.section`
    max-width: 100%;
    background-color: var(--color-black);
    margin-top: -40px;
    padding: 70px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`

const PlansComparison = styled.div`
    width: 100%;
    max-width: 800px;
    margin: auto;
    display: flex;
    align-items: center;
    padding: 50px 0;

    @media (max-width: 999px) {
        flex-direction: column;
        gap: 20px;
    }
`

const Loose = styled.div`
    width: 100%;
    background-color: var(--color-white);
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 999px) {
        border-radius: 15px;
    }
`

const UpSafety = styled(Loose)`
    border-radius: 15px;
`

const Plans = (props) => {
    return (
        <PlansContainer>
            <Title 
                $color="var(--color-white)" 
                $align="center"
            >
                Você decide como o projeto será <StyledSpan $color={props.defaultColor}>fechado</StyledSpan>
            </Title>
            <PlansComparison>
                <Loose>
                    <Subtitle>Avulso</Subtitle>
                    <br />
                    { props.loosePlan.map((item, index) => (
                        <ItemPlans key={index} icon="x" text={item} />
                    )) }
                </Loose>
                <UpSafety style={{backgroundColor: props.defaultColor}}>
                    <Subtitle $color="var(--color-white)">UpSafety</Subtitle>
                    <br />
                    { props.upSafetyPlan.map((item, index) => (
                        <ItemPlans key={index} icon="check" text={item} />
                    )) }
                </UpSafety>
            </PlansComparison>
            
            <Button setBorderColor={props.defaultColor} setBackgroundColor="transparent">{ props.cta }</Button>
        </PlansContainer>
    )
}

export default Plans;