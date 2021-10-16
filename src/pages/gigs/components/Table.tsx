import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/styles";
import { Table } from "../styles";

const useStyles = makeStyles({
  checkbox: {
    "&.Mui-checked": {
      color: "rgba(251, 179, 11,0.6)",
    },
  },
});

const TableComponent = ({ data, smallerThan768px }: any) => {
  const classes = useStyles();
  return (
    <Table smallerThan768px={smallerThan768px}>
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
              <Checkbox
                {...{
                  inputProps: {
                    "aria-label": "Checkbox demo",
                    name: "checked",
                  },
                }}
                className={classes.checkbox}
              />
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
  );
};

export default TableComponent;
