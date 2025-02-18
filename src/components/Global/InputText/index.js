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
        padding: 16px 20px;
        border-radius: 10px;
        background-color:rgb(36, 36, 36);
        border: none;
        color: var(--color-white);
    }

    & input:focus {
    outline: none;
        border: 1px solid var(--color-white);
    }
`

const InputText = (props) => {
    return (
        <InputContainer>
            <label htmlFor={ props.name }>{ props.label }</label>
            <input 
                type={ props.type } 
                name={ props.name } 
                id={ 'input-' + props.name } 
                required={ props.required || true }
                style={{borderColor: props.color}}    
            />
        </InputContainer>
    )
}

export default InputText;