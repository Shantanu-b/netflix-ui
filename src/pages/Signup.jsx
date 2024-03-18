import React from "react";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";


export default function Signup() {

  return (

  <Container> 
    <BackgroundImage />
    <div className="content">
        <Header />
            <div className="body flex column a-center j-center">
                <div className="text flex column">
                    <h1>
                        Unlimited Movies TV Shows And Much more
                    </h1>
                    <h4>Watch anywhere. Cancle anytime</h4>
                    <h6>Ready to watch </h6>
                    <div className="form">
                        <input type="email" placeholder="email address" name = "email"/>
                        <input type="password" placeholder="password" name="password"/>
                        <button>Get started</button>
                    </div>
                    <button>Login</button>
                </div>
            </div>
        </div>
  </Container>
  )
}

const Container = styled.div`
position: relative;
.content{
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
    height : 100vh;
    width : 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
}`;

