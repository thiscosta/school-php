import MockAdapter from 'axios-mock-adapter';

export const mockLoginMethods = (mock: MockAdapter): void => {
    mock.onPost('/login').reply(200, {
        token: '8899e317-633c-4697-a587-daf2b4e8b938'
    })
}