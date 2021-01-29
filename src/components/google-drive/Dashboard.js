import React from "react";
import { Container } from "react-bootstrap";
import AddFolderButton from "./AddFolderButton";
import Navbar from "./Navbar";
import { useFolder } from "../../hooks/useFolder";

export default function Dashboard() {
  const { folder } = useFolder();

  return (
    <>
      <Navbar />
      <Container fluid>
        <AddFolderButton currentFolder={folder} />
      </Container>
    </>
  );
}
