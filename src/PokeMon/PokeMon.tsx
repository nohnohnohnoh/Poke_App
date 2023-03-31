import React, { useState } from "react";
import styled from "styled-components";
import { useInfiniteQuery, useQuery } from "react-query";
import { PoketData, test } from "../api";
import { PokeMonType } from "../Type";
import InfiniteScroll from "react-infinite-scroller";

const PokeMon = () => {
  const {
    data: PokeMon,
    fetchNextPage,
    hasNextPage,
    isLoading,
  } = useInfiniteQuery("pokemon", PoketData, {
    getNextPageParam: (lastPage) => lastPage.next || undefined,
  });

  if (isLoading) return <div className="loading">Loading...</div>;
  return (
    <Pokemon>
      <PokeMonMain>
        <InfiniteScroll loadMore={() => fetchNextPage()} hasMore={hasNextPage}>
          <PoketMonSection>
            {PokeMon?.pages.map((page) => {
              return page.results.map(({ name, url }: PokeMonType) => {
                return (
                  <PokeMonBox key={url}>
                    <PokeMonImgBox>
                      <PokeMonImg
                        src={`https://img.pokemondb.net/artwork/large/${name}.jpg`}
                      />
                    </PokeMonImgBox>
                    <PokeMonContainer>
                      <PokeMonName>{name}</PokeMonName>
                    </PokeMonContainer>
                  </PokeMonBox>
                );
              });
            })}
          </PoketMonSection>
        </InfiniteScroll>
      </PokeMonMain>
    </Pokemon>
  );
};

const Pokemon = styled.div`
  width: 100vw;
  height: 100vh;
  ${({ theme }) => theme.flexMixIn("center", "center")}
`;
const PokeMonMain = styled.main`
  width: 100%;
  height: 100%;
`;
const PoketMonSection = styled.section`
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.flexMixIn("center", "center")}
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.bgColor};
`;
const PokeMonBox = styled.div`
  width: 350px;
  height: 200px;
  margin: 4%;
  box-shadow: 4px 5px 10px rgb(0 0 0 / 50%);
  display: flex;
`;
const PokeMonImgBox = styled.div`
  width: 200px;
  height: 200px;
`;
const PokeMonImg = styled.img`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.bgColor};
`;
const PokeMonContainer = styled.div`
  width: 150px;
  height: 200px;
  background-color: white;
  ${({ theme }) => theme.flexMixIn("center", "center")}
`;
const PokeMonName = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export default PokeMon;
