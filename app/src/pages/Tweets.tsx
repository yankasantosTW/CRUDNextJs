import { NextPage } from "next";
import useSWR from "swr";
import http from "../../utils/http";

const fetcher = (url: string) => http.get(url).then((res) => res.data);
const Tweets: NextPage = () => {
   const {data: tweets} = useSWR('tweets', fetcher);
  return (
    <div>
      <h1>Tweets list</h1>
    </div>
  );
};
export default Tweets;
