import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Container, Tabs, Tab, Box } from '@mui/material';
import UploadAssignment from '../Assignments/UploadAssignment';
import ProvideFeedback from '../Grades/ProvideFeedback';
import AssignmentList from '../Assignments/AssignmentList';

const AdminDashboard = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="admin dashboard tabs">
          <Tab label="Upload Assignments" component={Link} to="upload" />
          <Tab label="Manage Submissions" component={Link} to="submissions" />
          <Tab label="Provide Feedback" component={Link} to="feedback" />
        </Tabs>
      </Box>
      <Routes>
        <Route path="upload" element={<UploadAssignment />} />
        <Route path="submissions" element={<AssignmentList isAdmin={true} />} />
        <Route path="feedback" element={<ProvideFeedback />} />
      </Routes>
    </Container>
  );
};

export default AdminDashboard;
