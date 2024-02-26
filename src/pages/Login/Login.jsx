import { Container, Box, Typography, TextField, Stack, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const schema = Yup.object({
    email: Yup.string().required("Required !").email(),
    password: Yup.string().required("Required !").min(3, "Minimum 3 chars required").max(12, "Maximum 12 chars required"),
  });

  if (localStorage.getItem("token")) {
    navigate("/");
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const onSubmit = (data) => {
    axios
      .post("http://localhost:3000/login", data)
      .then((response) => {
        localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem("me", JSON.stringify(response.data.user));
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Container>
      <Box mt={10}>
        <Typography as="h1" variant="h3" letterSpacing={5} fontWeight={700} gutterBottom textAlign="center">
          Login
        </Typography>

        <Stack
          spacing={2}
          width={"70%"}
          mx={"auto"}
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          flexDirection={"row"}
          flexWrap={"wrap"}
          justifyContent={"flex-end"}
          sx={{ border: 2, borderRadius: "12px", borderColor: "primary.main" }}
          padding={4}
        >
          <TextField
            sx={{ width: "100%" }}
            placeholder="Enter your email name"
            type="email"
            label="Email"
            required
            name="email"
            {...register("email")}
            helperText={errors?.email ? errors?.email?.message : ""}
            error={errors.email && true}
          />
          <TextField
            sx={{ width: "100%" }}
            placeholder="Enter your password name"
            type="password"
            label="Password"
            required
            name="password"
            {...register("password")}
            helperText={errors?.password ? errors?.password?.message : ""}
            error={errors.password && true}
          />

          <Button variant="contained" type="submit" sx={{ width: "25%", padding: 1, ml: "auto" }}>
            Outlined
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};
