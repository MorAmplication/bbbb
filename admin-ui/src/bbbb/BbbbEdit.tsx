import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const BbbbEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="dwwffw" source="dwwffw" />
      </SimpleForm>
    </Edit>
  );
};
