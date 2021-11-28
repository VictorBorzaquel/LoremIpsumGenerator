import React, { useState } from 'react';
import { LoremIpsum } from 'lorem-ipsum';
import {setString} from 'expo-clipboard';

import {
  Container,
  Copy,
  CopyText,
  Description,
  Footer,
  Input,
  InputTitle,
  LoremIpsumText,
  Scroll,
  Title,
  Wrapper
} from './styles';

export function Home() {
  const [paragraphs, setParagraphs] = useState('')
  const loren = new LoremIpsum()

  const generateParagraphs = loren.generateParagraphs(Number(paragraphs) || 0)

  function handleSetParagraph(value: string) {
    if (value === '0' || value === '') return setParagraphs('')
    if (!Number(value)) return
    if (Number(value) >= 100) return setParagraphs('100')

    setParagraphs(value)
  }
  
  function handleCopy() {
    setString(generateParagraphs)
  }

  return (
    <Container>
      <Title>Lorem Ipsum Generator</Title>
      <Scroll>
        <LoremIpsumText>
          {generateParagraphs}
        </LoremIpsumText>
      </Scroll>

      <Footer>
        <Wrapper>
          <Description>
            <InputTitle>Paragrafos</InputTitle>
          </Description>

          <Input
            keyboardType='numeric'
            value={paragraphs}
            onChangeText={handleSetParagraph}
          />
        </Wrapper>

        <Copy onPress={handleCopy}>
          <CopyText>Copiar</CopyText>
        </Copy>
      </Footer>
    </Container>
  );
}
