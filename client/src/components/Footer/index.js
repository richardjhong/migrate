import React from 'react';
import './Footer.scss'
import { websiteTechStack } from './techstackData'
import ReactTooltip from 'react-tooltip';

const Footer = () => {
  return (
    <footer >
      <div className='authors'>
        <div className="authorContain">This site created by </div>
        <div className="authorName"><a href="https://github.com/pariselectra">Paris Bland</a></div> <div className="authorName"><a href="https://github.com/MarkGATX">Mark Gardner</a></div>  <div className="authorName"><a href="https://github.com/richardjhong">Richard Hong</a></div>  <div className="authorName"><a href="https://github.com/pariselectra">Yeon Seo</a></div> <div className="authorName"><a href="https://github.com/sarahthoorens">Sarah Thoorens</a></div>
      </div>
      <div className="techstackContainer">
        <div className="madeWith">Made with: </div>
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
