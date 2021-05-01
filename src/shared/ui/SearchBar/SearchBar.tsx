import { TextField } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"

export const StyledTextField = withStyles({
  root: {
    borderBottom: "0.1px solid white",
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 0,
    marginTop: 0,
    caretColor: "white",
    "& .MuiFormLabel-root": {
      color: "white",
    },
    "& label.Mui-focused": {
      fontSize: "16px",
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#F04F30",
    },
  },
})(TextField)
