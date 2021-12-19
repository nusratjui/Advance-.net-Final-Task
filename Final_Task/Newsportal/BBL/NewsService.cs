
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using BEL;
using DAL;

namespace BBL
{
   public class NewsService
    {
        public static IEnumerable<NewsModel> GetAllNews()
        {
            return DataAccessFactory.NewsDataAccess().Get().Select(Mapper.Map<News, NewsModel>);
        }
        public static IEnumerable<NewsModel> GetAllNewsByCategory(string cat)
        {
            return DataAccessFactory.NewsDataAccess().Get().Select(Mapper.Map<News, NewsModel>).Where(n => n.Category == cat);
        }
        public static IEnumerable<NewsModel> GetAllNewsByDate(DateTime date)
        {
            return DataAccessFactory.NewsDataAccess().Get().Select(Mapper.Map<News, NewsModel>).Where(n => n.CreatedAt == date);
        }
        public static IEnumerable<NewsModel> GetAllNewsByCategoryByDate(string cat, DateTime date)
        {
            return DataAccessFactory.NewsDataAccess().Get().Select(Mapper.Map<News, NewsModel>).Where(n => n.CreatedAt == date && n.Category == cat);
        }

        public static NewsModel GetNewsById(int id)
        {

            return Mapper.Map<News, NewsModel>(DataAccessFactory.NewsDataAccess().Get(id));

        }
        public static bool AddNews(NewsModel News)
        {
            return DataAccessFactory.NewsDataAccess().Add(Mapper.Map<NewsModel, News>(News));
        }
        public static bool DeleteNewsById(int id)
        {
            return DataAccessFactory.NewsDataAccess().Delete(id);
        }
        public static bool EditNews(int id, NewsModel News)
        {
            return DataAccessFactory.NewsDataAccess().Edit(id, Mapper.Map<NewsModel, News>(News));
        }
    }
}
