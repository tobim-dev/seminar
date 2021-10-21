import React, { useEffect, useRef, useState } from "react";
import { Container, MenuItem, TextField } from "@mui/material";
import { FunctionComponent } from "react";
import { Header } from "./components/AppBar";
import awsconfig from "./aws-exports";
import { Amplify, API } from "aws-amplify";
import { ListPeopleQuery } from "./API";
import * as queries from "./graphql/queries";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import Typography from "@mui/material/Typography";
import { PersonRemove, TextFields } from "@mui/icons-material";

Amplify.configure(awsconfig);

export const App: FunctionComponent = () => {
  const [peopleList, setPeopleList] = useState<ListPeopleQuery>();
  const [selectedPower, setSelectedPower] = useState("");
  const myRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const fetchMembers = async () => {
      const { data: graphQLResponse } = await (API.graphql({
        query: queries.listPeople,
      }) as Promise<{ data: ListPeopleQuery }>);

      setPeopleList(graphQLResponse);
    };
    fetchMembers();
  }, [setPeopleList]);

  console.log(selectedPower);
  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    // console.log('test');
    setSelectedPower(ev.target.value);
    if (myRef.current) {
      myRef.current.scrollIntoView({ behavior: "smooth" });
    }

    // if(powerId === ev.target.value){
  };

  useEffect(() => {
    document?.getElementById(`${selectedPower}`)?.scrollIntoView();
  }, [selectedPower]);

  // const executeScroll = () => myRef.current && myRef.current.scrollIntoView();

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
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={selectedPower}
          onChange={handleChange}
          helperText="Please choose a super power"
        >
          {peopleList?.listPeople?.items?.map((person) => (
            <MenuItem key={person?.id} value={person?.superheroAbility!}>
              {person?.superheroAbility?.toUpperCase()}
            </MenuItem>
          ))}
        </TextField>

        <Timeline position="alternate">
          {peopleList?.listPeople?.items
            ?.sort((personA, personB) => {
              if (personA?.pizzaEstimate && personB?.pizzaEstimate) {
                return personA?.pizzaEstimate - personB?.pizzaEstimate;
              } else {
                return 0;
              }
            })
            .map((person) => (
              <TimelineItem key={person?.id} id={`${person?.superheroAbility}`}>
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  align="right"
                  variant="body2"
                  color="text.secondary"
                >
                  {person?.pizzaEstimate}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color="primary">
                    <LocalPizzaIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography variant="h6" component="span">
                    {person?.superheroAbility}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            ))}

          <TimelineItem ref={myRef}>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              Go here
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <LocalPizzaIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                super scroll
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Container>
    </>
  );
};
