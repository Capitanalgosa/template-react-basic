import React from "react";
import Image from "react-bootstrap/Image";
import config from "./../config";

const Icons = {}

Icons.Npm = function(props) {
  const title = props.title ? props.title : "NPM";
  const src = props.src ? props.src : config.icons.npm;
  const width = props.width;
  const height = props.height;
  const margin = props.margin;
  const padding = props.padding;
  return (
    < Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  );
}
Icons.Logo = function(props) {
  const title = props.title;
  const src = props.src ? props.src : config.icons.logo;
  const width = props.width;
  const height = props.height;
  const margin = props.margin;
  const padding = props.padding;
  return (
    < Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  );
}
Icons.Github = function(props) {
  const title = props.title ? props.title : "Github";
  const src = props.src ? props.src : config.icons.github;
  const width = props.width;
  const height = props.height;
  const margin = props.margin;
  const padding = props.padding;
  return (
    < Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  );
}
Icons.Book = function(props) {
  const title = props.title ? props.title : "Docs";
  const src = props.src ? props.src : config.icons.book;
  const width = props.width;
  const height = props.height;
  const margin = props.margin;
  const padding = props.padding;
  return (
    < Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  );
}
Icons.Rating = function(props) {
  const rating = props.rating;
  const width = props.width;
  if (rating === 1) {
    return <Icons.Start width={width} />;
  }
  if (rating === 2) {
    return (
      <div>
        <Icons.Start width={width} />
        <Icons.Start width={width} />
      </div>
    )
  } 
  if (rating === 3) {
    return (
      <div>
        <Icons.Start width={width} />
        <Icons.Start width={width} />
        <Icons.Start width={width} />
      </div>
    )
  } 
  if (rating === 4) {
    return (
      <div>
        <Icons.Start width={width} />
        <Icons.Start width={width} />
        <Icons.Start width={width} />
        <Icons.Start width={width} />
      </div>
    )
  } 
  if (rating === 5) {
    return (
      <div>
        <Icons.Start width={width} />
        <Icons.Start width={width} />
        <Icons.Start width={width} />
        <Icons.Start width={width} />
        <Icons.Start width={width} />
      </div>
    )
  } 
  else {
    return null;
  }
}
Icons.Start = function(props) {
  const title = props.title;
  const src = props.src ? props.src : config.icons.star;
  const width = props.width;
  const height = props.height;
  const margin = props.margin;
  const padding = props.padding;
  return (
    < Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  );
}
Icons.Clipboard =  function(props) {
  const title = props.title ? props.title : "Copy to Clipboard";
  const src = props.src ? props.src : config.icons.clipboard;
  const width = props.width;
  const height = props.height;
  const margin = props.margin;
  const padding = props.padding;
  return (
    < Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  );
}
Icons.Youtube = function(props) {
  const title = props.title ? props.title : "Youtube";
  const src = props.src ? props.src : config.icons.youtubeu;
  const width = props.width;
  const height = props.height;
  const margin = props.margin;
  const padding = props.padding;
  return (
    < Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
    )
}
Icons.Web = function(props) {
  const title = props.title ? props.title : "Official Web";
  const src = props.src ? props.src : config.icons.web;
  const width = props.width;
  const height = props.height;
  const margin = props.margin;
  const padding = props.padding;
  return (
    < Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  )
}
Icons.Hamburger = function(props) {
  const title = props.title;
  const src = props.src ? props.src : config.icons.hamburger;
  const width = props.width;
  const height = props.height;
  const margin = props.margin;
  const padding = props.padding;
  return (
    <Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  )
}
Icons.FriedEgg = function(props) {
  const title = props.title;
  const src = props.src ? props.src : config.icons.friedEgg;
  const width = props.width;
  const height = props.height;
  const margin = props.margin;
  const padding = props.padding;
  return (
    <Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  )
}
Icons.Cheese = function(props) {
  const title = props.title;
  const src = props.src ? props.src : config.icons.cheese;
  const width = props.width;
  const height = props.height;
  const margin = props.margin;
  const padding = props.padding;
  return (
    <Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  )
}
Icons.Carrot = function(props) {
  const title = props.title;
  const src = props.src ? props.src : config.icons.carrot;
  const width = props.width;
  const height = props.height;
  const margin = props.margin;
  const padding = props.padding;
  return (
    <Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  )
}
Icons.Cake = function(props) {
  const title = props.title;
  const src = props.src ? props.src : config.icons.cake;
  const width = props.width;
  const height = props.height;
  const margin = props.margin;
  const padding = props.padding;
  return (
    <Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  )
}
Icons.Bread = function(props) {
  const title = props.title;
  const src = props.src ? props.src : config.icons.bread;
  const width = props.width;
  const height = props.height;
  const margin = props.margin;
  const padding = props.padding;
  return (
    <Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  )
}
Icons.Beer = function(props) {
  const title = props.title;
  const src = props.src ? props.src : config.icons.beer;
  const width = props.width;
  const height = props.height;
  const margin = props.margin;
  const padding = props.padding;
  return (
    <Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  )
}
Icons.Beer2 = function(props) {
  const title = props.title;
  const src = props.src ? props.src : config.icons.beer2;
  const width = props.width;
  const height = props.height;
  const margin = props.margin;
  const padding = props.padding;
  return (
    <Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  )
}
Icons.Beer3 = function(props) {
  const title = props.title;
  const src = props.src ? props.src : config.icons.beer3;
  const width = props.width;
  const height = props.height;
  const margin = props.margin;
  const padding = props.padding;
  return (
    <Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  )
}
Icons.Donut = function(props) {
  const title = props.title;
  const src = props.src ? props.src : config.icons.donut;
  const width = props.width;
  const height = props.height;
  const margin = props.margin;
  const padding = props.padding;
  return (
    <Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  )
}
Icons.Meat = function(props) {
  const title = props.title;
  const src = props.src ? props.src : config.icons.meat;
  const width = props.width;
  const height = props.height;
  const margin = props.margin;
  const padding = props.padding;
  return (
    <Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  )
}
Icons.LolliPop = function(props) {
  const title = props.title;
  const src = props.src ? props.src : config.icons.lolliPop;
  const width = props.width;
  const height = props.height;
  const margin = props.margin;
  const padding = props.padding;
  return (
    <Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  )
}
Icons.IceCream = function(props) {
  const title = props.title;
  const src = props.src ? props.src : config.icons.iceCream;
  const width = props.width;
  const height = props.height;
  const margin = props.margin;
  const padding = props.padding;
  return (
    <Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  )
}
Icons.HotDog = function(props) {
  const title = props.title;
  const src = props.src ? props.src : config.icons.hotDog;
  const width = props.width;
  const height = props.height;
  const margin = props.margin;
  const padding = props.padding;
  return (
    <Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  )
}
Icons.FrenchFries = function(props) {
  const title = props.title;
  const src = props.src ? props.src : config.icons.frenchFries;
  const width = props.width;
  const height = props.height;
  const margin = props.margin;
  const padding = props.padding;
  return (
    <Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  )
}
Icons.MilkShake = function(props) {
  const title = props.title;
  const src = props.src ? props.src : config.icons.milkShake;
  const width = props.width;
  const height = props.height;
  const margin = props.margin;
  const padding = props.padding;
  return (
    <Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  )
}
Icons.Picnic = function(props) {
  const title = props.title;
  const src = props.src ? props.src : config.icons.picnic;
  const width = props.width;
  const height = props.height;
  const margin = props.margin;
  const padding = props.padding;
  return (
    <Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  )
}
Icons.spahgetti = function(props) {
  const title = props.title;
  const src = props.src ? props.src : config.icons.spaggetti;
  const width = props.width;
  const height = props.height;
  const margin = props.margin;
  const padding = props.padding;
  return (
    <Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  )
}
Icons.Pizza = function(props) {
  const title = props.title;
  const src = props.src ? props.src : config.icons.pizza;
  const width = props.width;
  const height = props.height;
  const margin = props.margin;
  const padding = props.padding;
  return (
    <Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  )
}
Icons.Taco = function(props) {
  const title = props.title;
  const src = props.src ? props.src : config.icons.taco;
  const width = props.width;
  const height = props.height;
  const margin = props.margin;
  const padding = props.padding;
  return (
    <Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  )
}
Icons.CoffePot = function(props) {
  const title = props.title;
  const src = props.src ? props.src : config.icons.coffePot;
  const width = props.width;
  const height = props.height;
  const margin = props.margin;
  const padding = props.padding;
  return (
    <Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  )
}
Icons.Broccoli = function(props) {
  const title = props.title;
  const src = props.src ? props.src : config.icons.broccoli;
  const width = props.width;
  const height = props.height;
  const margin = props.margin;
  const padding = props.padding;
  return (
    <Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  )
}
Icons.Avocato = function(props) {
  const title = props.title;
  const src = props.src ? props.src : config.icons.avocato;
  const width = props.width;
  const height = props.height;
  const margin = props.margin;
  const padding = props.padding;
  return (
    <Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  )
}
Icons.ChineseFood = function(props) {
  const title = props.title;
  const src = props.src ? props.src : config.icons.chineseFood;
  const width = props.width;
  const height = props.height;
  const margin = props.margin;
  const padding = props.padding;
  return (
    <Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  )
}
export function Imagen(props) {
  const title = props.title;
  const src = props.src ? props.src : config.icons.noIcon;
  const width = props.width ? props.width : "50%";
  const height = props.height ? props.height : "20%";
  const padding = props.padding ? props.padding : "0";
  const margin = props.margin ? props.margin : "0";
  return (
    <Image
      title={title}
      src={src}
      style={{ width: width ,height: height,margin: margin,padding: padding}}
    />
  );
}

export default Icons;