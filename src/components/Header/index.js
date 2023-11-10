import React from 'react'
import logo from "../../assets/logo/long-logo.png"
import "./styles.css"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import BasicMenu from './ProfileMenu';
import SimpleBottomNavigation from './BottomNav';
import MobileSearchBar from './MobileSearchBar';
function Header() {
  return <div className='navbar'>
    <img src={logo} alt="logo" className='navbar-logo' />
   <div className='search-bar'>
    <div className='searchbar-text'>Any Where</div>
    <div className='searchbar-text' >Any week</div>
    <div className='searchbar-text2'>Add Guest</div>
    <div className='search-icon-div'>
    <SearchRoundedIcon className='search-icon'/>
    </div>
    
   </div>
   <div className='profile-container'>
    <div className='airbnb-yourhome'>Airbnb your home</div>
    <div className='airbnb-yourhome'>
    <LanguageRoundedIcon sx={{fontSize:"1.2rem"}} />
    </div>
    <div className='profile-div'>
    <BasicMenu />
    </div>
</div>
<MobileSearchBar />
   <SimpleBottomNavigation />
  </div>
  
}

export default Header 