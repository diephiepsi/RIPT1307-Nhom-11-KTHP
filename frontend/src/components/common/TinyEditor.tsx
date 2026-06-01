import { Editor } from '@tinymce/tinymce-react';

export function TinyEditor({
  value,
  onChange,
}: {
  value: string;
  onChange: (next: string) => void;
}) {
  return (
    <Editor
      value={value}
      onEditorChange={(next) => onChange(next)}
      init={{
        height: 320,
        menubar: false,
        plugins: ['lists', 'link', 'code', 'table'],
        toolbar: 'undo redo | bold italic | bullist numlist | link table | code',
      }}
    />
  );
}

