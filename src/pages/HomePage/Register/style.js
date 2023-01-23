import styled from 'styled-components'

export const RegisterStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 15px;
    margin-left: 12px;
    h1{
        color: #000000;
        font-size: 18px;
        margin-top: 15px;
        span{
            margin-right: 5px;
            color: #C6C6C6; 
        }
    }
    h2{
        color: ${props => props.mode === 'entrada' ? 'green' : 'red'};
        font-size: 18px;
        margin-top: 15px;
    }
`

// export const Box = styled.div`
//     background-color: white;
//     border-radius: 5px;
//     height: 91px;
//     width: 340px;
//     margin-top: 10px;
// `