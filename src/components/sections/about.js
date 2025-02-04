import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['JavaScript', 'TypeScript', 'React', 'Java', 'C#', 'C++'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">À propos de moi</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello ! Mon nom est Abdelaziz, étudiant en dernière année au Baccalauréat en
              Informatique et Génie Logiciel à l'Université du Québec à Montréal. Mon intérêt pour
              le développement est né depuis le Lycée Lyautey, au Maroc. Ayant choisi l'option de
              spécialité &quot;Numériques et Sciences Informatique&quot;, j'ai tout de suite su que
              je ferai carrière dans ce domaine.
            </p>

            <p>
              J'ai eu la chance, dans mon parcours académique, de travailler sur plusieurs projets
              qui m'ont permis d'appliquer de nombreux langages de programmation. Des projets qui
              m'ont servis d'une grande base pour le développement logiciel à petite / moyenne et
              grande échelle. J'ai eu la chance de travailler sur un projet d'un site internet de{' '}
              <a href="https://gitlab.info.uqam.ca/kc391063/swyle">
                vente de vêtements d'occasion nommé SWYLE
              </a>
              ,{' '}
              <a href="https://gitlab.info.uqam.ca/jalal.abdelaziz/tp1-base">
                d'une application de chat instantané comme WhatsApp
              </a>
              , ou tout récemment (je viens de commencer le projet),{' '}
              <a href="https://gitlab.info.uqam.ca/jalal.abdelaziz/inf6150-hiver2025">
                un système de gestion d'une bibliothèque numérique
              </a>
              .
            </p>

            <p>Voici certaines technologies que j'ai récemment utilisé :</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="C:\Users\abdel\Personal Website\personal-webiste\src\images\favicons\me.png"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
