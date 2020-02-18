import React from "react";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignInUser({
  email,
  password,
  isSubmitting,
  handleOnChange,
  handleOnSubmit
}) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOpenIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          ログイン
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleOnSubmit}>
          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            required={true}
            id="email"
            label="メールアドレス"
            name="email"
            autoComplete="email"
            value={email}
            onChange={event => handleOnChange(event, "email")}
          />
          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            required={true}
            name="password"
            label="パスワード"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={event => handleOnChange(event, "password")}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            value={isSubmitting ? "通信中..." : "ログイン"}
            disabled={isSubmitting}
          >
            ログイン
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                パスワードを忘れましたか？
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signUp" variant="body2">
                {"アカウント登録へ"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
