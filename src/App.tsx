import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { FunctionComponent } from "react";
import { Header } from "./components/AppBar";
import { MemberCard } from "./components/MemberCard";
import awsconfig from "./aws-exports";
import { Amplify, API } from "aws-amplify";
import { ListMembersQuery } from "./API";
import * as queries from "./graphql/queries";
Amplify.configure(awsconfig);

export const App: FunctionComponent = () => {
  const [membersList, setMembersList] = useState<ListMembersQuery>();

  useEffect(() => {
    const fetchMembers = async () => {
      const { data: graphQLResponse } = await (API.graphql({
        query: queries.listMembers,
      }) as Promise<{ data: ListMembersQuery }>);
      setMembersList(graphQLResponse);
    };
    fetchMembers();
  }, [setMembersList]);

  return (
    <>
      <Header />
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          margin: "20px",
          maxWidth: "700px"
        }}
      >
        {membersList?.listMembers?.items?.map((member) => (
          <MemberCard
            key={member?.id}
            forename={member?.forename ? member.forename : ""}
            surname={member?.surname ? member.surname : ""}
          />
        ))}
      </Container>
    </>
  );
};
