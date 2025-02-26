import styled from "styled-components";

const SelectContainer = styled.div`
    width: 100%;

    & label {
        display: block;
        width: 100%;
        margin-bottom: 10px;
        color: var(--color-white);
        font-size: 14px;
    }

    & select {
        display: block;
        width: 100%;
        padding: 12px 20px;
        border-radius: 10px;
        font-size: 14px;
        background-color:rgb(36, 36, 36);
        border: none;
        color: var(--color-white);
    }

    & select:focus {
    outline: none;
        outline: 1px solid var(--color-white);
    }
`

const Select = (props) => {
    return (
        <SelectContainer style={{margin: props.margin || '0'}}>
            <label htmlFor={ 'select-' + props.name }>{ props.label }</label>
            <select
                name={ props.name } 
                id={ 'select-' + props.name } 
                required={ props.required || true }
                style={{outlineColor: props.color}}   
            >
                <option disabled selected>Selecione uma opção...</option>
            </select>
        </SelectContainer>
    )
}

export default Select;