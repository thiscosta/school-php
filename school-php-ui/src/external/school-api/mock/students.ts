import MockAdapter from "axios-mock-adapter";

export const mockListStudents = (mock: MockAdapter): void => {
  mock.onGet("/students").reply(200, [
    {
      id: 1,
      name: "Aluno",
      email: "aluno@email.com",
      course: "Sistemas de informação",
      semester: "7º",
      responsible: "Responsável",
    },
  ]);
};

export const mockCreateStudents = (mock: MockAdapter): void => {
  mock.onPost("/students").reply(200, {
    id: 2,
    name: "Aluno2",
    email: "aluno2@email.com",
    course: "Sistemas de informação 2",
    semester: "7º 2",
    responsible: "Responsável 2",
  });
};

export const mockUpdateStudents = (mock: MockAdapter): void => {
  mock.onPut("/students").reply(200, {
    id: 2,
    name: "Aluno2",
    email: "aluno2@email.com",
    course: "Sistemas de informação 2",
    semester: "7º 2",
    responsible: "Responsável 2",
  });
};

export const mockDeleteStudents = (mock: MockAdapter): void => {
  mock.onDelete("/students/2").reply(204);
  mock.onDelete("/students/1").reply(204);
};
