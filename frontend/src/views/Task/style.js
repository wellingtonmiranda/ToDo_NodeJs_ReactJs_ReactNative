import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`

export const Form = styled.div`
width: 50%;
margin-bottom: 70px;
`

export const TypeIcons = styled.div`
width: 100%;
display: flex;
justify-content: center;

.inative {
  opacity: 0.5;
}

button {
  border: none;
  background: none;
}

img {
  width: 50px;
  height: 50px;
  margin: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
}
`

export const Input = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin: 20px 0; 

span {
  color: #707070;
  margin-bottom: 5px;
}

input {
  font-size: 16px;
  padding: 15px;
  border: none;
  border-bottom: 1px solid #EE6B26;
}

img {
  width: 20px;
  height: 20px;
  position: relative;
  left: 87%;
  bottom: 30px;
}

`
export const TextArea = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin: 20px 0; 

span {
  color: #707070;
  margin: 5px 0;
}

textarea {
  font-size: 16px;
  border: 1px solid #EE6B26;
}
`

export const Options = styled.div `
display: flex;
justify-content: space-between;


button {
  font-weight: bold;
  font-size: 18px;
  color: #20295F;
  border: none;
  background: none;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
}

div {
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  color: #EE6B26;
}
`

export const Save = styled.div`
width: 100%;
margin-top: 20px;

button {
  width: 100%;
  background: #EE6B26;
  border: none;
  font-size: 20px;
  color: #FFF;
  font-weight: bold;
  padding: 20px;
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

}
`