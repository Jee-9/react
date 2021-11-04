import React from "react";
import styled from "styled-components";
import { lambdaApi } from "../api";


const Container = styled.div`
    margin: 50px;
    color: white;
`;

const NavWrapper = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 30px;
`;

const NavTitle = styled.div`
    font-size: 36px;
    font-weight: 600;
`;

const Btn = styled.div`
    position: absolute;
    top: 5px;
    left: 5px;
    cursor: pointer;
    margin-right: 10px;
`;

const HomePresenter = ({ loading, items, setItems }) => {
    return loading ? null : (
        <Container>
            <NavWrapper>
                <NavTitle> Hi Nice to meet u </NavTitle>
            </NavWrapper>
        </Container>
    );
};

export default HomePresenter;

