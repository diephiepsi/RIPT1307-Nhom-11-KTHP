import React, { useEffect, useState } from 'react';
import { App, Button, Form, Input, Select } from 'antd';
import { TinyEditor } from '../../components/common/TinyEditor';
import type { Tag } from '../../models/qa';
import { questionsService } from '../../services/questions';

export default function AskQuestionForm() {
  const { message } = App.useApp();
  const [tags, setTags] = useState<Tag[]>([]);

  useEffect(() => {
    questionsService.tags().then(setTags).catch(() => void 0);
  }, []);

  return (
    <Form
      layout="vertical"
      className="ub-form"
      initialValues={{ tags: [] as string[], content: '' }}
      requiredMark={false}
      onFinish={async (values) => {
        try {
          const created = await questionsService.create(values);
          message.success('Đã đăng, đang chờ phê duyệt');
          window.location.href = `/questions/${created.id}`;
        } catch (err) {
          console.error(err);
          message.error('Đăng bài thất bại');
        }
      }}
    >

      <div className="ub-form-card">
        <Form.Item
          name="title"
          label={<div className="ub-label">Tiêu đề</div>}
          rules={[{ required: true, message: 'Tiêu đề tối thiếu 10 ký tự', min: 10 }]}
        >
          <Input className="ub-input" size="large" placeholder="Bắt đầu bằng 'Làm thế nào để...' hoặc 'Tại sao...'" />
          <div className="ub-field-desc">Hãy cụ thể và mô tả rõ ràng để người đọc dễ hiểu.</div>
        </Form.Item>
      </div>

      <div className="ub-form-card">
        <Form.Item
          name="content"
          label={<div className="ub-label">Nội dung</div>}
          rules={[{ required: true, message: 'Vui lòng nhập nội dung' }]}
        >
          <div className="ub-editor">
            <TinyEditor />
          </div>
          <div className="ub-field-desc">Mô tả chi tiết, thêm mã, kết quả mong muốn. Tối thiểu 20 ký tự.</div>
        </Form.Item>
      </div>

      <div className="ub-form-card">
        <Form.Item name="tags" label={<div className="ub-label">Thẻ</div>} rules={[{ required: true, message: 'Vui lòng chọn ít nhất một thẻ' }]}> 
          <Select
            mode="multiple"
            size="large"
            placeholder="Ví dụ: javascript, react, css"
            options={tags.map((t) => ({ label: t.name, value: t.name }))}
            tagRender={({ label, value, closable, onClose }) => (
              <span className="ub-tag" onMouseDown={(e) => e.preventDefault()}>
                {label}
                {closable && (
                  <span className="close-btn" onClick={onClose} aria-hidden>
                    ×
                  </span>
                )}
              </span>
            )}
          />
          <div className="ub-field-desc">Thêm tối đa 5 thẻ để mô tả câu hỏi của bạn.</div>
        </Form.Item>
      </div>

      <div style={{ marginTop: 8, marginBottom: 40 }}>
        <Button htmlType="submit" type="primary" className="ub-submit" size="large">
          Đăng câu hỏi
        </Button>
      </div>
    </Form>
  );
}
