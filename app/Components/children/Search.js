var React = require("react");

// search history

var History = React.createClass({

  // Here we render the function
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Search History</h3>
        </div>
        <div className="panel-body text-center">
          <p>{this.props.address}</p>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = History;