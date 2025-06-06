import styled from "styled-components";

const InputContainer = styled.div`
    width: 100%;

    & label {
        display: block;
        width: 100%;
        margin-bottom: 10px;
        color: var(--color-white);
        font-size: 14px;
    }

    & input {
        display: block;
        width: 100%;
        padding: 12px 20px;
        border-radius: 10px;
        font-size: 14px;
        background-color:var(--color-overlay);
        border: none;
        color: var(--color-white);
    }

    & input:focus {
    outline: none;
        outline: 1px solid var(--color-white);
    }
`

const InputText = (props) => {
    return (
        <InputContainer style={{ margin: props.margin || '0' }}>
            {props.label && (
                <label htmlFor={'input-' + props.name}>
                    {props.label}
                    {props.required == 'false' ? '' : ' *'}
                </label>
            )}
            <input
                type={props.type}
                name={props.name}
                id={'input-' + props.name}
                required={props.required || true}
                style={{ outlineColor: props.color }}
                placeholder={props.placeholder}
            />
        </InputContainer>
    )
}

export default InputText;