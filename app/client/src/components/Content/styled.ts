import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding: 16px;
`;

export const Title = styled.h1`
  width: 100%;
  text-align: center;
  margin: 0;
  padding: 10px 0;
  font-size: 1.8rem;

  @media(min-width: 460px) {
    font-size: 2.5rem;
  }
`;

export const Card = styled.a`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  border-radius: 4px;
  width: 100%;
  max-width: 500px;
  padding-top: 52.085%;
  background: #CCCCCC;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  object-fit: cover;
  object-position: center center;
`;

export const Features = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding-bottom: 20px;
  max-width: 768px;
`;

export const Item = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  width: 100%;
  margin: 20px 0;

  @media(min-width: 460px) {
    text-align: left;
  }
`;

export const Icon = styled.div`
  display: none;

  @media(min-width: 460px) {
    display: flex;
    padding: 20px 30px;
  }

  @media(min-width: 768px) {
    padding: 35px 40px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 1.6rem;

  @media(min-width: 460px) {
    font-size: 2rem;
  }
`;

export const Text = styled.p`
  font-size: 1.1rem;

  @media(min-width: 460px) {
    font-size: 1.3rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 275px;
  padding: 5px;
  margin: 5px 0;
`;

Wrapper.displayName = 'Wrapper';
Title.displayName = 'Title';
Card.displayName = 'Card';
Image.displayName = 'Image';
Features.displayName = 'Features';
Item.displayName = 'Item';
Icon.displayName = 'Icon';
SubTitle.displayName = 'SubTitle';
Text.displayName = 'Text';
Form.displayName = 'Form';
Input.displayName = 'Input';
