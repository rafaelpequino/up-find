import styled from "styled-components";

const InputContainer = styled.div`
    width: 100%;
    margin-top: 20px;

    & label {
        display: block;
        width: 100%;
        margin-bottom: 10px;
        color: var(--color-white);
    }

    & input {
        display: block;
        width: 100%;
        border: 1px solid var(--color-white);
        padding: 14px 20px;
        border-radius: 10px;
        background-color: transparent;
        border: 1px solid #A0A0A0;
        color: var(--color-white);
    }
`

const InputText = (props) => {
    return (
        <InputContainer>
            <label htmlFor={ props.name }>{ props.label }</label>
            <input type={ props.type } name={ props.name } id={ 'input-' + props.name } required={ props.required || true }/>
        </InputContainer>
    )
}

export default InputText;