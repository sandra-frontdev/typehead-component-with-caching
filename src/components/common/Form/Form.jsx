import React, { useState } from "react";

// Components imports
import TypeaheadDropdown from "../../TypeaheadDropdown/TypeaheadDropdown";

// Material ui components imports
import { FormControl, FormLabel, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles((theme) => ({
  margin: {
    marginTop: theme.spacing(5)
  },
  label: {
    marginBottom: "20px"
  },
  button: {
    display: "flex",
    alignItems: "start"
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const Form = ({ fruits }) => {
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [cupIngredients, setCupIngredients] = useState([]);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h6 id="simple-modal-title">You have ordered cup with</h6>
      <p id="simple-modal-description">
        {cupIngredients.map((item) => {
          return <p>{item}</p>;
        })}
      </p>
    </div>
  );

  return (
    <FormControl className={classes.margin}>
      <FormLabel className={classes.label}>
        Pick up fruits for your sweet cup and enjoy in sweetenes
      </FormLabel>

      <Grid container spacing={1} alignItems="center">
        <Grid item>
          <FreeBreakfastIcon color="primary" />
        </Grid>
        <TypeaheadDropdown
          fruits={fruits}
          passCupIngredients={setCupIngredients}
        />
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleOpen}
          >
            Order
          </Button>
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </FormControl>
  );
};

export default Form;
