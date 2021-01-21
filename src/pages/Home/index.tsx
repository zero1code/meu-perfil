import React, {useState} from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Tilt from 'react-parallax-tilt';
import profileImage from '../../images/profileimage.png';
import node from '../../images/node.svg';
import css3 from '../../images/css3.svg';
import html5 from '../../images/html5.svg';
import javascript from '../../images/javascript.svg';
import reactjs from '../../images/reactjs.svg';
import reactNative from '../../images/react-native.svg';
import typescript from '../../images/typescript.svg';

import {
  Container,
  Content,
  ProfileContent,
  ProfileCard,
  ProfileImage,
  ProfileName,
  ProfileDescription,
  InterestsCard,
  InterestsText,
  InterestsTecnologies,
  TecnologiesList,
  InfoContent,
  AboutMeCard,
  AboutMeText,
  AboutMeDescription,
  SocialMediasContent,
  GitHubButton,
  GitHubText,
  LinkedInButton,
  LinkedInText,
  ProjectsCard,
  ProjectsText,
  ProjectsDescription,
  CardContent,
  ProjectCard,
  ProjectCardContent,
  ProjectNumber,
  ProjectTitle,
  ProjectDescription,
  ProjectButton,
} from './styles';

const Home: React.FC = () => {

  const data = [
    {
      name: "Node.Js",
      image: `${node}`
    },
    {
      name: "CSS3",
      image: `${css3}`
    },
    {
      name: "HTML5",
      image: `${html5}`
    },
    {
      name: "Javascript",
      image: `${javascript}`
    }, 
    {
      name: "ReactJS",
      image: `${reactjs}`
    },
    {
      name: "React Native",
      image: `${reactNative}`
    },
    {
      name: "Typescript",
      image: `${typescript}`
    }
  ];

  const [tecnologies, setTecnologies] = useState(data);

  return (
    <Container>
      <Content>
        <ProfileContent>
          <Tilt 
            tiltMaxAngleX={5} 
            tiltMaxAngleY={5} 
            glareEnable={true} 
            glareMaxOpacity={1}
            glareColor="#fff"
            glarePosition="bottom"
            scale={1}
          >
        <ProfileCard>
          <ProfileImage src={profileImage} />
          <ProfileName>Airton Oliveira</ProfileName>
          <ProfileDescription>Front-end web and mobile developer</ProfileDescription>
        </ProfileCard>
        </Tilt>
        <InterestsCard>
          <InterestsText>Tenho experiência</InterestsText>
          <InterestsTecnologies>
            <TecnologiesList>
              {tecnologies.map(tec => (
                <li><img src={tec.image} alt={tec.name}/></li>
              ))}
              
            </TecnologiesList>
          </InterestsTecnologies>
        </InterestsCard>
        </ProfileContent>
        <InfoContent>
          <AboutMeCard>
            <AboutMeText>Sobre mim</AboutMeText>
            <AboutMeDescription>
              Formado em Sistema de Informação pelo Centro Universitário ENIAC.

              Apaixonado por programação, sempre busco melhorar cada dia mais meus conhecimentos e assim criar aplicações fluídas, limpas, responsivas e modernas com as melhores tecnologias do mercado.
            </AboutMeDescription>
            <SocialMediasContent>
              <GitHubButton href="https://github.com/zero1code" target="_blank">
                <FaGithub />
                <GitHubText>GitHub</GitHubText>
              </GitHubButton>
              <LinkedInButton href="https://www.linkedin.com/in/airton-oliveira-42b52917b/" target="_blank">
                <FaLinkedin />
                <LinkedInText>LinkedIn</LinkedInText>
              </LinkedInButton>
            </SocialMediasContent>
          </AboutMeCard>
          <ProjectsCard>
            <ProjectsText>Principais projetos</ProjectsText>
            <ProjectsDescription>Esses são os meus principais projetos front-end.</ProjectsDescription>
            <CardContent>
              <Tilt>
                <ProjectCard>
                  <ProjectNumber>01</ProjectNumber>
                  <ProjectCardContent>
                    <ProjectTitle>e.learning</ProjectTitle>
                    <ProjectDescription>Projeto front-end mobile voltado para educação.</ProjectDescription>
                    <ProjectButton href="https://github.com/zero1code/e.learning-frontend" target="_blank">Ver repositório</ProjectButton>
                  </ProjectCardContent>
                </ProjectCard>
              </Tilt>
              <Tilt>
              <ProjectCard>
                <ProjectNumber>02</ProjectNumber>
                <ProjectCardContent>
                  <ProjectTitle>Combinação de números</ProjectTitle>
                  <ProjectDescription>Projeto front-end mobile combinação de números.</ProjectDescription>
                  <ProjectButton href="https://github.com/zero1code/combinacaoNumeros"target="_blank">Ver repositório</ProjectButton>
                </ProjectCardContent>
              </ProjectCard>
              </Tilt>
              <Tilt>
              <ProjectCard>
                <ProjectNumber>03</ProjectNumber>
                <ProjectCardContent>
                  <ProjectTitle>Meu perfil</ProjectTitle>
                  <ProjectDescription>Projeto front-end web, sim esse mesmo que você está vendo.</ProjectDescription>
                  <ProjectButton href="https://github.com/zero1code/meu-perfil" target="_blank">Ver repositório</ProjectButton>
                </ProjectCardContent>
              </ProjectCard>
              </Tilt>
            </CardContent>
          </ProjectsCard>
        </InfoContent>
      </Content>
    </Container>
  )
};

export default Home;