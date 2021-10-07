import { Table } from '../styles'

const TableComponent = ({ data }: any) => {
  return (
    <Table>
      <tr>
        <th></th>
        <th>Role</th>
        <th>Company</th>
        <th>Data</th>
        <th>Salary($)</th>
        <th></th>
      </tr>
      <tr className="spacer"></tr>
      {data?.map((gig: any) => (
        <>
          <tr>
            <td>
              <input type="checkbox" name="check" />
            </td>
            <td>Product Design</td>
            <td>{gig?.company?.name}</td>
            <td>20th, June 2020</td>
            <td>20,000 - 30,000</td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
          <tr className="spacer"></tr>
        </>
      ))}
    </Table>
  )
}

export default TableComponent
