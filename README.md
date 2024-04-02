<h1 align="center">
  SpeechNinja
</h1>

<h3 align="center">
  Type to Speak
</h3>

<p align="center">
  A fast light weight online text-to-speech tool for live conversations using synthesized voice.
  <br/>
  <b>Published on <a href="https://speechninja.co">speechninja.co</a></b> via Github pages. The published folder content is the 'docs' folder in this project. When commits are pushed to Github - then Github takes the 'docs' folder as the contents of the site.
</p>

This website is built on 2 parts - that have to be generated separately and then combined prior pushing changes to github.

(1) Website wrapper based on [doks.netlify.app](https://doks.netlify.app/)
(2) Tha app itself - which its source is in a different project - named 'Speechninja2'.

## How to develop:

(1) Develop the site wrapper here. Run `npm start` to test.
(2) Develop the app itself on Speechninja2 project. Test there.

# How to build & publish?

(1) Build the web wrapper here with `npm run build`
(2) Build the app on speechninja2 project.
(3) Copy the content built on speechninja2 to the 'docs/player/' folder here, in order to replace the contents with the app itself.
(4) Commit & push. Github will automatically take the updated content in 'docs' to the site.


