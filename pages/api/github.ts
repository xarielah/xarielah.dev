import type { NextApiRequest, NextApiResponse } from 'next';
import { MethodNotAllowed } from '../../api-exceptions/api-exceptions';
import { ApiSuccessCodes } from '../../api-exceptions/types/api-success-codes.type';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const ghdata = await fetch('https://api.github.com/users/xarielah/repos?sort=updated');
    const data = await ghdata.json();

    if (data.length > 9) {
      res.status(ApiSuccessCodes.SUCCESS).json(data.slice(0, 9));
    } else {
      res.status(ApiSuccessCodes.SUCCESS).json(data);
    }
  } else {
    throw new MethodNotAllowed(res);
  }
}
