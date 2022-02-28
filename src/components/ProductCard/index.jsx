import React from "react";
import "./ProductCard.css";
import { Card, Avatar, Skeleton } from "antd";
const { Meta } = Card;
const ProductCard = ({ isLoading = false, data = {} }) => {
  return (
    <Card className="ProductCard">
      {isLoading ? (
        <Skeleton active title="ahiahi" />
      ) : (
        <a href="#">
          <img
            src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4192f4fc-53bd-4af5-ba1a-82039c40e6f0/air-force-1-07-shoes-3sH0W2.png"
            alt="#"
          />
          <div className="ProductCard__info">
            <div className="info__name">{data?.name}</div>
            <div className="info__colorsAvailable ">{data?.sizes}</div>
            <div className="info__category">Men'Shoes</div>
            <div className="info__price">500 $</div>
          </div>
        </a>
      )}
    </Card>
  );
};

export default ProductCard;
