//creating nested elements

const parent = React.createElement(
  'div',
  { id: "parent" },
  React.createElement('div', { id: 'child' },
    [React.createElement('h1', {}, 'I am h1'), React.createElement('h2', {}, 'Iam h2')]
  ));

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)
