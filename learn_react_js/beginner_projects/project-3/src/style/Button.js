import styled from "styled-components"

export const Button = styled.button`
    padding: 10px 18px;

    min-width: 220px;

    background: black;
    border: 1px solid transparent;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    transition: 0.4s background ease-in;


    &:hover{
        background-color: white;
        border: 1px solid black;
        color: black;
        cursor: pointer;
        transition: 0.3s background ease-in;
    }
`;



export const OutlineButton = styled(Button)`

    background-color: white;
    border: 1px solid black;
    color: black;
    &:hover{
        background-color: black;
        border: 1px solid transparent;
        color: white;
        cursor: pointer;
        /* transition: 0.3s background ease-in; */
    }
`;