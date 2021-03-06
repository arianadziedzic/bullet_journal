# SYNC

<p align="center">
  <img src="https://cloud.githubusercontent.com/assets/20157962/18859263/91555440-8440-11e6-968d-07b8aca42385.jpg" width="90%">
  </img>
</p>

My life is centered around to-do lists. Yes, I am type A. Yes, I am organized. And yes, I do it with old school pen a paper, which are given to me by my lovely fiancé who owns a notebook company. No. Joke. It's the best.</br>

Now there's a trend in the notebook world called Bullet Journaling. Essentially, it's a note-taking syntax that designates tasks with a dot, events with a circle, and notes with a dash. Since most fans of this style only use paper journals as their canvas, I wanted to take a crack at transferring it to the web with my application, SYNC.</br>

Enjoy it on my <a href="http://arianadziedzic.com/bullet_journal/index.html" target="_blank"> website</a>!

## Built With
* HTML
* CSS
* Javascript
* React
* Firebase

## Dipping Your Toe Into React
With CRUD (Create, Read, Update, Destroy) Apps making up so much of the landscape these days, React is a major win for developers when dealing with visually changing applications. During the wireframing, of React apps the end goal is to create a domino effect so that when one change occurs in a particular aspect of the application, it'll trigger other components to change seamlessly.</br>

The example below is just a taste of what the syntax looks like, but to get a better explanation of what React does and how to jump in, check out <a href="https://facebook.github.io/react/docs/tutorial.html" target="blank"> React's Documentation</a>. Seriously, they know what they're doing.

```
import React, { Component } from 'react';

const propTypes = {
  children: React.PropTypes.element.isRequired,
};

class Main extends Component {
  render() {
    return (
      <div id="main-component">
        {this.props.children}
      </div>
    );
  }
}

export default Main;

Main.propTypes = propTypes;
```
## A Tour of the end Results

Once logged into SYNC, the user's tasks, which have been saved in Firebase, are on the screen ready to go! To add an item, simply write in the input at the top of the page and click whatever category it falls under (task, event, or note). From there, it's rendered on the bottom of the list.</br>
<p align="center">
   <img src="https://cloud.githubusercontent.com/assets/20157962/18859268/97c42374-8440-11e6-8dcf-9cb193a13826.jpg" width="90%"></img>
</p>

After your list is looking nice and productive, you have the option to mark it as complete, (check mark icon), deleted (x icon), or snoozed (clock icon). A completed the task turns green because you are awesome. A snoozed task turns grey, so you can forget about it for forever. Just kidding! But not really...</br>

<p align="center">
  <img src="https://cloud.githubusercontent.com/assets/20157962/18859270/992342f4-8440-11e6-9866-346c5c1f4b5d.jpg" width="90%"></img>
</p>

## Future Components
Moving forward, there are two components I want to expand upon - Snooze and Archive. Instead of justing changing colors on a click, I'd like users to be able to set a timer to snooze items and have completed tasks automatically archived at the end of the day. Take a peak at the visual renderings below. </br>
<p>
<img src="https://cloud.githubusercontent.com/assets/20157962/18859273/9c170d7e-8440-11e6-8c1a-af9245546bb6.jpg" width="90%"></img>
</p>
<p>
<img src="https://cloud.githubusercontent.com/assets/20157962/18859274/9d8e9514-8440-11e6-880a-9fa453293d95.jpg" width="90%"></img>
<p>

## Author
Ariana Dziedzic

## Acknowledgments
My squad leader, David, for staying impressively calm through an incredibly strange Firebase hiccup.</br>
My parents for teaching me the importance of organization, especially with sock folding. </br>
My neighborhood Duane Reade who had a discount on chocolate bars this week. </br>
