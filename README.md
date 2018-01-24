![](https://imgur.com/QVEjVOs.png)

# Tune Tent

Tune Tent is a music showcasing site, loosely inspired by Bandcamp, which allows users to share their music with the world. On Tune Tent, everyone has the oppurtunity to upload albums and view each other's work.

You can check out the live version [here.](https://tune-tent.herokuapp.com/#/signup)

## Technology Overview

I built Tune Tent in just under two weeks; it was my first ever attempt at a full stack web application, and I learned a lot from the experience. I used used Postgres, ActiveRecord and Ruby on Rails to manage the backend, and Jbuilder to transform my backend data into JSON. In order to manage state and the frontend, I used React/Redux, as well as SASS for frontend styling. Finally, for image and audio hosting, I used Amazon S3 and Paperclip.

## User Authentication

User Authentication was built from the ground up using BCrypt for password hashing and React Modal for additional styling. I ended up using the same presentational component for both login and signup. The user authentication container component simply determined the formType to render based on the url path and passed the appropriate method as props.

```let formType = ownProps.location.pathname.slice(1);
  let processForm = (formType === 'login') ? login : signup;
  ```
  
![](https://imgur.com/mliKLVQ.png)
  
## Upload Album Form

One unique challenge to this project was figuring out a way to neatly upload many files of different types and from different models (album images with track audio files). The goal was to find a nice medium that didn't put too much strain on Ajax requests (AWS hashes can be quites cumbersome, especially when grouped together in an album bundle), while also maintaining a smooth UX flow. I sought simplicity in my solution by creating a pure album upload form , which redirects to the album show page. From there, the owner of the album has the option to add tracks whenever they choose. This was accomplished with conditional rendering, only presenting a "add track" button if the current user id matches the album's user_id. I also used a boolean toggle variable to make sure the user could only upload 1 track at a time (to limit strain on Ajax requests and keep the page from getting too cluttered with track input forms).

```if (this.state.addToggle && this.props.currentUser.id === this.props.album.user_id) {
      return (
      <form onSubmit={this.handleSubmit()}>
      <ul className="track-field-cont">

        <div className="track-field">
          <input
            type="text"
            placeholder="Track Title"
            value={this.state.title}
            onChange={this.update('title')} />

          <div className="hide-btn">
          <i className="fa fa-cloud-upload fa-2x" aria-hidden="true">
            <input
              type="file"
              onChange={this.updateAudioFile}
              className="file-btn"
              />
          </i>
          </div>
          <button className="base-btn" type="submit">Submit</button>
        </div>
      </ul>

    </form>
    );
  }
  ```
In the future I look forward to refactoring this form a bit, and experimenting with a dynamic form, built to handle a variable amount of track inputs.

## Future Implements

This project was a tremendous learning experience, and I am excited to continue to refactor and add functionality to it. I plan to add music playback and search functionality (I have already layed down some of the foundations for some of these features). Additionally I would like to expand the social aspects of the app even further by introducing follower functionality and a featured tracks component.
