import styled from 'styled-components/macro';
import dayjs from 'dayjs';

import { useGetArticleListQuery } from '../../generatedTypes';

const ArticleList = () => {

    const {data, loading, error } = useGetArticleListQuery();
    if(loading || error) return null;

    console.log({data})

    return (
        <>
        {data?.articleList?.map((article: any) => {
            return (
                <ArticleWrapper key={article.id}>
                    <ArticlePublishedDate>{dayjs(article.published).format('MMM D, YYYY')}</ArticlePublishedDate>
                    <ArticleTitle>{article.title}</ArticleTitle>
                    <ArticleThumbnail src={`${process.env.REACT_APP_CMS_ENDPOINT}${article?.hero?.url}`}></ArticleThumbnail>
                    <ArticleDescription>{article.body}</ArticleDescription>
                </ArticleWrapper>
            )
        })}
        </>
    )
    
};

export default ArticleList

const ArticleWrapper = styled.div``;
const ArticlePublishedDate = styled.div``;
const ArticleTitle = styled.div``;
const ArticleThumbnail = styled.img``;
const ArticleDescription = styled.div``;