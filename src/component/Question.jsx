import { React, useState } from "react";
import Progress from "./Progress";
import questions from "../questions";
import {
  makeStyles,
  Button,
  createMuiTheme,
  ThemeProvider,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField
} from "@material-ui/core";
import { orange } from "@material-ui/core/colors";
import Arrow from "../images/arrow.svg";
import powerdby from "../images/powerdBy.svg";
import { AnimateOnChange } from "react-animation";

import { Dropdown } from "react-bootstrap";

//UI
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(3)
    }
  },
  button: {
    display: "block",
    marginTop: theme.spacing(2)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[500]
    }
  }
});

let html1;

function Question(props) {
  const classes = useStyles();
  const [age, setAge] = useState("");
  const [price, setPrice] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handlePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  if (props.cQ < 3) {
    html1 = (
      <div className="options">
        <div className="firstop">
          <Button
            className="button"
            variant="outlined"
            color="primary"
            name={props.cQ}
            id={questions.options[props.cQ][0]["title"]}
            onClick={props.click}
          >
            {questions.options[props.cQ][0].title}
          </Button>
        </div>

        <div className="secondop">
          <Button
            className="button"
            variant="outlined"
            color="primary"
            name={props.cQ}
            id={questions.options[props.cQ][1]["title"]}
            onClick={props.click}
          >
            {questions.options[props.cQ][1].title}
          </Button>
        </div>
      </div>
    );
  } else if (props.cQ === 3) {
    html1 = (
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">
            {props.cQ === 3 ? "" : "電気料金"}
          </InputLabel>
          <Dropdown>
            <Dropdown.Toggle value="">電気会社は？</Dropdown.Toggle>
            <Dropdown.Menu>
              {questions.options[props.cQ].map((question, index) => (
                <Dropdown.Item
                  onClick={props.click}
                  id={props.cQ}
                  value={"30"}
                  key={index}
                >
                  {question["title"]}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </FormControl>
      </div>
    );
  } else {
    html1 = (
      <div>
        <TextField
          id="standard-number"
          label="料金"
          type="number"
          onChange={handlePrice}
          InputLabelProps={{
            shrink: true
          }}
        />
        <br className="textField" />
        <div className="margin"></div>
        <Button
          className="button"
          variant="outlined"
          color="primary"
          name={props.cQ}
          id={price}
          onClick={props.click}
        >
          シミュレーション結果へ
        </Button>
      </div>
    );
  }

  return (
    <div>
      <div className="ArrowBarbox" onClick={props.return}>
        <img src={Arrow} className="arrow" alt="Arrow" />
        <Progress cQ={props.cQ} />
      </div>

      <div className="center">
        <div className={classes.root}>
          <div className="question">
            <AnimateOnChange>
              <p>{questions.question[props.cQ]}</p>
            </AnimateOnChange>
          </div>

          <ThemeProvider theme={theme}>{html1}</ThemeProvider>

          <div className="powerdby">
            <img src={powerdby} alt="Optimaロゴ"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;
