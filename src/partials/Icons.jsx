import React from "react";
import Image from "react-bootstrap/Image";
import config from "./../config";

const Icons = {}

Icons.Npm = function() {
  return (
    <Imagen 
        src={config.icons.npm}
        width="30px"
        rounded
    />
  )
}
Icons.Logo = function() {
  return (
    <Imagen 
        src={config.icons.logo}
        width="15%"
        title="Official Web"
        rounded
    />
  )
}
Icons.Github = function() {
  return (
    <Imagen 
    title="Github Repo" 
    src={config.icons.github}
    width="50%"
    rounded
    />
  );
}
Icons.Book = function() {
  return <Imagen 
  title="Docs" 
  src={config.icons.book}
  width="30px" 
  rounded
  />;
}
Icons.Rating = function(props) {
  const rating = props.rating;
  if (rating === 1) {
    return <Icons.Start />;
  }
  if (rating === 2) {
    return (
      <div>
        <Icons.Start />
        <Icons.Start />
      </div>
    )
  } 
  if (rating === 3) {
    return (
      <div>
        <Icons.Start />
        <Icons.Start />
        <Icons.Start />
      </div>
    )
  } 
  if (rating === 4) {
    return (
      <div>
        <Icons.Start />
        <Icons.Start />
        <Icons.Start />
        <Icons.Start />
      </div>
    )
  } 
  if (rating === 5) {
    return (
      <div>
        <Icons.Start />
        <Icons.Start />
        <Icons.Start />
        <Icons.Start />
        <Icons.Start />
      </div>
    )
  } 
  else {
    return null;
  }
}
Icons.Start = function() {
  return <Image
  title="Rating" 
  src={config.icons.star}
  width="15px" 
  rounded
  />;
}
Icons.Clipboard =  function() {
    return (
      <Imagen
        title="Copy to Clipboard"
        src={config.icons.clipboard}
        width="10%"
        rounded
      />
    );
}
Icons.Youtube = function() {
    return (
        <Imagen
            src={config.icons.youtube}
        width="10%"
        rounded
        />
    )
}
Icons.Web = function() {
  return (
    < Imagen
      title="Official Web"
      src={config.icons.web}
      width="50%"
      rounded
    />
  )
}
function Imagen(props) {
  return (
    <Image
      title={props.title}
      src={props.src}
      style={{ width: props.width }}
    />
  );
}

export default Icons;