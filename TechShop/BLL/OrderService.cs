﻿using AutoMapper;
using BEL;
using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class OrderService
    {
        public static List<OrderModel> GetAll()
        {
            var config = new MapperConfiguration(cfg => cfg.CreateMap<Order, OrderModel>());
            var mapper = new Mapper(config);
            var data = mapper.Map<List<OrderModel>>(DataAccessFactory.OrderDataAccess().GetAll());
            return data;
        }

        public static OrderModel Get(int id)
        {
            var config = new MapperConfiguration(cfg => cfg.CreateMap<Order, OrderModel>());
            var mapper = new Mapper(config);
            var data = mapper.Map<OrderModel>(DataAccessFactory.OrderDataAccess().Get(id));
            return data;
        }


        public static List<OrderModel> Gets(int id)
        {
            var config = new MapperConfiguration(cfg => cfg.CreateMap<Order, OrderModel>());
            var mapper = new Mapper(config);
            var data = mapper.Map<List<OrderModel>>(DataAccessFactory.OrderDataAccess().Gets(id));
            return data;
        }

        /*   

         

        public static List<ProductModel> Gets(string name)
        {
            var config = new MapperConfiguration(cfg => cfg.CreateMap<Product, ProductModel>());
            var mapper = new Mapper(config);
            return mapper.Map<List<ProductModel>>(DataAccessFactory.ProductDataAccess().GetAll().Select(emp => emp.PName = name).ToList());
        }


         */




        public static void Delete(int id)
        {
            DataAccessFactory.OrderDataAccess().Delete(id);
        }

        public static void Add(OrderModel e)
        {
            var data = new Mapper(new MapperConfiguration(cfg => cfg.CreateMap<OrderModel, Order>())).Map<Order>(e);
            DataAccessFactory.OrderDataAccess().Add(data);
        }
        public static void Edit(OrderModel e)
        {
            var data = new Mapper(new MapperConfiguration(cfg => cfg.CreateMap<OrderModel, Order>())).Map<Order>(e);
            DataAccessFactory.OrderDataAccess().Edit(data);
        }


        public static List<OrderModel> Getsby(string status)
        {
            var config = new MapperConfiguration(cfg => cfg.CreateMap<Order, OrderModel>());
            var mapper = new Mapper(config);
            var data = mapper.Map<List<OrderModel>>(DataAccessFactory.OrderSearchByStatus().Gets(status));
            return data;
        }
        public static List<OrderModel> Getorder(int id)
        {
            var config = new MapperConfiguration(cfg => cfg.CreateMap<Order, OrderModel>());
            var mapper = new Mapper(config);
            var data = mapper.Map<List<OrderModel>>(DataAccessFactory.OrderDataAccess().Getorder(id));
            return data;
        }
        public static List<OrderdetailsModel> orderdetails()
        {
            var config = new MapperConfiguration(cfg => cfg.CreateMap<OrderDetail, OrderdetailsModel>());
            var mapper = new Mapper(config);
            var data = mapper.Map<List<OrderdetailsModel>>(DataAccessFactory.orderdetails(7));
            return data;
        }

    }
}
