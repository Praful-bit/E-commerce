import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="footer-left">
          <h1 className="text-2xl font-serif ">The Generics</h1>
        </div>
        <div className="footer-right flex space-x-4">
          <a href="https://www.facebook.com/" className="text-white">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook"
              className="w-6 h-6"
            />
          </a>
          <a href="https://github.com/" className="text-white">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png"
              alt="GitHub"
              className="w-6 h-6"
            />
          </a>
          <a href="https://www.youtube.com/" className="text-white">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/YouTube_social_white_square_%282017%29.svg/1200px-YouTube_social_white_square_%282017%29.svg.png"
              alt="YouTube"
              className="w-6 h-6"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
