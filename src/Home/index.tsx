import React, { useCallback } from "react";
import { Container, Text } from "./styles";
import api from "../services/api";

export function Home() {
    
    const getRecipes = useCallback(async () => {
        const search = await api.get("");
    }, []);

    return (
        <Container>
            <Text>Tela Home</Text>
        </Container>
    );
}