import { TodoService } from './todo.service';
import { mock } from 'jest-mock-extended';
import { initialData, INITIAL_PARTIAL_DATA } from '../todo.validation';
import { Todo } from '../todo.types';
const createdAt = new Date().toISOString();

// set updatedAt to 2 minutes after createdAt
const updatedAt = new Date(
  new Date(createdAt).getTime() + 2 * 60000
).toISOString();
const ID = '5';

const NEW_TODO: Todo = {
  id: ID,
  title: 'mock new title',
  description: 'mock new description',
  createdAt,
  updatedAt: null,
};
const UPDATED_TODO: Todo = {
  id: ID,
  title: 'mock updated title',
  description: 'mock updated description',
  createdAt,
  updatedAt,
};
const mockTodoMongoService = mock<TodoService>();

// Set up the mock to return fake data
mockTodoMongoService.add.mockResolvedValue({
  data: NEW_TODO,
  error: null,
});

mockTodoMongoService.get.mockResolvedValue({
  data: NEW_TODO,
  error: null,
});
mockTodoMongoService.getAll.mockResolvedValue({
  data: initialData,
  error: null,
});

mockTodoMongoService.update.mockResolvedValue({
  data: UPDATED_TODO,
  error: null,
});

mockTodoMongoService.delete.mockResolvedValue({
  data: null,
  error: null,
});
mockTodoMongoService.deleteAll.mockResolvedValue({
  data: null,
  error: null,
});
mockTodoMongoService.seed.mockResolvedValue({
  data: INITIAL_PARTIAL_DATA,
  error: null,
});

export {
  mockTodoMongoService,
  NEW_TODO,
  UPDATED_TODO,
  ID,
  createdAt,
  updatedAt,
  INITIAL_PARTIAL_DATA,
};
