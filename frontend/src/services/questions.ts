import { api } from './api';
import type { QuestionDetail, QuestionListItem, Tag } from '../models/qa';

export const questionsService = {
  async list(params: { q?: string; tag?: string } = {}) {
    const { data } = await api.get<QuestionListItem[]>('/questions', { params });
    return data;
  },
  async get(id: string) {
    const { data } = await api.get<QuestionDetail>(`/questions/${id}`);
    return data;
  },
  async create(payload: { title: string; content: string; tags: string[] }) {
    const { data } = await api.post<QuestionDetail>('/questions', payload);
    return data;
  },
  async addComment(questionId: string, payload: { content: string }) {
    const { data } = await api.post(`/questions/${questionId}/comments`, payload);
    return data;
  },
  async voteQuestion(questionId: string, value: -1 | 0 | 1) {
    const { data } = await api.post(`/questions/${questionId}/vote`, { value });
    return data;
  },
  async voteComment(commentId: string, value: -1 | 0 | 1) {
    const { data } = await api.post(`/comments/${commentId}/vote`, { value });
    return data;
  },
  async tags() {
    const { data } = await api.get<Tag[]>('/tags');
    return data;
  },
};

