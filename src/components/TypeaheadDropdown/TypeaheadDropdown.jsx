import React, { useState, useEffect } from "react";

import css from "./TypeaheadDropdown.module.scss";

import { InputBase, Box, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";

// Additional material ui styling
const styles = {
  root: {
    backgroundColor: "#f1f1f1",
    border: "gray",
    borderRadius: "10px",
    position: "relative",
    padding: "0 10px"
  },
  smallDiv: {
    margin: "10px",
    border: "1px solid green",
    borderRadius: "5px",
    backgroundColor: "#88e85d",
    padding: "3px"
  },
  suggestions: {
    position: "absolute",
    overflow: "auto",
    width: "100%",
    top: "10px",
    left: "0px",
    transform: "translate3d(0px, 38px, 0px)"
  },
  suggestionItem: {
    fontSize: "16px",
    display: "block",
    width: "100%",
    clear: "both",
    fontWeight: "400",
    color: "$color-black",
    textAlign: "inherit",
    whiteSpace: "nowrap",

    borderBottom: "1px solid #ff5741",
    padding: "10px"
  }
};

const ingredients = [];

const TypeaheadComponent = ({ fruits, classes, passCupIngredients }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    functionHandler(ingredients);
  });

  const functionHandler = (data) => {
    passCupIngredients(data);
  };

  const onTextChange = (e) => {
    const value = e.target.value;
    let filteredSuggestions = [];

    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, `i`);
      filteredSuggestions = fruits.sort().filter((v) => regex.test(v));
    }

    setSuggestions(filteredSuggestions);
    setText(value);
  };

  const onSuggestionSelected = (value) => {
    setText(value);
    setSuggestions([]);
    ingredients.push(value);
    setText("");
  };

  const showSuggestions = () => {
    const suggestionsList = suggestions;
    if (suggestionsList.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestionsList.map((suggestion, index) => (
          <li
            className={classes.suggestionItem}
            onClick={(e) => onSuggestionSelected(suggestion)}
            key={index}
          >
            {suggestion}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <Box className={`${classes.root} ${css.container}`} display="flex">
      <Box display="flex">
        {ingredients.map((ingredient, index) => {
          return (
            <Box key={index} display="flex" className={classes.smallDiv}>
              <Typography variant="body1" color="inherit" className={css.title}>
                {ingredient}
              </Typography>
            </Box>
          );
        })}
      </Box>

      <Box className={css.container}>
        <InputBase
          onChange={onTextChange}
          className={classes.margin}
          inputProps={{ "aria-label": "naked" }}
          value={text}
        />

        <Box className={classes.suggestions}>{showSuggestions()}</Box>
      </Box>
    </Box>
  );
};
export default withStyles(styles)(TypeaheadComponent);
