import { Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";

export const FormCard = () => {
  const [name, setName] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setName(event.target.value);
  };

  return (
    <Card sx={{ width: 300, margin: 1 }}>
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              onChange={(event) => handleChange(event)}
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={4}>
            <Typography
              sx={{ textAlign: "right", margin: "8px 0", fontWeight: "bold" }}
            >
              Your Name:
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography sx={{ textAlign: "left", margin: "8px" }}>
              {name ? name : "Kein Wert"}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
