import styled from 'styled-components/native';
import { View, Image, StyleSheet } from 'react-native';
export const Container = styled.View`
    height: 700px;
    margin-top: 5px;
`;

export const TabsContainer = styled.ScrollView.attrs({
    horizontal: true,
    contentContainerStyle: { paddingLeft: 10, paddingRight: 20 },
    showsHorizontalScrollIndicator: false
})``;
export const TabItem = styled.View`
  width: 393px;
  height: 700px;
  background: black;
  border-radius: 3px;
  margin-left: 5px;
  justify-content: space-between;
  `;
export const TabText = styled.Text`
font-size: 13px;
color: #FFF;
padding: 10px;
`;
