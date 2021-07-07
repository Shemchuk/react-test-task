import './footer.scss';
import React, { useEffect } from 'react';

const Footer: React.FC<any> = (props: any) => {
  return (
    <footer className="footer">
      <div className="footer_wrapper">
        <div className="footer_git_link">
          <a href="https://github.com/Shemchuk/react-test-task/">
            <div className="footer_social"></div>
          </a>
          &emsp;
          <a href="https://github.com/Shemchuk">Mikhail Shemchuk</a>
        </div>
        <div className="footer_year">&copy;&nbsp;2021</div>
      </div>
    </footer>
  );
}

export default Footer;
