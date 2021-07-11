import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './Ourteam.css';

const Ourteam = () => {
  return (
    <div id="contact" className="ourTeam">
      <h1 className="ourTeam__heading">Meet Our Team</h1>
      <p>
        Our Experts in the field of crypto currency can always help you with any
        of your questions!
      </p>
      <div className="ourTeam__cards">
        <div className="ourTeam__cards__card">
          <div className="teamMember__image">
            <img style={{objectFit: 'cover'}} src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" height="200px" width="200px" alt="" />
          </div>
          <p className="teamMember__name">Tom Binegar</p>
          <p className="teamMember__post">Business Development</p>
          <div className="teamMember__socialMedia">
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
        <div className="ourTeam__cards__card">
          <div className="teamMember__image">
            <img style={{objectFit: 'cover'}} src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" height="200px" width="200px" alt="" />
          </div>
          <p className="teamMember__name">Jackson Nash</p>
          <p className="teamMember__post">Business Development</p>
          <div className="teamMember__socialMedia">
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
        <div className="ourTeam__cards__card">
          <div className="teamMember__image">
            <img style={{objectFit: 'cover'}} src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" height="200px" width="200px" alt="" />
          </div>
          <p className="teamMember__name">Tom Binegar</p>
          <p className="teamMember__post">Business Development</p>
          <div className="teamMember__socialMedia">
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
        <div className="ourTeam__cards__card">
          <div className="teamMember__image">
            <img style={{objectFit: 'cover'}} src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" height="200px" width="200px" alt="" />
          </div>
          <p className="teamMember__name">Melissa Barth</p>
          <p className="teamMember__post">Product Manager</p>
          <div className="teamMember__socialMedia">
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
        <div className="ourTeam__cards__card">
          <div className="teamMember__image">
            <img style={{objectFit: 'cover'}} src="https://images.unsplash.com/photo-1567186937675-a5131c8a89ea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" height="200px" width="200px" alt="" />
          </div>
          <p className="teamMember__name">Katy Abrahams</p>
          <p className="teamMember__post">Head of Design</p>
          <div className="teamMember__socialMedia">
            <FaFacebook className="teamMember__socialMedia_icon" />
            <FaTwitter  className="teamMember__socialMedia_icon"/>
            <FaLinkedin  className="teamMember__socialMedia_icon"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourteam;
