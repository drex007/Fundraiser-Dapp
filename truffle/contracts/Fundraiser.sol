// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Fundraiser {

 string public name;
 string public url;
 string public imageURL;
 string public description;

 constructor(
  string memory _name,
  string memory _url, 
  string memory _imageUrL, 
  string memory _description
  
  ){
  name = _name;
  url = _url;
  imageURL = _imageUrL;
  description = _description;
 }

//  function name (string _name) public view returns {

//  }
}
