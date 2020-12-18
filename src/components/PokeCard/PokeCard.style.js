import styled from 'styled-components'

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;    
    overflow: hidden;
    border-radius: 12px;
    padding: 4px;
    margin: 4px;
    background-color: ${props => props.type.light};
    color: ${props => props.type.dark};
    border: 1px solid ${props => props.type.dark};

    h4 {
        margin: 4px 0;
    }
`
