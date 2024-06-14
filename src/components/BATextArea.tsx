import { TextField } from "@mui/material";

export default function BATextArea(props: any) {
  const { label, onChange, rows, value } = props;
  return (
    <>
      <TextField
        value={value}
        color="error"
        variant="outlined"
        fullWidth={true}
        label={label}
        onChange={onChange}
        multiline={true}
        rows={rows ?? 4}
      />
    </>
  );
}