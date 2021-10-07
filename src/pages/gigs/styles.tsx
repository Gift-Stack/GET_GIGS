import styled from 'styled-components'

export const GigsWrapper = styled.div`
  font-family: Helvetica;
  padding: 0 40px;
`
export const Table = styled.div`
  border-collapse: collapse;
  width: 100%;
  td,
  th {
    text-align: left;
    padding: 8px;
  }
  th {
    color: #565d74;
    opacity: 0.8;
    font-size: smaller;
    padding-top: 30px;
  }
  tr th:last-child {
    width: 150px;
  }
  tr td:first-child {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    padding-left: 25px;
  }
  tr td:last-child {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }
  tr:not(tr:first-child) {
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000003;
    border-radius: 15px;
  }
  tr {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .spacer {
    height: 15px;
    border: none !important;
    background: none !important;
  }
  input[type='checkbox'] {
    height: 20px;
    width: 20px;
    border: 1px solid #e4e4e4;
    border-radius: 8px;
  }
  button {
    background: #fcf4e6 0% 0% no-repeat padding-box;
    color: #fbb30b;
    border-radius: 10px;
    border: none;
    width: 150px;
    height: 45px;
    cursor: pointer;
  }
`

export const AddGigWrapper = styled.div`
  label {
    color: #565d74;
    opacity: 0.8;
  }
  .custom-input {
    border-radius: 10px;
    min-width: 300px;
    &:focus {
      border-color: orange !important;
      outline: orange;
    }
  }
  label.Mui-focused {
    color: 'green';
    border-color: orange !important;
  }
  li {
    color: orange;
    margin-bottom: 20px;
    opacity: 0.8;
  }
`
