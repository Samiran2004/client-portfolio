import React from 'react';
import styled from 'styled-components';

const DownloadCBButton = ({message}) => {
  return (
    <StyledWrapper>
      <div className="button">
        <a href="#" className="anchor">
          <span>{message}</span>
        </a>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .anchor {
    text-decoration: none;
    color: #fff;
    display: inline-block;
    font-family: sans-serif;
    font-weight: 700;
    border-radius: 20px;
    border: 2px solid white;
    padding: 14px 40px 13px;
    overflow: hidden;
    position: relative;
  }

  .anchor:hover {
    color: #4e484a;
  }

  .button a::before {
    position: absolute;
    content: "";
    z-index: 0;
    background-color: #2b64ea;
    left: -5px;
    right: -5px;
    bottom: -5px;
    height: 111%;
    transition: all .3s ease;
  }

  .button a:hover::before {
    height: 11%;
  }

  .button span {
    position: relative;
    z-index: 2;
    transition: all .3s ease;
  }`;

export default DownloadCBButton;