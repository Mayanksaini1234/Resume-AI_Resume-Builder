import { useEffect, useState } from "react";
import Editor, {
  BtnBold,
  BtnBulletList,
  BtnItalic,
  BtnLink,
  BtnNumberedList,
  BtnRedo,
  BtnUnderline,
  BtnUndo,
  Separator,
  Toolbar,
} from "react-simple-wysiwyg";

export default function CustomEditor({ RichTextEditorChanges, defaultValue }) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  function onChange(e) {
    setValue(e.target.value);
    RichTextEditorChanges(e);
  }

  return (
    <Editor value={value} onChange={onChange} >
      <Toolbar>
        <BtnUndo />
        <BtnRedo />
        <Separator />
        <BtnBold />
        <BtnItalic />
        <BtnUnderline />
        <Separator />
        <BtnNumberedList />
        <BtnBulletList />
        <Separator />
        <BtnLink />
      </Toolbar>
    </Editor>
  );
}
