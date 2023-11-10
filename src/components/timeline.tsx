import {
  collection,
  /*  getDocs, */
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { db } from "../firebase";
import Tweet from "./tweet";
import { Unsubscribe } from "firebase/auth";

export interface ITweet {
  id: string;
  photo?: string;
  xweet: string;
  userId: string;
  username: string;
  createdAt: number;
}

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export default function Timeline() {
  const [xweets, setXweet] = useState<ITweet[]>([]);

  useEffect(() => {
    let unsubscribe: Unsubscribe | null = null;
    const fetchTweets = async () => {
      const tweetsQuery = query(
        collection(db, "xweets"),
        orderBy("createdAt", "desc"),
        limit(25)
      );
      /* const spanshot = await getDocs(tweetsQuery);
        const tweets = spanshot.docs.map((doc) => {
          const { tweet, createdAt, userId, username, photo } = doc.data();
          return {
            tweet,
            createdAt,
            userId,
            username,
            photo,
            id: doc.id,
          };
        }); */
      unsubscribe = await onSnapshot(tweetsQuery, (snapshot) => {
        const xweets = snapshot.docs.map((doc) => {
          const { xweet, createdAt, userId, username, photo } = doc.data();
          return {
            xweet,
            createdAt,
            userId,
            username,
            photo,
            id: doc.id,
          };
        });
        setXweet(xweets);
      });
    };
    fetchTweets();
    return () => {
      unsubscribe && unsubscribe();
    };
  }, []);
  return (
    <Wrapper>
      {xweets.map((xweet) => (
        <Tweet key={xweet.id} {...xweet} />
      ))}
    </Wrapper>
  );
}
