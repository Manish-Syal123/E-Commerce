import React from 'react'
import styled from 'styled-components'

const Home = () => {
  return (
    <Wrapper className='test'>Home Page</Wrapper>
  )
};

// div is converted/stored to a variable called wrapper & where wraper has its own styles property
const Wrapper = styled.section` 
 background-color: ${({ theme }) => theme.colors.bg};
 width: 20rem;
 height: 20rem;
`; 

export default Home;
