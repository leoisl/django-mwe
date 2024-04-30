"use client";

import { Center, Description, Main } from "@/app/style";
import { useEffect, useState } from "react";
import { fetchAllMessages, fetchMessage } from "../lib/actions";
import { Message } from "../lib/types";
import { Button, CellBasic, CellHeader, Dialog, DialogActions, DialogContent, DialogTitle, InputText, Table, TableHeader, TableRow } from "@czi-sds/components";

export default function Page() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isAddMessageOpen, setAddMessageOpen] = useState(false);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    fetchAllMessages().then((messages) => setMessages(messages)).catch(error => console.error(error));
  }, []);

  function handleClick() {
    setAddMessageOpen(true);
  }

  function handleCloseAddMessage() {
    setAddMessageOpen(false);
  }

  function handleAddMessageCancel() {
    setNewMessage("");
    setAddMessageOpen(false);
  }

  return (
    <Main>
      <Description>
        <h1>Experiment Manager</h1>
      </Description>

      <br />

      <div>
        <Button sdsStyle="square" sdsType="primary" onClick={handleClick}>
          Add New Experiment
        </Button>
      </div>

      <br />

      <Center>
        <Table>
          <TableHeader>
            <CellHeader>
              Message ID
            </CellHeader>
            <CellHeader hideSortIcon>Message</CellHeader>
          </TableHeader>

          <tbody>
            {messages.map((message) => (
              <TableRow key={message.id}>
                <CellBasic
                  primaryText={message.id.toString()}
                  secondaryText="Caption"
                />
                <CellBasic
                  primaryText={message.message}
                />
              </TableRow>
            ))}
          </tbody>
        </Table>
      </Center>

      <Dialog onClose={handleCloseAddMessage} open={isAddMessageOpen} sdsSize="s">
        <form method="post">
          <DialogTitle
            title="Add A New Message"
            subtitle="Add a new message to the database."
            onClose={handleCloseAddMessage}
            data-testid="dialog-title"
          />
          <DialogContent>
            <InputText
              id="add-new-message-input"
              sdsType="textField"
              sdsStage="default"
              label="Write your message here:"
              placeholder="Enter your message here"
              name="new-message"
              autoComplete="off"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
          </DialogContent>
          <DialogActions
            data-testid="dialog-actions"
          >
            <Button sdsStyle="square" sdsType="primary" type="submit">
              Add Message
            </Button>
            <Button sdsStyle="square" sdsType="secondary" onClick={handleAddMessageCancel}>
              Cancel
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Main>
  );
}
