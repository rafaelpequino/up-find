import styled from "styled-components";

const TextAreaContainer = styled.div`
    width: 100%;

    & label {
        display: block;
        width: 100%;
        margin-bottom: 10px;
        color: var(--color-white);
        font-size: 14px;
    }

    & textarea {
        display: block;
        width: 100%;
        padding: 12px 20px;
        border-radius: 10px;
        font-size: 14px;
        background-color:var(--color-overlay);
        border: none;
        color: var(--color-white);
    }

    & textarea:focus {
    outline: none;
        outline: 1px solid var(--color-white);
    }
`

const TextArea = (props) => {
    return (
        <TextAreaContainer style={{margin: props.margin || '0'}}>
            <label htmlFor={ 'textarea-' + props.name }>
                { props.label }
                { props.required == 'false' ? '' : ' *' }
            </label>
            <textarea 
                name={ props.name } 
                id={ 'textarea-' + props.name } 
                required={ props.required || true }
                style={{outlineColor: props.color}}    
                placeholder={ props.placeholder }
                rows="5"
            > 
            </textarea>
        </TextAreaContainer>
    )
}

export default TextArea;