import React from "react";
// import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";

let counter = 0;
function createData(name, Ofrid, mkt, dbm, rm) {
  counter += 1;
  return { id: counter, name, Ofrid, mkt, dbm, rm };
}
function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}
function getSorting(order, orderBy) {
  return order === "desc"
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
}

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3
  },
  table: {
    minWidth: 1020
  },
  tableWrapper: {
    overflowX: "auto"
  },
  row: {
    "&:nth-of-type(even)": {
      backgroundColor: theme.palette.background.default
    }
  }
});
const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#f2f2f2",
    color: "#4e4848"
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

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

class EnhancedTable extends React.Component {
  state = {
    order: "asc",
    orderBy: "calories",
    data: [
      createData("Exchange 90", "W123", 3.7, 67, 4.3),
      createData("Donut", "W452", 25.0, 51, 4.9),
      createData("Eclair", "W262", 16.0, 24, 6.0),
      createData("$Frozen yoghurt", "W159", 6.0, 24, 4.0),
      createData("Gingerbread", "W356", 16.0, 49, 3.9),
      createData("Honeycomb", "W408", 3.2, 87, 6.5),
      createData("zxzxzx cream sandwich", "W237", 9.0, 37, 4.3),
      createData("Jelly Bean", "W375", 0.0, 94, 0.0),
      createData("555", "W518", 26.0, 65, 7.0),
      createData("Lollipop", "W392", 0.2, 98, 0.0),
      createData("444", "W318", 0, 81, 2.0),
      createData("Nougat", "W360", 19.0, 9, 37.0),
      createData("21% EV Off", "W437", 18.0, 63, 4.0)
    ],
    page: 0,
    rowsPerPage: 15
  };

  handleRequestSort = (event, property) => {
    if (property === "name" || property === "Ofrid") {
      const orderBy = property;
      let order = "desc";

      if (this.state.orderBy === property && this.state.order === "desc") {
        order = "asc";
      }

      this.setState({ order, orderBy });
    }
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };
  createSortHandler = property => event => {
    this.handleRequestSort(event, property);
  };

  render() {
    const { classes } = this.props;
    const { data, order, orderBy, rowsPerPage, page } = this.state;
    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <TableHead>
              <TableRow>
                {rows.map(row => {
                  return (
                    <CustomTableCell
                      key={row.id}
                      sortDirection={orderBy === row.id ? order : false}
                    >
                      <TableSortLabel
                        active={orderBy === row.id}
                        direction={order}
                        onClick={this.createSortHandler(row.id)}
                      >
                        {row.label}
                      </TableSortLabel>
                    </CustomTableCell>
                  );
                }, this)}
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                .sort(getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => {
                  return (
                    <TableRow className={classes.row} key={n.id}>
                      <CustomTableCell component="th" scope="row">
                        {n.name}
                      </CustomTableCell>
                      <CustomTableCell>{n.Ofrid}</CustomTableCell>
                      <CustomTableCell>{n.RMSTATUS}</CustomTableCell>
                      <CustomTableCell>{n.OFFERID}</CustomTableCell>
                      <CustomTableCell>{n.OFFERNAME}</CustomTableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <CustomTableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            "aria-label": "Previous Page"
          }}
          nextIconButtonProps={{
            "aria-label": "Next Page"
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

export default withStyles(styles)(EnhancedTable);
