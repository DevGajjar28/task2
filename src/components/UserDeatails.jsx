// UserDetails.js
import { Avatar, Box, Container, Grid, Paper, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import RelatedUserSkeletonLoader from "./RelatedUserSkeletonLoader";
import UserDetailsSkeletonLoader from "./UserDetailsSkeletonLoader"; // Import the skeleton loader

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [relatedUsers, setRelatedUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedJobTitle, setSelectedJobTitle] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [user]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `https://602e7c2c4410730017c50b9d.mockapi.io/users/${id}`
        );
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  useEffect(() => {
    const fetchRelatedUsers = async () => {
      try {
        const response = await axios.get(
          `https://602e7c2c4410730017c50b9d.mockapi.io/users`
        );
        const allUsers = response.data;
        const filteredUsers = allUsers.filter((u) => u.id !== id);
        const currentUser = allUsers.find((u) => u.id === id);

        const updatedRelatedUsers = [
          currentUser,
          ...filteredUsers.slice(0, 15),
        ];

        setRelatedUsers(updatedRelatedUsers);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching related users:", error);
        setLoading(false);
      }
    };

    fetchRelatedUsers();
  }, [id]);

  if (loading) {
    return (
      <Container maxWidth="sm">
        <UserDetailsSkeletonLoader />
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          {Array.from({ length: 4 }).map((_, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <RelatedUserSkeletonLoader />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }

  if (!user) {
    return (
      <Container maxWidth="sm">
        <Typography variant="h6" align="center" style={{ marginTop: 50 }}>
          User not found
        </Typography>
      </Container>
    );
  }

  const handleJobTitleClick = (jobTitle) => {
    setSelectedJobTitle(jobTitle);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 3, marginTop: 5 }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar
            src={user.avatar || "https://via.placeholder.com/480x360"}
            alt={user.profile.username || "unknown user"}
            sx={{ width: 100, height: 100, marginBottom: 2 }}
          />
          <Typography variant="h4" gutterBottom>
            {user.profile.firstName} {user.profile.lastName}
          </Typography>
          <Typography
            variant="h6"
            color="textSecondary"
            gutterBottom
            sx={{ background: "gray", borderRadius: "8px", color: "white" }}
          >
            {user.jobTitle}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Email: {user.profile.email || "unknown"}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Bio: {user.Bio || "unknown"}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Created At: {new Date(user.createdAt).toLocaleDateString()}
          </Typography>
        </Box>
      </Paper>

      {/* Section for related users */}
      <Typography variant="h5" align="center" style={{ marginTop: 30 }}>
        Related Users
      </Typography>
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        {relatedUsers.map((relatedUser) => (
          <Grid item xs={12} sm={6} key={relatedUser.id}>
            <Link
              to={`/user/${relatedUser.id}`}
              style={{ textDecoration: "none" }}
            >
              <Paper
                elevation={1}
                sx={{
                  padding: 2,
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Avatar
                  src={
                    relatedUser.avatar || "https://via.placeholder.com/480x360"
                  }
                  alt={relatedUser.profile.username || "unknown user"}
                  sx={{ width: 56, height: 56, marginBottom: 1 }}
                />
                <Typography variant="h6">
                  {relatedUser.profile.username}
                </Typography>
                <Typography variant="subtitle1">
                  {relatedUser.jobTitle}
                </Typography>
              </Paper>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default UserDetails;
