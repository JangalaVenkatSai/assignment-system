import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Typography, Box } from '@mui/material';

const ProvideFeedback = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Placeholder for feedback logic
    console.log('Providing Feedback:', data);
    reset();
    // Show success message or notification
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Provide Feedback
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField 
          label="Assignment ID" 
          variant="outlined" 
          fullWidth 
          margin="normal"
          {...register('assignmentId', { required: 'Assignment ID is required' })}
          error={!!errors.assignmentId}
          helperText={errors.assignmentId?.message}
        />
        <TextField 
          label="Feedback" 
          variant="outlined" 
          fullWidth 
          margin="normal"
          multiline
          rows={4}
          {...register('feedback', { required: 'Feedback is required' })}
          error={!!errors.feedback}
          helperText={errors.feedback?.message}
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Submit Feedback
        </Button>
      </form>
    </Box>
  );
};

export default ProvideFeedback;
