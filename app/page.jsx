"use client";
import Block from "@/components/BlockContainer/Block/Block";
import BlockContainer from "@/components/BlockContainer/BlockContainer";
import { useSelector } from "react-redux";

export default function Home() {
  const currentVideos = useSelector((state) => state.videoResult.currentVideos);

  return (
    <main>
      <BlockContainer>
        {currentVideos?.map((block, index) => (
          <Block {...block} key={index} />
        ))}
      </BlockContainer>
    </main>
  );
}
