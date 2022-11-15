import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const NewblablaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="hhhh" source="hhhh" />
        <TextInput label="cccc" source="cccc" />
      </SimpleForm>
    </Create>
  );
};
