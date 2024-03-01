import { Alert, Box, Button, Snackbar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { api } from "../../API/api";
import { useEffect, useState } from "react";

export const Category = () => {
  const [state, setState] = useState({
    open: false,
    message: "",
    severity: "",
  });
  const [rows, setRows] = useState(null);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setState((prev) => {
      return {
        ...prev,
        open: false,
      };
    });
  };

  const getCategory = async () => {
    const data = await api
      .getCategory()
      .then((res) => {
        if (res.status === 200) {
          setRows(res.data);
        }
      })
      .catch(() => {
        setState(() => {
          return {
            open: true,
            message: "Cannot get categories",
            severity: "error",
          };
        });
      });

    return data;
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const data = {
      category_name: evt.target[0].value.trim(),
    };

    api
      .addCategory(data)
      .then((res) => {
        if (res.status === 201) {
          setState(() => {
            return {
              open: true,
              message: "Category added successfully",
              severity: "success",
            };
          });
          evt.target[0].value = "";
          getCategory();
        }
      })
      .catch(() => {
        setState(() => {
          return {
            open: true,
            message: "Category not added successfully",
            severity: "error",
          };
        });
      });
  };

  const handleEdit = () => {};
  const handleDelete = () => {};

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <>
      <Typography variant="h4" color={"blue"} fontWeight={500} letterSpacing={4} textAlign={"center"} gutterBottom>
        Categories
      </Typography>
      <Box component={"form"} justifyContent={"center"} display={"flex"} gap={2} onSubmit={handleSubmit}>
        <TextField label="Category name" sx={{ width: "45%" }} required />
        <Button startIcon={<AddIcon />} variant="contained" color="success" type="submit">
          Add
        </Button>
      </Box>
      {rows && (
        <TableContainer component={Box} marginTop={4}>
          <Table>
            <TableHead>
              <TableRow hover>
                <TableCell>ID</TableCell>
                <TableCell>CATEGORY NAME</TableCell>
                <TableCell align="justify">ACTIONS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id} hover>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.category_name}</TableCell>
                  <TableCell align="justify">
                    <Button variant="contained" sx={{ marginRight: 2 }} color="warning" handleEdit={handleEdit}>
                      Edit
                    </Button>
                    <Button variant="contained" handleDelete={handleDelete} color="error">
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <Snackbar open={state.open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={state.severity} variant="filled" sx={{ width: "100%" }}>
          {state.message}
        </Alert>
      </Snackbar>
    </>
  );
};
