import React from 'react';
import {NewsService} from './NewsService'

const newsService = new NewsService();

export const NewsServiceContext = React.createContext(newsService);