import { NextPage } from 'next'
import Head from 'next/head'

import {
  CardsContainer,
  CardsSection,
  CardsSectionContainer,
  InfoSection,
  InfoSectionContainer
} from '../styles/equipe'

import { Container } from '../layout/styles'
import { Text } from '../components/Typography/Text'
import { Title } from '../components/Typography/Title'
import { ImageContentCard } from '../components/Cards/ImageContentCard'

import { doctorsList } from '../data/data'

const Home: NextPage = () => {

  return (
    <Container>
      <Head>
      <title>Ramirez Clínica de Estética | Equipe</title>
        {/* @ts-ignore */}
        <meta charset="UTF-8" />
        <meta name="description" content="Landing pages de alta conversão e sites institucionais para o seu negócio." />
        <meta name="keywords" content="pablosilvadev pablo silva psd landing pages" />
        <meta name='author' content='Pablo Silva' />
        <meta name="theme-color" content="#00C2FF" />
      </Head>
      <InfoSection>
        <InfoSectionContainer>
          <Title
            content='Equipe'
          />
          <Text
            content='Contamos com profissionais qualificados, todos possuem CRM válido e também anos de experiência para proporcionar o melhor procedimento cirúrgico ou tratamento de acordo com a sua necessidade. Conheça nossos doutores:'
          />
        </InfoSectionContainer>
      </InfoSection>
      <CardsSection>
        <CardsSectionContainer>
        <CardsContainer>
          
          {doctorsList.map(doctor => (

            <ImageContentCard
              key={doctor.name}
              title={doctor.name}
              imgUrl={doctor.image}
              content={doctor.description}
            />
          ))}
        </CardsContainer>
        </CardsSectionContainer>
      </CardsSection>
    </Container >
  )
}

export default Home