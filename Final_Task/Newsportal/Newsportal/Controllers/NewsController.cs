
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AutoMapper;
using BLL;
using BEL;
using BBL;

namespace Newsportal.Controllers
{
    public class NewsController : ApiController
    {

        [HttpPost]
        [Route("Api/News")]
        public IHttpActionResult CreateNews(NewsModel news)
        {
            if (ModelState.IsValid)
            {
                NewsService.AddNews(news);
                return Ok("Inserted ");
            }
        }
        [HttpDelete]
        [Route("Api/News/{id}")]
        public IHttpActionResult DeleteNews(int id)
        {
            var status = NewsService.DeleteNewsById(id);
            if (status)
            {
                return Ok("Removed");
            }
        }
        [HttpPut]
        [Route("Api/News/{id}")]
        public IHttpActionResult UpdateNews(int id, NewsModel news)
        {
            if (ModelState.IsValid)
            {
                var status = NewsService.EditNews(id, news);
                if (status)
                {
                    return Ok("Updated");
                }
            }
        }
        [HttpGet]
        [Route("Api/News")]
        public IHttpActionResult GetNews()
        {
            var _newss = NewsService.GetAllNews();
            if (_newss.Count() == 0)
            {
                return NotFound();
            }
        }
        [HttpGet]
        [Route("Api/News/{id}")]
        public IHttpActionResult GetNews(int id)
        {
            var _news = NewsService.GetNewsById(id);
            if (_news == null)
            {
                return NotFound();
            }
        }
        [HttpGet]
        [Route("Api/News/Category/{cat}")]
        public IHttpActionResult GetNewsByCategory(string cat)
        {
            var _news = NewsService.GetAllNewsByCategory(cat);
            if (_news.Count() == 0)
            {
                return NotFound();
            }
        }
        [HttpGet]
        [Route("Api/News/Date/{date}")]
        public IHttpActionResult GetNewsByDate(DateTime date)
        {
            var _news = NewsService.GetAllNewsByDate(date);
            if (_news == null)
            {
                return NotFound();
            }
        }
        [HttpGet]
        [Route("Api/News/Category/{cat}/Date/{date}")]
        public IHttpActionResult GetNewsByCategoryDate(string cat, DateTime date)
        {
            var _news = NewsService.GetAllNewsByCategoryByDate(cat, date);
            if (_news == null)
            {
                return NotFound();
            }
        }
    
    }
}
