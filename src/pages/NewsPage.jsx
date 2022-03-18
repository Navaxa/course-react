import { useCallback, useContext, useEffect, useState } from 'react';
import { Col, Container, Row, Card, Alert, Button } from 'react-bootstrap';
import { NewsServiceContext } from '../services';

export const NewsPage = () => {
  const [articles, setArticle] = useState([]);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const newsService = useContext(NewsServiceContext);

  const getNews = useCallback(async (q) => {
    try {
      const news = await newsService.getNews(q);
      if (news.articles.length < 1) {
        setArticle([]);
        setError('No records');
      } else {
        setError('');
        setArticle(news.articles);
      }
    } catch {
      setArticle([])
      setError('Something went wrong :(');
    }
  }, [newsService]);

  const queryHandler = useCallback((e) => {
    setQuery(e.target.value)
  }, []);

  const search = useCallback(() => {
    getNews(query);
  }, [getNews, query]);

  useEffect(() => {
    getNews('');
  }, [getNews]);

  /**
   * Observable -> Lo que se observa(Viaje de uber, el chat de su Whataapp)
   * Observer -> El que esta observando(Mi smartphone)
   * 
   * Subscription  -> Desperdicio de memoria si non nos dessubscribimos
   */
  useEffect(() => {
    return () => {
      // Aqui las aciones cuando el compoenent se desmonta.
      console.log('Unmounting');
    }
  }, []);

  return (
    <Container>
      {error && (
        <Alert variant="danger" onClose={() => {}} dismissible>
          <p>{error}</p>
        </Alert>
      )}
      <div>
        <input type="text" value={query} onChange={queryHandler} />
        <Button variant="primary" onClick={search}>Search</Button>
      </div>
      <Row>
        {articles.map((item, index) => (
          <Col key={`item-${index}`}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.urlToImage}/>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <a href={item.url}>show details</a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}