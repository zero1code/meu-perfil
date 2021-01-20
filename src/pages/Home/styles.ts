import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px 0;
  
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ProfileContent = styled.div`
  
`;

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
  margin-bottom: 10px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);

 
`;

export const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  border: 6px solid #fff;
  padding: 8px;
  /* box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5); */
`;

export const ProfileName = styled.h2`
  margin-top: 20px;
`;

export const ProfileDescription = styled.p`
  width: 100%;
  margin-top: 20px;
  padding-top: 30px;
  border-top: 1px solid #ffffff5e;
  text-align: center;
`;

export const InterestsCard = styled.div`
  width: 400px;
  height: 200px;
  margin-bottom: 10px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
`;

export const InterestsText = styled.h2`
  margin: 25px 0 0 20px;
`;

export const InterestsTecnologies = styled.div``;

export const TecnologiesList = styled.ul`
  list-style-type: none;

  li {
    float: left;
    margin-left: -20px;
    margin-top: 20px;
    transition: 0.1s;
  }

  li:first-child {
    margin-left: 20px;
  }

  li:hover {
    transform: translateY(-20px);
    z-index: 1;
  }
`;

export const InfoContent = styled.div`

  @media(max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const AboutMeCard = styled.div`
  width: 800px;
  height: 280px;
  margin-left: 10px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);

  @media(max-width: 800px) {
    width: 400px;
    height: 500px;
    margin-left: 0;
  }
`;

export const AboutMeText = styled.h2`
  margin: 25px 0 0 20px;
`;

export const AboutMeDescription = styled.p`
  margin: 15px 20px 0 20px;
  line-height: 25px;
  font-size: 18px;
`;

export const SocialMediasContent = styled.div`
  width: 200px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 40px 20px 0 20px;

  svg {
    width: 1.5em;
    height: 1.5em;
  }
`

export const GitHubButton = styled.a`
  width: 130px;  
  height: 50px;
  margin: 0 5px;
  display: inline-flex;
  align-items: center;
  padding: 14px;
  background: rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  text-decoration: none;
  transition: background 0.3s;
  color: #fff;

  &:hover {
    background: rgba(255, 255, 255, 0.7);
  }
`

export const GitHubText = styled.span`
  flex-shrink: 0;
  margin-left: 12px;
`;

export const LinkedInButton = styled.a`
  width: 130px;  
  height: 50px;
  margin: 0 5px;
  display: inline-flex;
  align-items: center;
  padding: 14px;
  background: rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  text-decoration: none;
  transition: background 0.3s;
  color: #fff;

  &:hover {
    background: rgba(255, 255, 255, 0.7);
  }
`;

export const LinkedInText = styled.span`
  flex-shrink: 0;
  margin-left: 12px;
`;

export const ProjectsCard = styled.div`
  width: 800px;
  height: 500px;
  margin-left: 10px;
  margin-top: 10px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);

  @media(max-width: 800px) {
    width: 400px;
    height: 100%;
    margin-left: 0;
  }
`;

export const ProjectsText = styled.h2`
  margin: 25px 0 0 20px;
`;

export const ProjectsDescription = styled.p`
  margin: 15px 20px 0 20px;
  line-height: 25px;
  font-size: 18px;
`;

export const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ProjectCard = styled.div`
  position: relative;
  width: 210px;
  height: 350px;
  margin: 30px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
`;

export const ProjectCardContent = styled.div`
  padding: 20px;
  text-align: center;
  transform: translateY(100px);
  opacity: 0;
  transition: 0.5s;

  &:hover {
    transform: translateY(0px);
    opacity: 1;
  }
`;

export const ProjectNumber = styled.span`
  position: absolute;
  top: -30px;
  right: 30px;
  font-size: 7em;
  color: rgba(255, 255, 255, 0.05);
  pointer-events: none;
`;

export const ProjectTitle = styled.h2`
  font-size: 1.8em;
  color: #fff;
  z-index: 1;
`;

export const ProjectDescription = styled.p`
  font-size: 1em;
  color: #E0E0E0;
  font-weight: 300;
`;

export const ProjectButton = styled.a`
  position: relative;
  display: inline-block;
  padding: 8px 20px;
  margin-top: 15px;
  background: #fff;
  color: #000;
  border-radius: 20px;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
`;



