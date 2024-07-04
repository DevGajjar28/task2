import { Box, Button, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

  const pageButtons = [];

  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, currentPage + 2);

  for (let i = startPage; i <= endPage; i++) {
    pageButtons.push(
      <Button
        key={i}
        variant={i === currentPage ? "contained" : "outlined"}
        onClick={() => onPageChange(i)}
        sx={{
          minWidth: 36,
          height: 36,
          borderRadius: "50%",
          margin: "0 4px",
          fontWeight: i === currentPage ? "bold" : "normal",
          backgroundColor: i === currentPage ? "#000" : "transparent",
          color: i === currentPage ? "#fff" : "#000",
          "&:hover": {
            backgroundColor: "#4c3986",
            color: "#000",
          },
        }}
      >
        {i}
      </Button>
    );
  }

  return (
    <Box display="flex" justifyContent="center" mt={2}>
      {currentPage > 1 && (
        <Button
          onClick={() => onPageChange(currentPage - 1)}
          sx={{
            minWidth: 36,
            height: 36,
            borderRadius: "50%",
            margin: "0 4px",
            backgroundColor: "#f0f0f0",
            color: "#000",
            "&:hover": {
              backgroundColor: "#4c3986",
              color: "#000",
            },
          }}
        >
          {"<"}
        </Button>
      )}
      {pageButtons}
      {currentPage < totalPages && (
        <Button
          onClick={() => onPageChange(currentPage + 1)}
          sx={{
            minWidth: 36,
            height: 36,
            borderRadius: "50%",
            margin: "0 4px",
            backgroundColor: "#f0f0f0",
            color: "#000",
            "&:hover": {
              backgroundColor: "#4c3986",
              color: "#000",
            },
          }}
        >
          {">"}
        </Button>
      )}
    </Box>
  );
};

export default Pagination;
