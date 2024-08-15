import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From Machine Learning Models to Deep Learning Models and Large Language Models. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'Machine Learning' ?
            <ToggleButton active value="Machine Learning" onClick={() => setToggle('Machine Learning')}>Machine Learning</ToggleButton>
            :
            <ToggleButton value="Machine Learning" onClick={() => setToggle('Machine Learning')}>Machine Learning</ToggleButton>
          }
          <Divider />
          {toggle === 'Generative AI' ?
            <ToggleButton active value="Generative AI" onClick={() => setToggle('Generative AI')}>Generative AI</ToggleButton>
            :
            <ToggleButton value="Generative AI" onClick={() => setToggle('Generative AI')}>Generative AI</ToggleButton>
          }
          <Divider />
          {toggle === 'Computer Vision' ?
            <ToggleButton active value="Computer Vision" onClick={() => setToggle('Computer Vision')}>Computer Vision</ToggleButton>
            :
            <ToggleButton value="Computer Vision" onClick={() => setToggle('Computer Vision')}>Computer Vision</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects