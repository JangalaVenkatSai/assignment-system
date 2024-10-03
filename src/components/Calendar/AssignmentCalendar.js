import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const AssignmentCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    // Placeholder for fetching assignments from API
    const dummyAssignments = [
      { id: 1, title: 'Math Assignment', deadline: new Date('2024-11-01') },
      { id: 2, title: 'Science Project', deadline: new Date('2024-11-15') },
    ];
    setAssignments(dummyAssignments);
  }, []);

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const dayAssignments = assignments.filter(a => 
        a.deadline.toDateString() === date.toDateString()
      );
      return dayAssignments.length > 0 ? <div>📌</div> : null;
    }
  };

  const selectedDateAssignments = assignments.filter(a => 
    a.deadline.toDateString() === date.toDateString()
  );

  return (
    <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h5" gutterBottom>
        Assignments Calendar
      </Typography>
      <Calendar
        onChange={setDate}
        value={date}
        tileContent={tileContent}
      />
      <Box sx={{ mt: 4, width: '100%', maxWidth: 600 }}>
        <Typography variant="h6">Assignments on {date.toDateString()}</Typography>
        <List>
          {selectedDateAssignments.length > 0 ? (
            selectedDateAssignments.map(a => (
              <ListItem key={a.id}>
                <ListItemText primary={a.title} secondary={`Deadline: ${a.deadline.toLocaleTimeString()}`} />
              </ListItem>
            ))
          ) : (
            <Typography>No assignments on this day.</Typography>
          )}
        </List>
      </Box>
    </Box>
  );
};

export default AssignmentCalendar;
