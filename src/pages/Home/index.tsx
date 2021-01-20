import React, {useState} from 'react';
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
        <ProfileCard>
          <ProfileImage src={profileImage} />
          <ProfileName>Airton Oliveira</ProfileName>
          <ProfileDescription>Front-end web and mobile developer</ProfileDescription>
        </ProfileCard>
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
            <AboutMeDescription>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas architecto deserunt praesentium inventore? Vitae, dignissimos corrupti natus fuga dolores, veritatis ad architecto repellendus cum exercitationem at cupiditate est pariatur aliquid.</AboutMeDescription>
          </AboutMeCard>
          <ProjectsCard>
            <ProjectsText>Principais projetos</ProjectsText>
            <ProjectsDescription>Esses são os meus principais projetos front-end.</ProjectsDescription>
            <CardContent>
              <ProjectCard>
                <ProjectNumber>01</ProjectNumber>
                <ProjectCardContent>
                  <ProjectTitle>e.learning</ProjectTitle>
                  <ProjectDescription>Projeto front-end mobile voltado para educação.</ProjectDescription>
                  <ProjectButton href="https://github.com/zero1code/e.learning-frontend">Ver repositório</ProjectButton>
                </ProjectCardContent>
              </ProjectCard>

              <ProjectCard>
                <ProjectNumber>02</ProjectNumber>
                <ProjectCardContent>
                  <ProjectTitle>Combinação de números</ProjectTitle>
                  <ProjectDescription>Projeto front-end mobile combinação de números.</ProjectDescription>
                  <ProjectButton href="https://github.com/zero1code/combinacaoNumeros">Ver repositório</ProjectButton>
                </ProjectCardContent>
              </ProjectCard>

              <ProjectCard>
                <ProjectNumber>03</ProjectNumber>
                <ProjectCardContent>
                  <ProjectTitle>Meu perfil</ProjectTitle>
                  <ProjectDescription>Projeto front-end web, sim esse mesmo que você está vendo.</ProjectDescription>
                  <ProjectButton>Ver repositório</ProjectButton>
                </ProjectCardContent>
              </ProjectCard>
            </CardContent>
          </ProjectsCard>
        </InfoContent>
      </Content>
    </Container>
  )
};

export default Home;