import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import { Box } from "@chakra-ui/react";
import axios from "axios";



export const getServerSideProps = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API}/users`);
    console.log(res.data);
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
            <div>
              <td></td>
            </div>
          </tr>
        </thead>
      </table>
    </Box>
  );
}
