import { IconButton, ListItem, ListItemText, ListItemSecondaryAction } from '@mui/material';
import { Delete } from '@mui/icons-material';

function ExpenseItem({ expense }) {
  const handleDelete = () => {
    // TODO: implement delete functionality
  };

  return (
    <ListItem>
      <ListItemText
        primary={expense.name}
        secondary={`$\${expense.amount} on \${expense.date}`}
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default ExpenseItem;