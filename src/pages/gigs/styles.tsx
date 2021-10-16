import styled from 'styled-components'

interface TableTypes {
  smallerThan768px: any
}

export const GigsWrapper = styled.div`
  font-family: Helvetica;
  padding: 0 40px;
`
export const Table = styled.div`
  border-collapse: collapse;
  min-width: 100%;
  font-size: min(4vw, 14px, 1rem);
  overflow: auto;
  white-space: nowrap;
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
    text-align: ${({ smallerThan768px }: TableTypes) =>
      smallerThan768px && 'center'};
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
    display: ${({ smallerThan768px }: TableTypes) =>
      !smallerThan768px && 'flex'};
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

// interface AddGid {
//   sector: string
// }

export const AddGigWrapper = styled.div`
  label {
    color: #565d74;
    opacity: 0.8;
    /* margin-bottom: 15px; */
  }
  .custom-select {
    border-radius: 10px;
  }
  .custom-input {
    border-radius: 10px;
    min-width: 200px;
    width: 100%;
    height: 50px !important;
    margin-top: 10px;
  }
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: orange !important;
  }
`

interface ListProps {
  active: boolean
}

export const List = styled.li`
  color: ${({ active }: ListProps) => (active === true ? 'orange' : '#333')};
  margin-bottom: 20px;
  opacity: 0.8;
  list-style: none;
  position: relative;
  margin-left: 8%;
  transition: all 0.5s ease-in-out;
  &::before {
    content: '';
    cursor: pointer;
    border-radius: 50px;
    border: 4px solid
      ${({ active }: ListProps) =>
        active === true ? 'orange' : 'rgba(86, 93, 116,0.3)'};
    position: absolute;
    left: -17%;
    top: 50%;
    transform: translate(0, -55%);
    transition: 0.5s;
    height: 3px;
    width: 3px;
  }
  a {
    color: ${({ active }: ListProps) =>
      active === true ? 'orange' : 'rgba(86, 93, 116,0.3)'};
    transition: 0.5s;
    text-decoration: none;
  }
`
