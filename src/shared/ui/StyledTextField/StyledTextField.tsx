import { TextField } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"

export const StyledTextField = withStyles({
  input: {
    color: "white",
  },
  root: {
    borderBottom: "0.1px solid white",
    width: "100%",
    color: "white",
    caretColor: "white",
    "& .MuiFormLabel-root": {
      color: "white",
      fontFamily: "Rajdhani",
      fontSize: "25px",
    },
    "& label.Mui-focused": {
      fontSize: "25px",
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#F04F30",
      color: "white",
    },
    "& .MuiInputBase-input": {
      color: "white",
      fontFamily: "Rajdhani",
      fontSize: "23px",
    },
  },
})(TextField)
