import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { FunctionComponent } from "react";
import { Header } from "./components/AppBar";
import { MemberCard } from "./components/MemberCard";
import awsconfig from "./aws-exports";
import { Amplify, API } from "aws-amplify";
import { ListPeopleQuery } from "./API";
import * as queries from "./graphql/queries";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
Amplify.configure(awsconfig);

type MigrationCounter = Record<string, number>;

export const App: FunctionComponent = () => {
  const [peopleList, setPeopleList] = useState<ListPeopleQuery>();
  const [migrationCounter, setMigrationCounter] = useState<MigrationCounter>(
    {}
  );

  useEffect(() => {
    const fetchMembers = async () => {
      const { data: graphQLResponse } = await (API.graphql({
        query: queries.listPeople,
      }) as Promise<{ data: ListPeopleQuery }>);
      console.log("GraphQLResponse", graphQLResponse);
      setPeopleList(graphQLResponse);

      let migrationCounter: MigrationCounter = {};

      graphQLResponse?.listPeople?.items?.forEach((person) => {
        if (person?.currentOffice && person?.wishOffice) {
          const migrationPath =
            person?.currentOffice + "→" + person?.wishOffice;

          if (migrationCounter[migrationPath]) {
            migrationCounter[migrationPath] =
              migrationCounter[migrationPath] + 1;
          } else {
            migrationCounter[migrationPath] = 1;
          }
        }
      });
      setMigrationCounter(migrationCounter);
      console.log("MigrationCounter", migrationCounter);
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
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 300 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Migration Path</TableCell>
                <TableCell align="center">Migration Quantity</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.entries(migrationCounter).map(
                ([migrationPath, migrationQuantity]) => (
                  <TableRow
                    key={migrationPath}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{migrationPath}</TableCell>
                    <TableCell align="center">{migrationQuantity}</TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};
