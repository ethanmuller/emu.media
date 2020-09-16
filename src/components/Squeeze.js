import React from "react"

const Squeeze = (props) => (
    <div style={{
      width: '80%',
      maxWidth: '20em',
      margin: '3rem auto',
    }}>{props.children}</div>
)

export default Squeeze;
