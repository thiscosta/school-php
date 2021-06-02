import { mockLoginMethods } from "@schoolApi/mock/login";
import { mockListStudents, mockCreateStudents, mockUpdateStudents, mockDeleteStudents } from "@schoolApi/mock/students";

const mocks = [
    mockLoginMethods,
    mockListStudents,
    mockCreateStudents,
    mockUpdateStudents,
    mockDeleteStudents
]

export default mocks;