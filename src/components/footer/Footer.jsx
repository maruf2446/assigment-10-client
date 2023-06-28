import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-bg">
      <footer className="footer py-28 text-white max-w-screen-xl mx-auto text-2xl text-slate-950 pt-10">
        <div>
          <span className="text-slate-950 text-4xl font-bold">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="text-slate-950 text-4xl font-bold">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="text-slate-950 text-4xl font-bold">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="text-slate-950 text-4xl font-bold">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text text-white">
                Enter your email address
              </span>
            </label>
            <div className="relative text-slate-950">
              <input
                type="text"
                placeholder="Maruf2446@.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn bg-orange-500 border-0 absolute top-0 right-0 rounded-l-none text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
