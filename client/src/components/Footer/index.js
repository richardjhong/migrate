import React from 'react';
import './Footer.scss'
import { websiteTechStack } from './techstackData'
import ReactTooltip from 'react-tooltip';
import { useState, useEffect } from 'react';
import Image from 'mui-image';

const Footer = () => {
  const usernames = ['pariselectra', 'MarkGATX', 'richardjhong', 'rogseo', 'sarahthoorens'];
  const [profileImages, setProfileImages] = useState([]);

  useEffect(() => {
    const fetchProfileImages = async () => {
      const images = await Promise.all(usernames.map(async (username) => {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        return data.avatar_url;
      }));
      setProfileImages(images);
    };
    fetchProfileImages();
  }, []);

  return (
    <footer>
      <div className='authors'>
        <div className="authorContain">This site created by ... </div>
        {usernames.map((username, index) => (
          <div className="authorName" key={username}>
            <a href={`https://github.com/${username}`}>
              {username}
            </a>
            {profileImages[index] && (
              <Image width="50px" height='50px' src={profileImages[index]} alt={`${username} profile`} style={{ width: '50px', borderRadius: '100px' , padding:'1em'}} />
            )}
          </div>
        ))}
      </div>
      <div className="techstackContainer">
        <div className="madeWith">Made with: </div>
        {websiteTechStack.devicons.map((skill, i) => {
          const Icon = skill.icon;
          return (
            <div key={i}>
              <Icon
                size={28}
                style={{ margin: 5 }}
                data-tip={skill.tooltipMessage}
                data-for='skillTooltip'
                data-place='bottom'
              />
              <ReactTooltip id="skillTooltip" />
            </div>
          )
        })}
      </div>
      <div className='copyright'>
        Copyright 2022
      </div>
    </footer>
  );
};

export default Footer;
