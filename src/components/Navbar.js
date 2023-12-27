import React from 'react'
import { Nav, NavItem} from 'reactstrap';

function Navbar() {
  return (
<Nav className=' bg-dark d-flex  justify-content-center py-3'>
  <NavItem className='text-light display-6 '>
      Multi-Todo App
  </NavItem>
</Nav>
  )
}

export default Navbar