const parent = React.createElement("div", {id: "parent"},

[React.createElement("div",{id: "child"},[React.createElement("h1",{},"I' am an h1 tag"),React.createElement("h2",{},"laalalalala")]),React.createElement("div",{id: "child"},[React.createElement("h1",{},"I' am an h1 tag"),React.createElement("h2",{},"laalalalala")])])


const heading = React.createElement("h1",{id: "heading"},"hloo  world")
const root = ReactDOM.createRoot(document.getElementById("root"))

console.log('parent',parent);
root.render(parent)




/* 
{}  - object where we can place attributes such as id , class 

*/