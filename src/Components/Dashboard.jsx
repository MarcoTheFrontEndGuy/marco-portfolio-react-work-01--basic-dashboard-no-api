import React, { useEffect } from 'react'
import styled from 'styled-components'
import Analytics from './Analytics';
import FAQ from './FAQ';
import Navbar from './Navbar';
import Profile from './Profile'
import Transfers from './Transfers';
import Earnings from './Earnings'
import scrollreveal from 'scrollreveal';

export default function Dashboard() {
  useEffect(() => {
    const src = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    src.reveal(
    `
      nav,
      .row__one,
      .row__two
    `,{
      opacity: 0,  
      interval: 200
    });
  }, []);

  return (
    <Section>
      <Navbar />
      <div className="grid">
        <div className="row__one">
          <Analytics />
          <FAQ />
        </div>
        <div className="row__two">
          <Earnings />
          <Transfers />
          <Profile />
        </div>
      </div>
    </Section>
  )
}

const Section = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;
  .grid {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
    margin-top: 2rem;
    .row__one {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      height: 50%;
      gap: 1rem;
    }
    .row__two {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      height: 50%;
      gap: 1rem;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    .grid {
      .row__one, 
      .row__two {
        grid-template-columns: 1fr;
      }
    }
  }
`;
