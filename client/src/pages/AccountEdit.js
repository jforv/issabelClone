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
import AccountActions from "../redux/actions/AccountActions";

// END IMPORT ACTIONS

/** APIs

* actionsAccount.create
*	@description CRUD ACTION create
*
* actionsAccount.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsAccount.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*

**/

class AccountEdit extends Component {
  // Init account
  constructor(props) {
    super(props);
    this.state = {
      account: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsAccount.loadAccount(this.props.match.params.id);
    }
    
  }

  // Insert props account in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      account: props.account
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.account._id) {
      this.props.actionsAccount.saveAccount(this.state.account).then(data => {
        this.props.history.push("/accounts/");
      });
    } else {
      this.props.actionsAccount.createAccount(this.state.account).then(data => {
        this.props.history.push("/accounts/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Account Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="amount"
            label="Amount"
            value={this.state.account.amount || ""}
            onChange={Utils.handleChange.bind(this, "account")}
            type="number"
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="name"
            label="Name"
            value={this.state.account.name || ""}
            onChange={Utils.handleChange.bind(this, "account")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="type"
            label="Type"
            value={this.state.account.type || ""}
            onChange={Utils.handleChange.bind(this, "account")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.account.type && this.state.account.type === ""
              ? { error: true }
              : {})}
          />
          

          {/* Footer */}
          <div className="footer-card">
            <Link to="/accounts/">Back to list</Link>

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
    actionsAccount: bindActionCreators(AccountActions, dispatch),
  };
};

// Validate types
AccountEdit.propTypes = { 
  actionsAccount: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    account: state.AccountEditReducer.account
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountEdit);
