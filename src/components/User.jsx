import { Avatar, Box, Container, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import UserSkeletonLoader from "./SkeletonLoader";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://602e7c2c4410730017c50b9d.mockapi.io/users")
      .then((response) => {
        setUsers(response.data);
        setFilteredUsers(response.data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const handleSearch = (query) => {
    const filteredResults = users.filter((user) =>
      user.profile.username.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUsers(filteredResults);
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container maxWidth="sm">
      <h2 style={{ textAlign: "center" }}>User List</h2>
      <SearchBar onSearch={handleSearch} />
      {loading
        ? Array.from({ length: itemsPerPage }).map((_, index) => (
            <UserSkeletonLoader key={index} />
          ))
        : currentItems.map((user) => (
            <Link
              to={`/user/${user.id}`}
              key={user.id}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Box
                key={user.id}
                display="flex"
                alignItems="center"
                p={2}
                m={1}
                border={2}
                borderRadius={2}
                borderColor="grey.300"
                style={{ border: "3px solid black" }}
              >
                <Avatar
                  src={user.avatar}
                  alt={user.name}
                  sx={{ width: 56, height: 56, marginRight: 2 }}
                />
                <Box>
                  <Typography variant="h6">{user.profile.username}</Typography>
                  <Typography variant="subtitle1">{user.jobTitle}</Typography>
                  <Typography variant="subtitle2">{user.Bio}</Typography>
                </Box>
              </Box>
            </Link>
          ))}
      {/* Pagination component */}
      {!loading && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={paginate}
        />
      )}
    </Container>
  );
};

export default UserList;
