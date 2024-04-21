import React, { useEffect, useState } from "react";
import Axios from "axios";
import styled from "styled-components";

const Admin_Dashboard = () => {
  const [userDBData, setUserDBData] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8081/api/Admin_dashboard")
      .then((result) => {
        setUserDBData(result.data);
        // console.log(result.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <Title>Admin Dashboard</Title>
      <SubTitle>Users Logged In to the Website So Far...</SubTitle>
      <p>Total users: {userDBData.length}</p>
      <UserList>
        {userDBData.map((user, index) => (
          <UserCard key={index}>
            <p>ID: {user.id}</p>
            <p>UserName: {user.user_name}</p>
            <p>UserEmail: {user.user_email}</p>
          </UserCard>
        ))}
      </UserList>
    </Container>
  );
};

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const SubTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const UserList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
`;

const UserCard = styled.div`
  background-color: #e6ebf1;
  padding: 20px;
  border-radius: 8px;
`;

export default Admin_Dashboard;
