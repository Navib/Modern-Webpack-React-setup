(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1231:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(10),i=n(16),c=n(39);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,m(t).apply(this,arguments))}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(a=[{key:"componentWillMount",value:function(){this.props.findArtist(this.props.params.id)}},{key:"componentWillReceiveProps",value:function(e){e.params.id!==this.props.params.id&&this.props.findArtist(e.params.id)}},{key:"componentWillUnmount",value:function(){this.props.resetArtist()}},{key:"onDeleteClick",value:function(){this.props.deleteArtist(this.props.params.id)}},{key:"renderAlbums",value:function(){var e=this.props.artist.albums;if(e&&e.map)return e.map((function(e){return l.a.createElement("div",{className:"card album",key:e.title},l.a.createElement("div",{className:"card-image"},l.a.createElement("img",{src:e.image}),l.a.createElement("span",{className:"card-title"},l.a.createElement("h4",null,e.title))),l.a.createElement("div",{className:"card-content"},l.a.createElement("div",null,l.a.createElement("h5",null,e.copiesSold),l.a.createElement("i",null,"copies sold")),l.a.createElement("div",null,l.a.createElement("h5",null,e.numberTracks),l.a.createElement("i",null,"tracks"))))}))}},{key:"render",value:function(){if(!this.props.artist)return l.a.createElement("div",null,'Todo: implement "FindArtist" query');var e=this.props.artist,t=e.name,n=e.age,a=e.genre,r=e.image,c=e.yearsActive,o=e.netWorth,s=e.labelName,u=e._id;return l.a.createElement("div",null,l.a.createElement("div",{className:"spacer"},l.a.createElement(i.Link,{to:"/"},"Back"),l.a.createElement(i.Link,{to:"/artists/".concat(u,"/edit")},"Edit"),l.a.createElement("a",{onClick:this.onDeleteClick.bind(this)},"Delete")),l.a.createElement("ul",{className:"collection artist-detail"},l.a.createElement("li",{className:"collection-item header"},l.a.createElement("div",null,l.a.createElement("h3",null,t),l.a.createElement("h5",null,"Master of ",a)),l.a.createElement("image",{src:r,className:"right"})),l.a.createElement("li",{className:"collection-item"},l.a.createElement("h5",null,c),l.a.createElement("p",null,l.a.createElement("i",null,"Years Active"))),l.a.createElement("li",{className:"collection-item"},l.a.createElement("h5",null,n),l.a.createElement("p",null,l.a.createElement("i",null,"Years Old"))),l.a.createElement("li",{className:"collection-item"},l.a.createElement("h5",null,"$",o),l.a.createElement("p",null,l.a.createElement("i",null,"Net Worth"))),l.a.createElement("li",{className:"collection-item"},l.a.createElement("h5",null,s),l.a.createElement("p",null,l.a.createElement("i",null,"Label"))),l.a.createElement("li",{className:"flex wrap"},this.renderAlbums())))}}])&&s(n.prototype,a),r&&s(n,r),t}(a.Component);t.default=Object(r.connect)((function(e){return{artist:e.artists.artist}}),c)(f)}}]);