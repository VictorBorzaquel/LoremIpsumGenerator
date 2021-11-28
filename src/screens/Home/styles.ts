import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 24px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  padding-bottom: 20px;
`;

export const Scroll = styled.ScrollView`

`;

export const LoremIpsumText = styled.Text`
  line-height: 20px;
`;

export const Footer = styled.View`
  flex-direction: row;
  height: 60px;
  margin-top: 20px;
  align-items: center;
`;

export const Wrapper = styled.View`
  flex: 1;
  height: 60px;
  flex-direction: row;
  align-items: center;
  padding-right: 10px;
`;

export const Description = styled.View`
  background-color: #e6e6e6;
  height: 100%;
  justify-content: center;
  padding: 0 7px;
  margin-right: 2px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const InputTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  padding: 0 10px;
`;

export const Input = styled.TextInput`
  height: 100%;
  flex: 1;
  background-color: #e6e6e6;
  padding: 0 12px;
  color: #000;
  font-size: 16px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const Copy = styled(RectButton)`
  height: 100%;
  width: 100px;
  background-color: #1ca517;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const CopyText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
`;