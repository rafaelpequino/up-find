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
        background-color: rgb(36, 36, 36);
        border: none;
        color: var(--color-white);
        appearance: none; /* Remove a seta padrão */
        -webkit-appearance: none;
        -moz-appearance: none;
        cursor: pointer;
        padding-right: 40px; /* Espaço para a seta */
        position: relative;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white"><path d="M7 10l5 5 5-5z"/></svg>'); 
        background-repeat: no-repeat;
        background-position: right 10px center;
        background-size: 16px;
    }

    & select::-ms-expand {
        display: none;
    }

    & select:focus {
    outline: none;
        outline: 1px solid var(--color-white);
    }
`

const Select = (props) => {
    return (
        <SelectContainer style={{ margin: props.margin || '0' }}>
            <label htmlFor={'select-' + props.name}>
                {props.label}
                { props.required == 'false' ? '' : ' *' }
            </label>
            <select
                name={props.name}
                id={'select-' + props.name}
                required={props.required || true}
                style={{ outlineColor: props.color }}
            >
                <option disabled selected>Selecione uma opção...</option>
                {props.options.map(option => (
                    <option>{option}</option>
                ))}
            </select>
        </SelectContainer>
    )
}

export default Select;