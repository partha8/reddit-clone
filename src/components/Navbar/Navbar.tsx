import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import SearchInput from "./SearchInput";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <Flex bg="white" height="44px" padding="6px 12px">
      <Flex align="center">
        <Image alt="reddit" src="/images/redditFace.svg" height="30" />
        <Image
          alt="reddit-text"
          src="/images/redditText.svg"
          height="46"
          display={{ base: "none", md: "unset" }}
        />
      </Flex>
      {/* <Directory /> */}
      <SearchInput />
      {/* <RightContent /> */}
    </Flex>
  );
};

export default Navbar;
