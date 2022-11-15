import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const NewblablaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="hhhh" source="hhhh" />
        <TextInput label="cccc" source="cccc" />
      </SimpleForm>
    </Edit>
  );
};
