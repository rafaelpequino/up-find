import styled from "styled-components";

const InputContainer = styled.div`
    width: 100%;
    opacity: .5;

    & label {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        width: 100%;
        margin-bottom: 10px;
        color: var(--color-white);

        @media (max-width: 768px) {
            flex-direction: column;
        }
    }

    & label div {
        max-width: max-content;

        @media (max-width: 768px) {
            max-width: none;
            width: 100%;
        }
    }

    & input {
        visibility: hidden;
        height: 0;
        width: 0;
    }

    & input:focus {
    outline: none;
        outline: 1px solid var(--color-white);
    }
`

const BtnChooseFile = styled.div`
    padding: 20px 40px;
    background-color:var(--color-shadow-deep);
    border-radius: 10px;
    cursor: pointer;
    text-align: center;

`

const InputImg = (props) => {
    return (
        <InputContainer>
            <label
                htmlFor={'input-' + props.name}
            >
                <div>
                    {props.label} <br />
                    {props.advice}
                </div>

                <BtnChooseFile>
                    {props.text}
                </BtnChooseFile>
            </label>
            <div>
                <input
                    type="file"
                    name={props.name}
                    id={'input-' + props.name}
                    required={props.required || true}
                    style={{ outlineColor: props.color }}
                />
            </div>
        </InputContainer>
    )
}

export default InputImg;