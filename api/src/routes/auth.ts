import { Request, Response } from '@scloud/lambda-api/dist/types';

export async function auth(request: Request): Promise<Response> {
  console.log('auth', request.query);

  const code = request.query.code;

  // Response
  return {
    statusCode: 200,
    body: { code },
  };
}
