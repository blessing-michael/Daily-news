import React from 'react'

function Footer() {
  return (
    <div style={{backgroundColor:"black", height:"250px", marginTop:"50px"}}>
       <div className="footer" style={{ marginTop:"50px",width:"350px", position:"absolute",left:"38%"}} >
      <p style={{color:"white", textAlign:"center",}}> &copy; {new Date().getFullYear()} Blessing Michael. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer