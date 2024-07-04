import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    onSearch(searchQuery);
  };
  return (
    <>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="Search Users"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </Box>
      <Stack>
        <Button
          variant="contained"
          onClick={handleSearchSubmit}
          sx={{
            background: "#000",
            "&:hover": {
              background: "#7469B6",
              color: "#000",
            },
          }}
        >
          search
        </Button>
      </Stack>
    </>
  );
}

export default SearchBar;
