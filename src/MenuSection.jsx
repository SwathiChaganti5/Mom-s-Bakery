import React from "react";
import {ArrowRight} from "lucide-react";
import "./MenuSection.css";

const categories=[
  {name:"Cool Cakes",count:19,image:"/images/menu-cool-cakes.jpg"},
  {name:"Eggless Cakes (1 kg)",count:8,image:"/images/menu-eggless-1kg.jpg"},
  {name:"Eggless Cakes (500 g)",count:5,image:"/images/menu-eggless-500g.jpg"},
  {name:"Pastries",count:9,image:"/images/menu-pastries.jpg"},
  {name:"Breads",count:7,image:"/images/menu-breads.jpg"},
  {name:"Donuts",count:1,image:"/images/menu-donuts.jpg"},
  {name:"Cookies",count:6,image:"/images/menu-cookies.jpg"},
  {name:"Desserts",count:7,image:"/images/menu-desserts.jpg"},
  {name:"Dry Cakes",count:2,image:"/images/menu-dry-cakes.jpg"}
];

export default function MenuSection({orderUrl}){
  return <>
    <section className="quote"><div className="quoteimg"><img src="/images/cupcakes.jpg" alt="Cupcakes with frosting" loading="lazy"/></div><div className="quotetext reveal"><span className="quote-mark">“</span><p>Life is short.<br/><em>Make it sweet.</em></p><i/><small>THE MOM'S BAKERY WAY</small><span className="flower">✿</span></div></section>
    <section className="section zomato-menu" id="menu">
      <div className="menu-panel">
        <div className="menu-panel-head">
          <div><small>BAKED FRESH, MADE WITH LOVE</small><h2>Mom’s Bakery Menu</h2></div>
          <span>9 categories</span>
        </div>
        <ul className="menu-category-list">
          {categories.map(category=><li className="menu-category-row" key={category.name}>
            <img src={category.image} alt="" loading="lazy"/>
            <span className="menu-category-name"><b>{category.name}</b><small>{category.count} {category.count===1?"item":"items"}</small></span>
            <ArrowRight size={17} aria-hidden="true"/>
          </li>)}
        </ul>
        <a className="menu-zomato-button" href={orderUrl} target="_blank" rel="noreferrer">View menu on Zomato <ArrowRight size={17}/></a>
      </div>
    </section>
  </>;
}