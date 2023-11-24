import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import { Box } from "@chakra-ui/react";
import axios from "axios";

export const getServerSideProps = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API}/`);
    console.log(res.data.data.length);
    return {
      props: { data: res.data.data },
    };
  } catch (error) {}
};

export default function Home({ data }: { data: any }) {
  return (
    <Box minHeight={"100vh"}>
      Dashboard
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
              <div className="table-header">sales_id</div>
            </th>
            <th>
              <div className="table-header">item_id</div>
            </th>
            <th>
              <div className="table-header">qty</div>
            </th>
            <th>
              <div className="table-header">Consumen Name</div>
            </th>
            <th>
              <div className="table-header">Transaction Date</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data.map((row: any, i: number) => (
              <tr>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.sales_id}</td>
                <td>{row.item_id}</td>
                <td>{row.qty}</td>
                <td>{row.consumen_name}</td>
                <td>{row.transaction_date}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </Box>
  );
}
