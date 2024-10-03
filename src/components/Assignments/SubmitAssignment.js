import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Typography, Box, Stack, FormHelperText } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const SubmitAssignment = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [selectedFile, setSelectedFile] = useState(null);

  const onSubmit = (data) => {
    // Placeholder for submission logic
    console.log('Submitting Assignment:', data);
    // Reset form after submission
    reset();
    setSelectedFile(null);
    // Show success message or notification
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <Box sx={{ mt: 4, maxWidth: 600, mx: 'auto' }}>
      <Typography variant="h5" gutterBottom>
        Submit Assignment
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          {/* Assignment ID Field */}
          <TextField 
            label="Assignment ID" 
            variant="outlined" 
            fullWidth 
            {...register('assignmentId', { required: 'Assignment ID is required' })}
            error={!!errors.assignmentId}
            helperText={errors.assignmentId?.message}
          />

          {/* File Upload Section */}
          <Box>
            <Button
              variant="contained"
              component="label"
              startIcon={<CloudUploadIcon />}
              sx={{ mr: 2 }}
            >
              Choose File
              <input
                type="file"
                hidden
                {...register('file', { required: 'File is required' })}
                onChange={handleFileChange}
              />
            </Button>
            {selectedFile && (
              <Typography variant="body2" component="span">
                {selectedFile.name}
              </Typography>
            )}
            {/* Display validation error for file */}
            {errors.file && (
              <FormHelperText error>{errors.file.message}</FormHelperText>
            )}
          </Box>

          {/* Submit Button */}
          <Button type="submit" variant="contained" color="primary">
            Submit Assignment
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default SubmitAssignment;
