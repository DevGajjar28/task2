import { ArrowBack } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import React from "react";

function BackBtn() {
  const goBack = () => {
    window.history.back();
  };

  return (
    <Tooltip title="Go back" arrow>
      <IconButton
        onClick={goBack}
        sx={{ "&:hover": { background: "#000", color: "#fff" } }}
      >
        <ArrowBack />
      </IconButton>
    </Tooltip>
  );
}

export default BackBtn;
