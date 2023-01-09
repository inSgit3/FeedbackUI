import React from 'react';
import PropTypes from 'prop-types'


function Header ({tekst, bgColor, clr}) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: clr
  }
  return (
    <header style={headerStyles}> 
      <div className="contanier">
<h2> {tekst} </h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
  tekst: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.4)',
  clr: '#ff6a95'
}

Header.propTypes = {
   tekst: PropTypes.string,
   bgColor: PropTypes.string,
   clr: PropTypes.string
}
export default Header 