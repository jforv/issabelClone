// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Utils from "../utils/utils";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// Custom Actions


// START IMPORT ACTIONS
import BudgetActions from "../redux/actions/BudgetActions";

// END IMPORT ACTIONS

/** APIs

* actionsBudget.create
*	@description CRUD ACTION create
*
* actionsBudget.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsBudget.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*

**/

class BudgetEdit extends Component {
  // Init budget
  constructor(props) {
    super(props);
    this.state = {
      budget: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsBudget.loadBudget(this.props.match.params.id);
    }
    
  }

  // Insert props budget in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      budget: props.budget
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.budget._id) {
      this.props.actionsBudget.saveBudget(this.state.budget).then(data => {
        this.props.history.push("/budgets/");
      });
    } else {
      this.props.actionsBudget.createBudget(this.state.budget).then(data => {
        this.props.history.push("/budgets/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Budget Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="amount"
            label="Amount"
            value={this.state.budget.amount || ""}
            onChange={Utils.handleChange.bind(this, "budget")}
            type="number"
            margin="normal"
            fullWidth
          />
          

          {/* Footer */}
          <div className="footer-card">
            <Link to="/budgets/">Back to list</Link>

            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsBudget: bindActionCreators(BudgetActions, dispatch),
  };
};

// Validate types
BudgetEdit.propTypes = { 
  actionsBudget: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    budget: state.BudgetEditReducer.budget
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BudgetEdit);
