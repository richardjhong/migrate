import React from 'react';
import './Footer.scss'
import { websiteTechStack } from './techstackData'
import ReactTooltip from 'react-tooltip';

const Footer = () => {
  return (
    <footer >
      <div >
        This site created by 
        Paris Bland, Mark Gardner, Richard Hong, Yeon Seo, Sarah Thoorens
      </div>
      <div className="techstackContainer">
        <p>Made with: </p>
        {websiteTechStack.devicons.map(skill => {
          const Icon = skill.icon;
          return (
            <>
              <Icon 
                size={28}
                style={{ margin: 5}} 
                data-tip={skill.tooltipMessage} 
                data-for='skillTooltip' 
                data-place='bottom'
              />
              <ReactTooltip id="skillTooltip" />
            </>
          )
        })}
      </div>
      <div>
        Copyright 2022
      </div>
    </footer>
  );
};

export default Footer;
