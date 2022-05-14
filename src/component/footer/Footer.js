import React from "react";

export default function Footer() {
    const mystyle = {
                   backgroundColor: 'rgba(0, 0, 0, 0.2)'
      };
  return (
    <div>
      <footer className="bg-light text-center text-lg-start">
        <div className="text-center p-3" style = {{mystyle}}>
          © 2022 Copyright:
          <a className="text-dark" href="/">
          Prabhat
          </a>
        </div>
      </footer>
    </div>
  );
}
