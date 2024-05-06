import Box from '@mui/material/Box';
import TreeItem from '@mui/lab/TreeItem';
import { withStyles } from '@material-ui/core/styles';

export const CarRentalTreeViewBox = withStyles({
  style: {
    maxHeight: '400px',
  },
})(Box);

export const CarRentalTreeItem = withStyles({
  label: {
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
})(TreeItem);

export const AddressTreeItem = withStyles({
  label: {
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
})(TreeItem);

export const CarTreeItem = withStyles({
  label: {
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
})(TreeItem);

export const CarsTreeItem = withStyles({
  label: {
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
})(TreeItem);

export const SingleTreeItem = withStyles({
})(TreeItem);
