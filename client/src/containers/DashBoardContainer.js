import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import { medicationTerm, doFetchMedications } from "../actions/medication";
import { postUserMedication, updateUserMedications } from "../actions/userMedications";
import { userInteractions } from '../actions/userInteractions';
import MedicationSearch from "../components/MedicationSearch";
import MedicationList from "./MedicationList";
import UserMedicationList from "./UserMedicationList";
import InteractionList from './InteractionList';

class DashBoardContainer extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const {
      loggedInUser,
      updateUserMedications,
      userInteractions
    } = this.props;

    updateUserMedications(loggedInUser.id)
    userInteractions(loggedInUser.id)
  }

  componentDidUpdate(prevProps) {
    if (this.props.medicationTerm.search !== prevProps.medicationTerm.search) {
      let { dispatch, medicationTerm } = this.props;
      dispatch(medicationTerm(medicationTerm));
      dispatch(doFetchMedications(medicationTerm));
    }
  }

  handleChange(nextMedication) {
    this.props.medicationTerm(nextMedication);
    this.props.doFetchMedications(nextMedication);
  }

  handleClick(e, med) {
    const {id} = this.props.loggedInUser;
    this.props.postUserMedication(med, id)
    .then(() => {
      this.props.userInteractions()
      this.props.updateUserMedications()
    })
  }

  render() {
    const { medications, loggedInUser, currentMedications, currentInteractions} = this.props;

    return (
      <div>
        <CssBaseline>
          <MedicationSearch
            medicationTerm={this.medicationTerm}
            onChange={this.handleChange}
          />
        </CssBaseline>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="stretch"
          spacing={0}
          align="center"
        >
          <Grid item lg={4} md={4} sm={4} xs={12}>
            <Typography variant="h4" color="secondary" align="center">
              Search Results
            </Typography>
            <Grid item align="center">
              <MedicationList
                handleClick={this.handleClick}
                medications={medications}
              />
            </Grid>
          </Grid>

          <Grid item lg={4} md={4} sm={4} xs={12}>
            <Typography variant="h4" color="secondary" align="center">
              Interactions
            </Typography>
            <InteractionList loggedInUser={loggedInUser} interactions={currentInteractions}/>
          </Grid>

          <Grid item lg={4} md={4} sm={4} xs={12}>
            <Typography variant="h4" color="secondary" align="center">
              Current Medications
            </Typography>
            <UserMedicationList
              currentMedications={currentMedications}
            />

          </Grid>

        </Grid>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    loggedInUser: state.loggedInUser,
    currentMedications: state.currentUserMedications.medications,
    currentInteractions: state.currentUserInteractions.interactions,
    medicationTerm: state.medicationTerm,
    medications: [...state.medicationsReducer.medications]
  };
}
export default connect(
  mapStateToProps,
  {
    doFetchMedications: doFetchMedications,
    medicationTerm: medicationTerm,
    postUserMedication: postUserMedication,
    updateUserMedications: updateUserMedications,
    userInteractions: userInteractions
  }
)(DashBoardContainer); // export default withRouter(DashBoardContainer);
