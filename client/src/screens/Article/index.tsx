// import React from 'react';
import styled from 'styled-components/macro';
import { useParams } from 'react-router-dom';

import { useGetArticleQuery } from '../../generatedTypes';

const Article = () => {
    const {articleId}: { articleId: string} = useParams();


    console.log({articleId})
    const {data } = useGetArticleQuery({variables: {id: articleId}});
    console.log({data})

    return (
        <>Article</>

    )
};

export default Article