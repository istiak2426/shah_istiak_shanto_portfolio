import React from 'react'
import { BsLinkedin} from 'react-icons/bs'
import { BsGithub} from 'react-icons/bs'
import { BsFacebook} from 'react-icons/bs'



const HeaderSocials = () => {
  return (
	<div className='header__socials'>
		<a href="https://www.linkedin.com/in/istiak2426" target='_blank' rel="noopener noreferrer" ><BsLinkedin/></a>
		<a href="https://github.com/istiak2426" target='_blank'  rel="noopener noreferrer"><BsGithub/></a>
		<a href="https://www.facebook.com/istiak2426" target='_blank' rel="noopener noreferrer"><BsFacebook/></a>
	</div>
  )
}

export default HeaderSocials