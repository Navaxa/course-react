import axios from "axios";

export class NewsService {
  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://newsapi.org/v2',
      timeout: 5000,
      headers: {'X-Api-Key': 'e5cead4086ba452a97f26bb423247cef'}
    });
  }

  /**
   * este metodo retorna una promesa
   */
  async getNews(query = "") {
    const response = await this.httpClient.get('/everything', {
      params: {
        q: query,
        //from: '2022-02-10',
        sortBy: 'publishedAt'
      }
    });
    
    return response.data;
  }
}