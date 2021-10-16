import { useState } from "react";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

// style
import { GigsWrapper, Table } from "./styles";
import TableComponent from "./components/Table";
import AddGigComponent from "./components/AddGig";

const Gigs = ({ gigs }: any) => {
  const [activeComponent, setActiveComponent] = useState("gigs");

  const { gigs: data } = gigs;
  return (
    <GigsWrapper>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3 style={{ fontSize: 42 }}>Gigs</h3>
        {activeComponent === "gigs" && (
          <Button
            variant="contained"
            endIcon={"+"}
            style={{
              backgroundColor: "#2F417E",
              color: "#fff",
              textTransform: "none",
              borderRadius: 10,
              width: "100px",
            }}
            onClick={() => setActiveComponent("add-gig")}
          >
            New gig
          </Button>
        )}
      </div>
      {activeComponent === "gigs" && (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <a
            href="#!"
            style={{
              borderBottom: "2.5px solid #FBB30B",
              minWidth: 200,
              padding: "15px 10px",
              color: "initial",
              textDecoration: "none",
            }}
          >
            <span>All gigs</span>
          </a>
          <a
            href="#!"
            style={{
              // borderBottom: '2.5px solid #FBB30B',
              minWidth: 200,
              padding: "15px 10px",
              color: "initial",
              textDecoration: "none",
            }}
          >
            <span>My gigs</span>
          </a>
          <a
            href="#!"
            style={{
              // borderBottom: '2.5px solid #FBB30B',
              minWidth: 200,
              padding: "15px 10px",
              color: "initial",
              textDecoration: "none",
            }}
          >
            <span>Rejected gigs</span>
          </a>
        </div>
      )}
      <Divider style={{ margin: "0 -70px" }} />
      {activeComponent === "gigs" && <TableComponent {...{ data }} />}
      {activeComponent === "add-gig" && (
        <AddGigComponent {...{ activeComponent, setActiveComponent }} />
      )}
    </GigsWrapper>
  );
};

export default Gigs;
