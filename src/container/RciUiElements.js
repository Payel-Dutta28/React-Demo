import React, { Component } from "react";
import RciCatButton from "../component/RciCatButton";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import RciCatTable from "../component/RciCatTable";
import Header from "../component/RciHeader";

const styles = theme => ({});
const CSSDemoStyle = {
  margin: "100px"
};

const rows = [
  { id: "name", label: "OFFER NAME" },
  { id: "Ofrid", label: "OFFER ID" },
  {
    id: "mkt",
    label: "MKT STATUS"
  },
  { id: "dbm", label: "DBM STATUS" },
  { id: "rm", label: "RM STATUS" }
];

const data = [
  { name: "Exchange 90", Ofrid: "W123", mkt: 3.7, dbm: 67, rm: 4.3 },
  { name: "Donut", Ofrid: "W452", mkt: 25.0, dbm: 51, rm: 4.9 },
  { name: "Eclair", Ofrid: "W262", mkt: 16.0, dbm: 24, rm: 6.0 },
  { name: "$Frozen yoghurt", Ofrid: "W159", mkt: 6.0, dbm: 24, rm: 4.0 },
  { name: "Gingerbread", Ofrid: "W356", mkt: 16.0, dbm: 49, rm: 3.9 },
  { name: "Honeycomb", Ofrid: "W408", mkt: 3.2, dbm: 87, rm: 6.5 },
  { name: "zxzxzx cream sandwich", Ofrid: "W237", mkt: 9.0, dbm: 37, rm: 4.3 },
  { name: "555", Ofrid: "W518", mkt: 26.0, dbm: 65, rm: 7.0 },
  { name: "444", Ofrid: "W318", mkt: 0, dbm: 81, rm: 2.0 },
  { name: "Nougat", Ofrid: "W360", mkt: 19.0, dbm: 9, rm: 37.0 },
  { name: "21% EV Off", Ofrid: "W437", mkt: 18.0, dbm: 63, rm: 4.0 }
];

class RciUiElements extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header userName="John Doe" />
        <h1>UI Elements</h1>
        <div>
          <h4>Buttons</h4>
          <RciCatButton
            type={"primary"}
            variant={"outlined"}
            text={"SECONDARY BUTTON"}
            className={classes.button}
          />
          <RciCatButton
            type={"primary"}
            variant={"contained"}
            text={"PRIMARY BUTTON"}
            className={this.props.button}
          />
          <RciCatButton
            type={"secondary"}
            variant={"outlined"}
            text={"TERTIARY BUTTON"}
            className={this.props.button}
          />
        </div>
        <div>
          <h4>Links</h4>
          <Button href="#text-buttons" color="primary">
            Link
          </Button>
          <h4>Action Items</h4>
        </div>
        <div style={CSSDemoStyle}>
          <RciCatTable headingRows={rows} data={data} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(RciUiElements);
