import { Container, Box, Typography, TextField, Stack, Button, Autocomplete } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();

  const schema = Yup.object({
    first_name: Yup.string().required("Required !").min(3, "Minimum 3 chars required").max(12, "Maximum 12 chars required"),
    last_name: Yup.string().required("Required !").min(3, "Minimum 3 chars required").max(12, "Maximum 12 chars required"),
    email: Yup.string().required("Required !").email(),
    password: Yup.string().required("Required !").min(3, "Minimum 3 chars required").max(12, "Maximum 12 chars required"),
    gender: Yup.string().required("Required !"),
  });

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
      .post("http://localhost:3000/register", data)
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
          Register
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
            placeholder="Enter your first name"
            label="First name"
            required
            name="first_name"
            {...register("first_name")}
            helperText={errors?.first_name ? errors?.first_name?.message : ""}
            error={errors.first_name && true}
          />
          <TextField
            sx={{ width: "100%" }}
            placeholder="Enter your last name"
            label="Last name"
            required
            name="last_name"
            {...register("last_name")}
            helperText={errors?.last_name ? errors?.last_name?.message : ""}
            error={errors.last_name && true}
          />
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
          <Autocomplete
            sx={{ width: "100%" }}
            id="helloWorld"
            options={[
              {
                label: "Male",
              },
              {
                label: "Female",
              },
            ]}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            renderInput={(params) => (
              <TextField {...params} label="Gender" required name="gender" {...register("gender")} helperText={errors?.gender ? errors?.gender?.message : ""} error={errors.gender && true} />
            )}
          />

          <Button variant="outlined" type="submit" sx={{ width: "25%", padding: 1, ml: "auto" }}>
            Outlined
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};
