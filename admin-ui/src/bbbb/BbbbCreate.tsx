import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const BbbbCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="dwwffw" source="dwwffw" />
      </SimpleForm>
    </Create>
  );
};
