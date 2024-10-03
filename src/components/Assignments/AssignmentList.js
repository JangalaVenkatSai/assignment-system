import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button } from '@mui/material';

const AssignmentList = ({ isAdmin }) => {
  const { auth } = useContext(AuthContext);
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    // Placeholder for fetching assignments from API
    // For demo purposes, using dummy data
    const dummyAssignments = [
      { id: 1, title: 'Math Assignment', deadline: '2024-11-01', status: 'Submitted', grade: 'A' },
      { id: 2, title: 'Science Project', deadline: '2024-11-15', status: 'Pending', grade: '-' },
    ];
    setAssignments(dummyAssignments);
  }, []);

  const handleGrade = (id) => {
    // Placeholder for grading logic
    console.log(`Grading assignment ID: ${id}`);
  };

  return (
    <TableContainer component={Paper} sx={{ mt: 4 }}>
      <Typography variant="h6" sx={{ p: 2 }}>
        {isAdmin ? 'Student Submissions' : 'Your Assignments'}
      </Typography>
      <Table aria-label="assignments table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Deadline</TableCell>
            {isAdmin && <TableCell>Status</TableCell>}
            {!isAdmin && <TableCell>Status</TableCell>}
            <TableCell>Grade</TableCell>
            {isAdmin && <TableCell>Actions</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {assignments.map((assignment) => (
            <TableRow key={assignment.id}>
              <TableCell>{assignment.id}</TableCell>
              <TableCell>{assignment.title}</TableCell>
              <TableCell>{assignment.deadline}</TableCell>
              <TableCell>{assignment.status}</TableCell>
              <TableCell>{assignment.grade}</TableCell>
              {isAdmin && (
                <TableCell>
                  <Button variant="contained" color="secondary" onClick={() => handleGrade(assignment.id)}>
                    Grade
                  </Button>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AssignmentList;
