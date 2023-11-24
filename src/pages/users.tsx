import { Box } from "@chakra-ui/react";
import axios from "axios";
import React from "react";

export const getServerSideProps = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API}/users`);
    return {
      props: {
        data: res.data.data,
      },
    };
  } catch (error) {}
};

const Users = ({ data }: { data: any }) => {
  return (
    <Box minHeight={"100vh"} padding={10}>
      Users
      <table>
        <thead>
          <tr>
            <th>
              <div className="table-header">Id</div>
            </th>
            <th>
              <div className="table-header">Nama</div>
            </th>
            <th>
              <div className="table-header">Email</div>
            </th>
            <th>
              <div className="table-header">Country Name</div>
            </th>
            <th>
              <div className="table-header">Device Id</div>
            </th>
            <th>
              <div className="table-header">Bitcoin Address</div>
            </th>
            <th>
              <div className="table-header">Avatar</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data.map((row: any, i: number) => (
              <tr>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>{row.country_name}</td>
                <td>{row.device_id}</td>
                <td>{row.bitcoin_address}</td>
                <td>{row.avatar}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </Box>
  );
};

export default Users;
