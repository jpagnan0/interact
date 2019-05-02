import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  card: {
    maxWidth: 500,
    height: 250
  },
  title: {
    fontSize: 20
  },
  pos: {
    marginBottom: 6
  },
  cardSpacer: {
    marginBottom: 3,
    marginRight: 3
  }
});

const Interaction = props => {
  const { classes, interaction} = props;
  const {name_one, name_two, description} = interaction;


  return (
  <div className={classes.cardSpacer}>
    <Card className={classes.card} square={true} align="center">
      <CardContent>
        <Typography
          // className={classes.title}
          variant="h5"
          color="error"
          gutterBottom
        >
          {`${name_one} & ${name_two}`}
        </Typography>
        <Typography variant="h6">{description}</Typography>
        <Typography className={classes.pos} color="textSecondary">

        </Typography>
      </CardContent>


    </Card>
  </div>
  );
};

export default withStyles(styles)(Interaction);
