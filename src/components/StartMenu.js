import React from 'react';
import '../Windows98.css';

function StartMenu() {
  return(
    <aside className="win98 bottom left">
      <div className="block-centered" >
           <div className="menu">
             <div className="menu-sidebar">
               <div className="headline">
                 <strong>Windows</strong> 98
               </div>
             </div>
             <ul className='menu-content'>
               <li className='item folder'>
                 <img className='icon' src='icons/programs.gif'/>
                 Programs
                 <ul className='menu-content'>
                   <li className="item">
                     <img className='icon' src='icons/exe.gif'/>
                     Internet Explorer
                   </li>
                   <li className="item">
                     <img className='icon' src='icons/exe.gif'/>
                     Microsoft Word
                   </li>
                   <li className="item">
                     <img className='icon' src='icons/exe.gif'/>
                     Microsoft Excel
                   </li>
                   <li className="item">
                     <img className='icon' src='icons/exe.gif'/>
                     Microsoft Powerpoint
                   </li>
                   <li className="item">
                     <img className='icon' src='icons/exe.gif'/>
                     Microsoft Access
                   </li>
                 </ul>
               </li>
               <li className='item folder'>
                 <img className='icon' src='icons/favourites.gif'/>
                 Favorites
                 <ul className='menu-content'>
                   <li className="item">
                     <img className='icon' src='icons/documents.gif'/>projects

                     Channels
                   </li>
                   <li className="item">
                     <img className='icon' src='icons/documents.gif'/>
                     Links
                   </li>
                   <li className="item">
                     <img className='icon' src='icons/documents.gif'/>
                     Software Updates
                   </li>
                 </ul>
               </li>
               <li className='item folder'>
                 <img className='icon' src='icons/documents.gif'/>
                 Documents
                 <ul className='menu-content'>
                   <li className="item">
                     <img className='icon' src='icons/txt.gif'/>
                     Hot grills.txt
                   </li>
                   <li className="item">
                     <img className='icon' src='icons/txt.gif'/>
                     Passwords.txt
                   </li>
                 </ul>
               </li>
               <li className='item folder'>
                 <img className='icon' src='icons/settings.gif'/>
                 Settings
               </li>
               <li className='item folder'>
                 <img className='icon' src='icons/find.gif'/>
                 Find
               </li>
               <li className='item'>
                 <img className='icon' src='icons/help.gif'/>
                 Help
               </li>
               <li className='item'>
                 <img className='icon' src='icons/run.gif'/>
                 Run...
               </li>
               <li className='divider'></li>
               <li className='item'>
                 <img className='icon' src='icons/logoff.gif'/>
                 Log Off Win98...
               </li>
               <li className='item'>
                 <img className='icon' src='icons/shutdown.gif'/>
                 Shut Down...
               </li>
             </ul>
           </div>
         </div>
       </aside>
  )
}

export default StartMenu;
