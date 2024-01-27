let reuben = 'Reuben';
let sally = 'Sally';
let holly = 'Holly';
let amol = 'Amol';
let robin = 'Robin';
let aaron = 'Aaron';
const element = /*#__PURE__*/React.createElement("ul", {
  style: {
    'color': 'blue',
    'fontSize': '24px'
  }
}, /*#__PURE__*/React.createElement("li", null, reuben), /*#__PURE__*/React.createElement("li", null, sally), /*#__PURE__*/React.createElement("li", null, holly), /*#__PURE__*/React.createElement("li", null, amol), /*#__PURE__*/React.createElement("li", null, robin), /*#__PURE__*/React.createElement("li", null, aaron));
ReactDOM.render(element, document.getElementById('content'));