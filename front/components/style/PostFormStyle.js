import styled from "styled-components";


export const TweetForm = styled.form`
  margin-top: 5px;
  margin-bottom: 40px;
`

export const TweetTextArea = styled.textarea`
  width: 100%;
  height: 125px;
  padding: 10px;
  box-sizing: border-box;
  border: solid 2px #1E90FF;
  border-radius: 5px;
  font-size: 16px;
  resize: both;
`

// css
export const TweetButton = styled.button`
  /* Adapt the colors based on primary prop */
  margin-top: 1px;
  margin-left: 1px;
  background: ${props => props.white ? "white" : "white"};
  color: ${props => props.primary ? "palevioletred" : "palevioletred"};
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid skyblue;
  border-radius: 3px;
  display: flex; 
  justify-content: space-between;
  float:${props => props.right ? "right" : "left"};
`;