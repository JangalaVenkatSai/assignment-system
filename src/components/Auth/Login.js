import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // Placeholder for authentication logic
    // Assume successful login and assign role based on selection
    const userData = {
      username: data.username,
      role: data.role,
      token: 'dummy-jwt-token', // Placeholder token
    };
    login(userData);
    if (data.role === 'admin') {
      navigate('/admin');
    } else {
      navigate('/user');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, p: 4, boxShadow: 3, borderRadius: 2 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Assignment System Login
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField 
            label="Username" 
            variant="outlined" 
            fullWidth 
            margin="normal"
            {...register('username', { required: 'Username is required' })}
            error={!!errors.username}
            helperText={errors.username?.message}
          />
          <TextField 
            label="Password" 
            type="password" 
            variant="outlined" 
            fullWidth 
            margin="normal"
            {...register('password', { required: 'Password is required' })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel id="role-label">Login As</InputLabel>
            <Select
              labelId="role-label"
              label="Login As"
              defaultValue=""
              {...register('role', { required: 'Role is required' })}
              error={!!errors.role}
            >
              <MenuItem value="admin">Admin (Teacher)</MenuItem>
              <MenuItem value="user">User (Student)</MenuItem>
            </Select>
            {errors.role && <Typography color="error" variant="caption">{errors.role.message}</Typography>}
          </FormControl>
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
