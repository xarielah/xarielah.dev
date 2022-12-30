import { createHandler, Get, InternalServerErrorException } from 'next-api-decorators';

class GitHubRepoHandler {
  @Get()
  async getGithubDetails() {
    try {
      const ghdata = await fetch('https://api.github.com/users/xarielah/repos?sort=updated');
      const data = await ghdata.json();

      if (data.length > 9) {
        return data.slice(0, 9);
      } else {
        return data;
      }
    } catch (error: any) {
      throw new InternalServerErrorException();
    }
  }
}

export default createHandler(GitHubRepoHandler);
