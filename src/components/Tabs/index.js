import React from 'react';


import {Container, TabsContainer,TabItem, TabText } from './styles';

export default function Tabs(){
    return (
        <Container>
            
            <TabsContainer> 
                <TabItem>

                    <TabText>Indicar amigos</TabText>
                </TabItem>
                <TabItem>

                    <TabText>Cobrar</TabText>
                </TabItem>
                <TabItem>

                    <TabText>Depositar</TabText>
                </TabItem>
                <TabItem>

                    <TabText>Bloquear cartão</TabText>
                </TabItem>
            </TabsContainer>
        </Container>
    );
}