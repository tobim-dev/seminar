import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { FunctionComponent } from "react";
import { Header } from "./components/AppBar";
import { MemberCard } from "./components/MemberCard";
import awsconfig from "./aws-exports";
import { Amplify, API } from "aws-amplify";
import { ListPeopleQuery } from "./API";
import * as queries from "./graphql/queries";
import { FormCard } from "./components/FormCard";
Amplify.configure(awsconfig);

export const App: FunctionComponent = () => {
  const [peopleList, setPeopleList] = useState<ListPeopleQuery>();

  useEffect(() => {
    const fetchMembers = async () => {
      const { data: graphQLResponse } = await (API.graphql({
        query: queries.listPeople,
      }) as Promise<{ data: ListPeopleQuery }>);
      setPeopleList(graphQLResponse);
    };
    fetchMembers();
  }, [setPeopleList]);

  return (
    <>
      <Header />
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          margin: "20px",
          maxWidth: "700px",
        }}
      >
        {peopleList?.listPeople?.items?.map((person) => (
          <MemberCard
            key={person?.id}
            jobForOneDay={person?.jobForOneDay ? person.jobForOneDay : ""}
            newHobby={person?.newHobby ? person.newHobby : ""}
          />
        ))}
        <FormCard />
      </Container>
    </>
  );
};
