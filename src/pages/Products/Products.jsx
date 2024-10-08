import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import "./products.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { IoFilterSharp } from "react-icons/io5";
import multi from "../../assets/multi.png";
import axios from "axios";

function createData(
  id,
  img,
  name,
  sku,
  quantity,
  type,
  syncing,
  listing,
  action,
  reviews,
  say
) {
  return {
    id,
    img,
    name,
    sku,
    quantity,
    type,
    syncing,
    listing,
    action,
    reviews,
    say,
  };
}

const rows = [
  createData(1, "Cupcake", 305, 3.7, 67, 4.3, 0, 67, 4.3),
  createData(2, "Donut", 452, 25.0, 51, 4.9, 0, 67, 4.3),
  createData(3, "Eclair", 262, 16.0, 24, 6.0, 0, 67, 4.3),
  createData(4, "Frozen yoghurt", 159, 6.0, 24, 4.0, 0, 67, 4.3),
  createData(5, "Gingerbread", 356, 16.0, 49, 3.9, 0, 67, 4.3),
  createData(6, "Honeycomb", 408, 3.2, 87, 6.5, 0, 67, 4.3),
  createData(7, "Ice cream sandwich", 237, 9.0, 37, 4.3, 0, 67, 4.3),
  createData(8, "Jelly Bean", 375, 0.0, 94, 0.0, 0, 67, 4.3),
  createData(9, "KitKat", 518, 26.0, 65, 7.0, 0, 67, 4.3),
  createData(10, "Lollipop", 392, 0.2, 98, 0.0, 0, 67, 4.3),
  createData(11, "Marshmallow", 318, 0, 81, 2.0, 0, 67, 4.3),
  createData(12, "Nougat", 360, 19.0, 9, 37.0, 0, 67, 4.3),
  createData(13, "Oreo", 437, 18.0, 63, 4.0, 0, 67, 4.3),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

// const headCells = [
//     {
//         id: 'image',
//         numeric: false,
//         disablePadding: true,
//         label: 'Image',
//     },
//     {
//         id: 'sku',
//         numeric: true,
//         disablePadding: false,
//         label: 'SKU',
//     },
//     {
//         id: 'name',
//         numeric: true,
//         disablePadding: false,
//         label: 'Name',
//     },
//     {
//         id: 'quantity',
//         numeric: true,
//         disablePadding: false,
//         label: 'Quantity',
//     },
//     {
//         id: 'Product Type',
//         numeric: true,
//         disablePadding: false,
//         label: 'Product Type',
//     },
//     {
//         id: 'Syncing',
//         numeric: true,
//         disablePadding: false,
//         label: 'Syncing',
//     },
//     {
//         id: 'Active Listing',
//         numeric: true,
//         disablePadding: false,
//         label: 'Active Listing',
//     },
//     {
//         id: 'Actions',
//         numeric: true,
//         disablePadding: false,
//         label: 'Actions',
//     },
// ];

const headCells = [
  {
    id: "id",
    numeric: false,
    disablePadding: true,
    label: "Brand",
  },
  {
    id: "sku",
    numeric: true,
    disablePadding: false,
    label: "Category",
  },
  {
    id: "name",
    numeric: true,
    disablePadding: false,
    label: "Name",
  },
  {
    id: "quantity",
    numeric: true,
    disablePadding: false,
    label: "Availability",
  },
  {
    id: "Product Type",
    numeric: true,
    disablePadding: false,
    label: "Ratings",
  },
  {
    id: "Syncing",
    numeric: true,
    disablePadding: false,
    label: "Photo",
  },
  {
    id: "Active Listing",
    numeric: true,
    disablePadding: false,
    label: "Price",
  },
  {
    id: "Actions",
    numeric: true,
    disablePadding: false,
    label: "Sales Volume",
  },
  {
    id: "reviews",
    numeric: true,
    disablePadding: false,
    label: "Total reviews",
  },
  {
    id: "Say",
    numeric: true,
    disablePadding: false,
    label: "Customer say",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  // console.log(productData?.category_path)

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {/* {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null} */}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          {/* Nutrition */}
        </Typography>
      )}

      <Tooltip title="Search">
        <IconButton sx={{ fontSize: "20px", color: "#0076DF" }}>
          <IoSearch style={{ margin: "0 10px" }} />
          <span id="filter">Advanced Search</span>
        </IconButton>
      </Tooltip>
      <Tooltip title="Filter list">
        <IconButton
          sx={{ fontSize: "20px", marginRight: "20px", color: "#0076DF" }}
        >
          <IoFilterSharp style={{ margin: "0 10px" }} />
          <span id="filter">Filters</span>
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [active, setActive] = React.useState(1);
  const [productData, setProductData] = React.useState(1);

  function getRapidData() {
    axios({
      method: "get",
      url: "https://real-time-amazon-data.p.rapidapi.com/products-by-category?category_id=2478868012&page=1&country=US&limit=100&page=1",
      headers: {
        "x-rapidapi-ua": "RapidAPI-Playground",
        "x-rapidapi-key": "97cad7ab1bmsh4bc6e23c6ff64b1p10b62cjsnc0af7be0bb2e",
        "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
        Accept: "application/json",
      },
    })
      .then((res) => {
        setProductData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  React.useEffect(() => {
    getRapidData();
  }, []);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage]
  );

  console.log(productData);

  const newProducts = productData.forEach((e) => {
    console.log(e);
  });

  return (
    <div className="products">
      <div className="product-top">
        <div className="product-top-child">
          <div>
            <h2>Products</h2>
            <p>
              Manage and create products, kits, and parent products to easily
              view/set inventory levels, keep track of important product
              information, and manage listings.
            </p>
          </div>
          <div className="pro-btns">
            <button className="upload-btn">Upload Inventory</button>
            <button id="create-btn">
              Create Product{" "}
              <div>
                <RiArrowDropDownLine id="dropdown" />
              </div>
            </button>
            <button style={{ width: "120px" }} id="create-btn">
              Actions{" "}
              <div>
                <RiArrowDropDownLine id="dropdown" />
              </div>
            </button>
          </div>
        </div>
        <div className="product-active">
          <div
            className="active-child"
            id={active === 1 ? "product-active" : ""}
            onClick={() => {
              setActive(1);
            }}
          >
            Products
          </div>
          <div
            className="active-child"
            id={active === 2 ? "product-active" : ""}
            onClick={() => {
              setActive(2);
            }}
          >
            Multichannel Listings
          </div>
          <div
            className="active-child"
            id={active === 3 ? "product-active" : ""}
            onClick={() => {
              setActive(3);
            }}
          >
            Purchase Orders
          </div>
        </div>
      </div>
      {active === 0 ? (
        <Box sx={{ width: "100%" }}>
          <Paper sx={{ width: "100%", mb: 2 }}>
            <EnhancedTableToolbar numSelected={selected.length} />
            <TableContainer>
              <Table
                sx={{ minWidth: 750 }}
                aria-labelledby="tableTitle"
                size={dense ? "small" : "medium"}
              >
                <EnhancedTableHead
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={handleSelectAllClick}
                  onRequestSort={handleRequestSort}
                  rowCount={rows.length}
                />
                {/* <TableBody>
                                {visibleRows.map((row, index) => {
                                    const isItemSelected = isSelected(row.id);
                                    const labelId = enhanced-table-checkbox-${index};

                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) => handleClick(event, row.id)}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.id}
                                            selected={isItemSelected}
                                            sx={{ cursor: 'pointer' }}
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    color="primary"
                                                    checked={isItemSelected}
                                                    inputProps={{
                                                        'aria-labelledby': labelId,
                                                    }}
                                                />
                                            </TableCell>
                                            <TableCell
                                                component="th"
                                                id={labelId}
                                                scope="row"
                                                padding="none"
                                            >
                                                {row.img}
                                            </TableCell>
                                            <TableCell align="right">{row.sku}</TableCell>
                                            <TableCell align="right">{row.name}</TableCell>
                                            <TableCell align="right">{row.quantity}</TableCell>
                                            <TableCell align="right">{row.type}</TableCell>
                                            <TableCell align="right"><FormControlLabel
                                                control={<Switch checked={row.syncing} />}
                                                label=""
                                            /></TableCell>
                                            <TableCell align="right">{row.listing}</TableCell>
                                            <TableCell align="right">{row.action}</TableCell>
                                        </TableRow>
                                    );
                                })}
                                {emptyRows > 0 && (
                                    <TableRow
                                        style={{
                                            height: (dense ? 33 : 53) * emptyRows,
                                        }}
                                    >
                                        <TableCell colSpan={6} />
                                    </TableRow>
                                )}
                            </TableBody> */}
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
          <FormControlLabel
            control={<Switch checked={dense} onChange={handleChangeDense} />}
            label="Dense padding"
          />
        </Box>
      ) : active === 1 ? (
        <Box sx={{ width: "100%" }}>
          <Paper sx={{ width: "100%", mb: 2 }}>
            <EnhancedTableToolbar numSelected={selected.length} />
            <TableContainer>
              <Table
                sx={{ minWidth: 750 }}
                aria-labelledby="tableTitle"
                size={dense ? "small" : "medium"}
              >
                <EnhancedTableHead
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={handleSelectAllClick}
                  onRequestSort={handleRequestSort}
                  rowCount={rows.length}
                />
                {productData && (
                  <TableBody>
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, productData.asin)}
                      role="checkbox"
                      // aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={productData.asin}
                      // selected={isItemSelected}
                      sx={{ cursor: "pointer" }}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          // checked={isItemSelected}
                          inputProps={
                            {
                              // 'aria-labelledby': labelId,
                            }
                          }
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        // id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {/* {productData.product_details.Brand} */}
                      </TableCell>
                      <TableCell align="right">
                        {/* {productData.category_path[0]?.name} */}
                      </TableCell>
                      <TableCell align="right">
                        {productData.product_title}
                      </TableCell>
                      <TableCell align="right">
                        {productData.product_availability}
                      </TableCell>
                      <TableCell align="right">
                        {productData.product_star_rating}
                      </TableCell>
                      <TableCell align="right">
                        {productData.product_photo}
                      </TableCell>
                      <TableCell align="right">
                        {productData.product_price}
                      </TableCell>
                      <TableCell align="right">
                        {productData.sales_volume}
                      </TableCell>
                      <TableCell align="right">
                        {productData.product_num_ratings}
                      </TableCell>
                      <TableCell align="right">
                        {productData.customers_say}
                      </TableCell>
                    </TableRow>
                    {emptyRows > 0 && (
                      <TableRow
                        style={{
                          height: (dense ? 33 : 53) * emptyRows,
                        }}
                      >
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>
                )}
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
          <FormControlLabel
            control={<Switch checked={dense} onChange={handleChangeDense} />}
            label="Dense padding"
          />
        </Box>
      ) : active === 2 ? (
        <div>
          <div className="listing">
            <img src={multi} />
            <h3>No listings? No problem. Add a Sales Channel now!</h3>
            <p>
              Before you can import products you have to connect your sales
              channel. Try it now!
            </p>
            <button id="connect-btn">Connect sales channel</button>
          </div>
        </div>
      ) : active === 3 ? (
        <div></div>
      ) : (
        ""
      )}
    </div>
  );
}
