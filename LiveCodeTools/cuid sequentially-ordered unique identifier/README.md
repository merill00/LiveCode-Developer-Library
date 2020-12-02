# cuid.livecodescript

To learn more about cuid and why it exists at all please see http://usecuid.org.

Implementation of https://github.com/ericelliott/cuid as a Livecode library.

A cuid is a portable and sequentially-ordered unique identifier designed for horizontal scalability and speed -- this version is ported from the reference implementation in Javascript.

### Install

In a Levure project just add it to app->libraries

If you're not using Levure you can load it just like any other standard library stack.

```
start using "cuid"
```

### Usage

put cuid() into tCUID
