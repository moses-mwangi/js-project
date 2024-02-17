import { useState } from "react";

function App() {
  return (
    <div className="App">
      <TextExpander>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
        sint debitis autem quasi eum optio nisi ipsam eiusnulla? Minima
        repudiandae atque enim ea quas error, tenetur nullaarchitecto sun If you
        open it directly in the browser
      </TextExpander>
      <TextExpander
        collapseNumWords={20}
        expandButtonText="show text"
        collapseButtonText="colapse text"
        buttonColor="#ff6622"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
        sint debitis autem quasi eum optio nisi ipsam eius nulla? Minima
        repudiandae atque enim ea quas error, tenetur nulla architecto sun If
        you open it directly in the browser, you will see an empty page. You can
        add webfonts, meta tags, or analytics to this file. The build step will
        place the bundled scripts into the
      </TextExpander>
      <TextExpander className="box" expandend={true}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
        sint debitis autem quasi eum optio nisi ipsam eius nulla? Minima
        repudiandae atque enim ea quas error, tenetur nulla architecto sun If
        you open it directly in the browser
      </TextExpander>
    </div>
  );
}
export default App;

function TextExpander({
  children,
  className,
  expandend = false,
  collapseNumWords = 10,
  collapseButtonText = "show less",
  buttonColor = "blue",
  expandButtonText = "show more",
}) {
  const [isExpanded, setIsExpandend] = useState(expandend);
  const display = isExpanded
    ? children
    : children.split(" ").slice(0, collapseNumWords).join("") + "....";

  const buttonStyle = {
    backgroundColor: "none",
    border: "none",
    marginLeft: "7px",
    cursor: "pointer",
    font: "inherit",
    color: buttonColor,
  };
  return (
    <div className={className}>
      <p>
        <span>{display}</span>
        <button onClick={() => setIsExpandend(!isExpanded)} style={buttonStyle}>
          {isExpanded ? collapseButtonText : expandButtonText}
        </button>
      </p>
    </div>
  );
}
