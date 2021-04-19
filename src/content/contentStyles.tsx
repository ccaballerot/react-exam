import React from 'react';
import styled from 'styled-components';

export const ContentWrap = styled.div`
    width: 100%;
    border: 1px solid green;

    .boxWrap {
        width: 90%;
        border: 1px solid blue;

        .img {
            width: 100%;
            height: 150px;
            background-color: gray;
        }

        .cont {
            margin-top: 10px;
            width: 100%;
            height: 150px;
            background-color: gray;
        }
    }
`;