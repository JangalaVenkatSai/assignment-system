import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Typography, Box } from '@mui/material';

const UploadAssignment = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Placeholder for upload logic
    console.log('Uploading Assignment:', data);
    // Reset form after submission
    reset();
    // Show success message or notification
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Upload New Assignment
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField 
          label="Assignment Title" 
          variant="outlined" 
          fullWidth 
          margin="normal"
          {...register('title', { required: 'Title is required' })}
          error={!!errors.title}
          helperText={errors.title?.message}
        />
        <TextField 
          label="Description" 
          variant="outlined" 
          fullWidth 
          margin="normal"
          multiline
          rows={4}
          {...register('description', { required: 'Description is required' })}
          error={!!errors.description}
          helperText={errors.description?.message}
        />
        <TextField 
          label="Deadline" 
          type="datetime-local" 
          variant="outlined" 
          fullWidth 
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          {...register('deadline', { required: 'Deadline is required' })}
          error={!!errors.deadline}
          helperText={errors.deadline?.message}
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Upload Assignment
        </Button>
      </form>
    </Box>
  );
};

export default UploadAssignment;
