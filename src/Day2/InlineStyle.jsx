import React from 'react'

function InlineStyle() {
  return (
    <div style={{backgroundColor:'lightblue',color:'darkblue',padding:'10px',border:'1px solid blue',borderRadius:'5px'}}>
        <h1 style={{textAlign:'center',color:'green'}}>Inline Style in JSX Example</h1>
        <p style={{fontSize:'16px',color:'darkblue'}}>This is a paragraph with inline styles applied.</p>
        
    </div>
  )
}

export default InlineStyle;