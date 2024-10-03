import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const ViewGrades = () => {
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    // Placeholder for fetching grades from API
    const dummyGrades = [
      { id: 1, title: 'Math Assignment', grade: 'A', feedback: 'Excellent work!' },
      { id: 2, title: 'Science Project', grade: 'B+', feedback: 'Good effort, but needs improvement in...' },
    ];
    setGrades(dummyGrades);
  }, []);

  return (
    <TableContainer component={Paper} sx={{ mt: 4 }}>
      <Typography variant="h6" sx={{ p: 2 }}>
        Your Grades and Feedback
      </Typography>
      <Table aria-label="grades table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Assignment</TableCell>
            <TableCell>Grade</TableCell>
            <TableCell>Feedback</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {grades.map((grade) => (
            <TableRow key={grade.id}>
              <TableCell>{grade.id}</TableCell>
              <TableCell>{grade.title}</TableCell>
              <TableCell>{grade.grade}</TableCell>
              <TableCell>{grade.feedback}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ViewGrades;
