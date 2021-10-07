import React, { FunctionComponent } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface MemberCardProps {
  forename: string;
  surname: string;
}

export const MemberCard: FunctionComponent<MemberCardProps> = ({
  forename,
  surname,
}) => {
  return (
    <Card sx={{ width: 300, margin: 1 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Member of DiE Department
        </Typography>
        <Typography variant="h5" component="div">
          {forename} {surname}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
