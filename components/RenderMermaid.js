import { useEffect, useState } from "react";
import mermaid from "mermaid";

export default (props) => {

  const [diagram, setDiagram] = useState("");

  const style = {
    display: "flex", 
    justifyContent: "center",
    userSelect: "none",
    marginTop: "1.5rem"
  }

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: "default",
      securityLevel: "loose",
      theme: "dark"
    });
    mermaid.render(
      `diagram-${props.id}`, 
      String(props.children.props.children).replace(/\\n/g,'<br/>'), 
      (d) => setDiagram(d));
  }, [])

  return (
    <div id={props.id} className="mermaid" style={style} dangerouslySetInnerHTML={{__html: diagram}}/>
  )
}
