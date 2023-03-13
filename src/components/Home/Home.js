import React from "react";
import bgImg from "../../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h4>Service App</h4>
          <p>Solution to your all problems</p>
        </main>
      </div>
      <div className="second-home">
        <img src={bgImg} alt="Graphics"></img>
        <div>
          <p>
            We are your one and only solution for the tech problem you face
            every day.We are the company which is commited to increase the
            problem solving quality of users.
          </p>
        </div>
      </div>
      <div className="third-home" id="about">
        <div>
          <h4>Who we are?</h4>
          <p>
            We are your one and only solution for the tech problem you face
            every day.We are the company which is commited to increase the
            problem solving quality of users.We are your one and only solution
            for the tech problem you face every day.We are the company which is
            commited to increase the problem solving quality of users.We are
            your one and only solution for the tech problem you face every
            day.We are the company which is commited to increase the problem
            solving quality of users.We are your one and only solution for the
            tech problem you face every day.We are the company which is commited
            to increase the problem solving quality of users.
          </p>
        </div>
      </div>
      <div className="fourth-home" id="brands">
        <div>
            <h4>Brands</h4>
            <article>
                <div style={{animationDelay: "0.3s"}}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>
                <div style={{animationDelay: "0.5s"}}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div>
                <div style={{animationDelay: "0.7s"}}>
                    <AiFillYoutube/>
                    <p>Youtube</p>
                </div>
                <div style={{animationDelay: "1s"}}>
                    <AiFillInstagram/>
                    <p>Instagram</p>
                </div>
            </article>
        </div>
      </div>
    </>
  );
};

export default Home;
