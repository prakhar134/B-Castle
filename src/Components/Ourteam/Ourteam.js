import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./Ourteam.css";

const Ourteam = () => {
  return (
    <div className="ourTeam">
      <h1 className="ourTeam__heading">Meet Our Team</h1>
      <p>
        Our Experts in the field of crypto currency can always help you with any
        of your questions!
      </p>
      <div className="ourTeam__cards">
        <div className="ourTeam__cards__card">
          <div className="teamMember__image">
            <img src="https://via.placeholder.com/150" alt="" />
          </div>
          <p className="teamMember__name">Tom Binegar</p>
          <p className="teamMember__post">Business Development</p>
          <div classroom="teamMember__socialMedia">
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
        <div className="ourTeam__cards__card">
          <div className="teamMember__image">
            <img src="https://via.placeholder.com/150" alt="" />
          </div>
          <p className="teamMember__name">Jackson Nash</p>
          <p className="teamMember__post">Business Development</p>
          <div classroom="teamMember__socialMedia">
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
        <div className="ourTeam__cards__card">
          <div className="teamMember__image">
            <img src="https://via.placeholder.com/150" alt="" />
          </div>
          <p className="teamMember__name">Tom Binegar</p>
          <p className="teamMember__post">Business Development</p>
          <div classroom="teamMember__socialMedia">
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
        <div className="ourTeam__cards__card">
          <div className="teamMember__image">
            <img src="https://via.placeholder.com/150" alt="" />
          </div>
          <p className="teamMember__name">Melissa Barth</p>
          <p className="teamMember__post">Product Manager</p>
          <div classroom="teamMember__socialMedia">
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
        <div className="ourTeam__cards__card">
          <div className="teamMember__image">
            <img src="https://via.placeholder.com/150" alt="" />
          </div>
          <p className="teamMember__name">Katy Abrahams</p>
          <p className="teamMember__post">Head of Design</p>
          <div classroom="teamMember__socialMedia">
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourteam;
