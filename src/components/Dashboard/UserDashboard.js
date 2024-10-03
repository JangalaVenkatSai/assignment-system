import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Container, Tabs, Tab, Box } from '@mui/material';
import SubmitAssignment from '../Assignments/SubmitAssignment';
import ViewGrades from '../Grades/ViewGrades';
import AssignmentList from '../Assignments/AssignmentList';
import AssignmentCalendar from '../Calendar/AssignmentCalendar';

const UserDashboard = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="user dashboard tabs">
          <Tab label="Submit Assignments" component={Link} to="submit" />
          <Tab label="View Grades" component={Link} to="grades" />
          <Tab label="Assignments Calendar" component={Link} to="calendar" />
        </Tabs>
      </Box>
      <Routes>
        <Route path="submit" element={<SubmitAssignment />} />
        <Route path="grades" element={<ViewGrades />} />
        <Route path="calendar" element={<AssignmentCalendar />} />
      </Routes>
    </Container>
  );
};

export default UserDashboard;
