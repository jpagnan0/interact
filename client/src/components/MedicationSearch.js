import React, { Component } from "react";
// import { connect } from "react-redux";
import Input from "@material-ui/core/Input";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from "@material-ui/core/FormControl";
// import Button from "@material-ui/core/Button";
//
import _ from 'lodash';


class MedicationSearch extends Component {

  render() {
    const {medicationTerm, onChange } = this.props
    // console.log('medicationTerm() in MedicationSearch:',medicationTerm)
    // console.log("props in MedicationSearch:", this.props)
    return (
        <FormControl fullWidth>
          <InputLabel>Enter a medication</InputLabel>
          <Input
            onChange={e => {
              const input = e.target.value
              _.throttle(() => onChange(input), 1000)(input)
            }}
            value={medicationTerm} key={medicationTerm}
          />
          {/* <Button value={value} type="submit">Search</Button> */}
        </FormControl>
    );
  }
}
// onChange={e => _.debounce(() => onChange(e.target.value), 500)}
export default MedicationSearch
