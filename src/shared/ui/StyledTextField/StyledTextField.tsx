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
    },
    "& label.Mui-focused": {
      fontSize: "18px",
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#F04F30",
      color: "white",
    },
  },
})(TextField)
