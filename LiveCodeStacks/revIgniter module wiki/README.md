# wiki
This is revIgniter module to implement browsing of Fedwiki json (The Federation).

## Aims
Federated wiki (Fedwiki) is a node.js project which allows read/write access to Federate wiki JSON files, that reside on many servers. The authroing environment is experimental and rapidly evolving. This can make it difficult to present the information in an acceptible way to many audiences. The solution we explore here is to create alternative viewer applications (servers), that render teh json content in their own way or using Javascript, but in a way which is compatible with the aims of read/ write essence of wiki.

## Skins or Servers
In a decentralised environment such as Fedwiki, we look to many servers to view the content. When it becomes trivial not just to install and use a server, on your laptop, or even mobile phone, but also to write your own custom server in a matter of minutes or hours - then we are close to the notion of a "skin" than the traditional notion of a server. Simple single page apps can browse federated data presenting the information the way the author want them to.

## revIgniter Module
The wiki module presented here is for the revIgniter framework for LiveCode. However we look to resuse as much of the code as possible for desktop and mobile servers. This is a new feature that was added to revIgniter recently - see [revigniter-hmvc-modules](https://github.com/bhall2001/revigniter-hmvc-modules)

## GIT Submodule
We are publishing this project in it's own repository so that it can be added as a submodule to the larger revIgniter project. In this way we look to be able to clone multiple modules into subfolders withing the revIgniter project. 
