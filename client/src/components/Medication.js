import React from "react";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  card: {
    maxWidth: 500,
    height: 250
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 6
  },
  cardSpacer: {
    marginBottom: 3
  }
});

const Medication = props => {
  const { classes, name, med, handleClick, removeUserMedication } = props;
  return (
    <div className={classes.cardSpacer}>
      <Card className={classes.card} square={true} align="center">
        <CardContent>
          <Typography variant="h5">{med.name_alt}</Typography>
          <Typography
            // className={classes.title}
            variant="title"
            color="textSecondary"
            gutterBottom
          >
            {med.rxcui}
          </Typography>
          <Typography variant="body1" className={classes.pos} color="textSecondary">
            {med.name}
          </Typography>
        </CardContent>

        <CardActions>
          <Button
            size="medium"
            onClick={e => {
              name === "user-med-list" ? removeUserMedication(e,med) : handleClick(e,med)
            }}
          fullWidth>
            {name === "user-med-list"
              ? "Remove current meds"
              : "Add to current med"}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default withStyles(styles)(Medication);
