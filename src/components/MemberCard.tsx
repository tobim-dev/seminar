import React, { FunctionComponent } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface MemberCardProps {
  jobForOneDay: string;
  newHobby: string | number;
}

export const MemberCard: FunctionComponent<MemberCardProps> = ({
  jobForOneDay,
  newHobby,
}) => {
  return (
    <Card
      //display: "flex", flexDirection: "column"
      sx={{ width: 300, margin: 1 }}
    >
      <CardContent
      // sx={{ flexGrow: 1 }}
      >
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Member of DiE Department
        </Typography>
        <Typography variant="h5" component="div">
          {jobForOneDay}
        </Typography>
        <Typography variant="h5" component="div">
          {newHobby}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
